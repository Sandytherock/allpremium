import React from 'react'

function FAQSection() {
  return (
    <section id="faq" className="faq">
      <div className="container narrow">
        <h2>📋 Frequently Asked Questions (FAQ)</h2>
        <p className="muted" style={{ textAlign: 'center', marginBottom: '30px' }}>
          Common questions about our premium services
        </p>
        
        <div className="accordion">
          <details>
            <summary>🔄 What if the account doesn't work?</summary>
            <p>
              We offer a <strong>100% Replacement Guarantee</strong>. If you face any login issues or service problems, 
              we'll provide an instant replacement. Simply message us on Instagram or WhatsApp 
              and we'll resolve the issue within <strong>24-48 hours</strong>.
            </p>
          </details>

          <details>
            <summary>⏰ How long does delivery take exactly?</summary>
            <p>
              After payment confirmation, delivery typically takes <strong>1 to 6 hours</strong>. Usually 
              you'll receive your account within <strong>2-3 hours</strong>. During peak hours (evening), 
              there might be slight delays, but maximum delivery time is 6 hours. Instant delivery is available 
              for priority orders.
            </p>
          </details>

          <details>
            <summary>🔒 Are shared accounts safe? Will I get banned?</summary>
            <p>
              Shared accounts are <strong>100% safe</strong>. We've served 1000+ customers without any 
              major issues. We carefully manage the number of members per account. 
              Your <strong>privacy is protected</strong> - no one gets access to your personal details. 
              If you need complete privacy, private account options are available in premium plans.
            </p>
          </details>

          <details>
            <summary>💰 What is your refund policy?</summary>
            <p>
              Our policy is: <strong>No Refunds, Only Replacements</strong>. If an account stops working, 
              we provide a replacement. Refunds are only issued in extreme cases when we cannot deliver 
              the service. Please carefully select your plan, and if you have doubts, DM us on Instagram first.
            </p>
          </details>

          <details>
            <summary>🆚 What's the difference between Private and Shared accounts?</summary>
            <p>
              <strong>Shared Account:</strong> Multiple users (3-10 members) share the same account. 
              Budget-friendly but may have minor limitations (like simultaneous usage limits).<br/><br/>
              <strong>Private Account:</strong> Exclusively for you - no sharing. Full control, zero downtime, 
              no limitations. Best for agencies and heavy users.
            </p>
          </details>

          <details>
            <summary>📱 What's the process after payment?</summary>
            <p>
              <strong>Step 1:</strong> Make payment via UPI - <code>8530911484@pthdfc</code><br/>
              <strong>Step 2:</strong> Fill the Google Form with screenshot<br/>
              <strong>Step 3:</strong> Send a DM on Instagram for confirmation<br/>
              <strong>Step 4:</strong> Receive account details within 1-6 hours (login, password, instructions)<br/>
              <strong>Step 5:</strong> Login and enjoy premium access! 🎉
            </p>
          </details>

          <details>
            <summary>🛡️ How long will the account remain valid?</summary>
            <p>
              The validity matches your selected plan. For example:
              <strong> 1 Month = 30 days</strong>, <strong>3 Months = 90 days</strong>, etc. 
              If any issues arise during this period, you'll get a replacement, but validity doesn't extend. 
              You'll receive a renewal reminder before expiry.
            </p>
          </details>

          <details>
            <summary>📞 How do I get support if I face problems?</summary>
            <p>
              We're available 24/7 (response time 2-12 hours):<br/>
              • <strong>Instagram:</strong> @ALL_PREMIUM_store (fastest)<br/>
              • <strong>WhatsApp:</strong> +91 85309 11484<br/>
              • <strong>Email:</strong> accessly01@gmail.com<br/>
              Report any issues instantly and we'll help you out!
            </p>
          </details>

          <details>
            <summary>🎯 Can I order multiple services together?</summary>
            <p>
              <strong>Absolutely!</strong> You can order multiple services in a single order. 
              For example: ChatGPT + Netflix + Canva together. We also offer 
              <strong> special discounts</strong> on bulk orders. DM us on Instagram to discuss.
            </p>
          </details>

          <details>
            <summary>⚠️ Is this legal? Is it safe?</summary>
            <p>
              We <strong>resell premium accounts</strong> - this is a <strong>grey market practice</strong> 
              (not illegal, but not officially endorsed by service providers). Thousands of people use such services safely. 
              We provide responsible service with a replacement guarantee. 
              Your payment is secure via UPI.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
