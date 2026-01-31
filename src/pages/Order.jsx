import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import WhatsAppCommunityBanner from '../components/WhatsAppCommunityBanner'
import { planMap, coupons } from '../data/orderPlansMap'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import '../components/WhatsAppCommunityBanner.css'

function Order() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan && planMap[plan]) {
      const planData = planMap[plan]
      setSelectedPlan(planData)

    }
    
    // Force scroll to top with multiple methods
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Also use setTimeout to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 10)
  }, [searchParams])

  const applyCoupon = () => {
    const code = couponCode.toUpperCase()
    if (coupons[code]) {
      setDiscount(coupons[code])
      setCouponApplied(true)
      setCouponError('')
    } else {
      setCouponError('Invalid coupon code')
      setDiscount(0)
      setCouponApplied(false)
    }
  }

  const calculateFinalAmount = () => {
    if (!selectedPlan) return 0
    const baseAmount = parseInt(selectedPlan.amount)
    const discountAmount = (baseAmount * discount) / 100
    return Math.round(baseAmount - discountAmount)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const submitBtn = form.querySelector('button[type="submit"]')
    
    // Disable submit button to prevent double submission
    submitBtn.disabled = true
    submitBtn.textContent = 'Submitting...'
    
    try {
      const formData = new FormData(form)
      
      // Handle file upload (screenshot)
      const screenshotFile = formData.get('screenshot')
      let base64 = ''
      let mime = ''
      let screenshotUrl = ''
      
      if (screenshotFile && screenshotFile.size > 0) {
        const result = await fileToBase64(screenshotFile)
        base64 = result.split(',')[1] || result // Get base64 part only
        mime = screenshotFile.type
        screenshotUrl = result // Full data URL for display
      }
      
      // Extract form data
      const name = formData.get('name')
      const email = formData.get('email')
      const phone = formData.get('phone')
      const plan = formData.get('plan')
      const amount = formData.get('amount')
      const transactionId = formData.get('transactionId')
      
      // Prepare payload for Google Sheets
      const payload = {
        name,
        email,
        phone,
        plan,
        amount,
        transactionId,
        screenshotBase64: base64,
        screenshotType: mime,
        discountCode: couponCode || 'None',
        finalAmount: calculateFinalAmount().toString()
      }
      
      // 1. Send to Google Sheets (primary backup)
      const sheetsResponse = await fetch(
        'https://script.google.com/macros/s/AKfycbwDIk93__B2FN5MXbI6IJgbMpAQyTY1L9-COkFSbSX21XgG1Fask4FAz7adVTkfzxGumQ/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(payload)
        }
      )
      
      if (!sheetsResponse.ok) {
        throw new Error('Failed to submit to Google Sheets')
      }
      
      // 2. Save to Supabase (for live notifications)
      if (isSupabaseConfigured()) {
        try {
          const { error } = await supabase
            .from('orders')
            .insert([{
              name: name,
              email: email,
              phone: phone,
              plan_name: plan,
              plan_amount: selectedPlan ? selectedPlan.amount : amount.replace('₹', ''),
              discount_code: couponCode || null,
              final_amount: calculateFinalAmount().toString(),
              screenshot_url: screenshotUrl || null
            }])
          
          if (error) {
            console.warn('Failed to save to Supabase:', error.message)
            // Don't throw - Google Sheets saved successfully, Supabase is optional
          } else {
            console.log('✅ Order saved to Supabase for live notifications!')
          }
        } catch (supabaseErr) {
          console.warn('Supabase error (non-critical):', supabaseErr)
        }
      }
      
      alert('Your details have been submitted! We will verify and deliver shortly.')
      form.reset()
      setCouponCode('')
      setDiscount(0)
      setCouponApplied(false)
      navigate('/')
      
    } catch (err) {
      console.error('Submission error:', err)
      alert('Error submitting order. Please try again or contact us on Instagram/WhatsApp.')
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = 'Submit Details'
    }
  }
  
  // Helper function to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (err) => reject(err)
    })
  }

  return (
    <div className="order-body">
      <WhatsAppCommunityBanner />
      <Header />
      <main className="order-wrap">
        <section className="order-card">
          <h1>Complete Your Payment</h1>
          
          {selectedPlan && (
            <div className="plan-head" style={{ display: 'flex' }}>
              <img src={selectedPlan.logo} alt="Plan" />
              <span className="pname">{selectedPlan.name}</span>
            </div>
          )}

          <div className="qr">
            <img src="/assets/upi-qr.png.jpg" alt="UPI QR Code" />
            <div className="upi-line">
              <span>UPI ID:</span> <code>8530911484@pthdfc</code>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="two">
              <label>
                <span>Your Name</span>
                <input type="text" name="name" required />
              </label>
              <label>
                <span>Your Email</span>
                <input type="email" name="email" required />
              </label>
            </div>

            <label>
              <span>Your Phone</span>
              <input type="tel" name="phone" required />
            </label>

            <div className="two">
              <label>
                <span>Selected Plan</span>
                <input 
                  type="text" 
                  name="plan" 
                  value={selectedPlan ? selectedPlan.name : ''} 
                  readOnly 
                  required 
                />
              </label>
              <label>
                <span>Amount</span>
                <input 
                  type="text" 
                  name="amount" 
                  value={selectedPlan ? `₹${calculateFinalAmount()}` : ''} 
                  readOnly 
                  required 
                />
              </label>
            </div>

            <div className="coupon-row">
              <input 
                type="text" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code" 
                aria-label="Coupon Code" 
              />
              <button type="button" className="btn-ghost" onClick={applyCoupon}>Apply</button>
            </div>
            
            {couponApplied && (
              <p className="ok">✅ Coupon applied successfully! {discount}% off</p>
            )}
            {couponError && (
              <p className="warn">❌ {couponError}</p>
            )}
            {discount > 0 && selectedPlan && (
              <p className="ok">Discount: ₹{Math.round((parseInt(selectedPlan.amount) * discount) / 100)}</p>
            )}

            <label>
              <span>Transaction ID / UTR</span>
              <input type="text" name="transactionId" required />
            </label>

            <label className="file">
              <span>Upload Payment Screenshot (optional)</span>
              <input type="file" name="screenshot" accept="image/*" />
            </label>

            <button type="submit" className="btn-primary wfull">Submit Details</button>

            <p className="tiny">
              Facing issues? Reach us on{' '}
              <a href="https://instagram.com/Accessly_store" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>
          </form>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Order
