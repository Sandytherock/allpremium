import React from 'react'

function WhatsAppOrderButton({ plan, price, discount }) {
  const handleWhatsAppOrder = () => {
    const phoneNumber = '918530911484' // Your WhatsApp Business Number
    
    const message = `Hi! 👋

I want to order:
📦 *${plan}*
💰 Price: ₹${price}${discount ? ` (${discount}% OFF)` : ''}

Please confirm availability and payment details.

Thank you! 🙏`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(whatsappURL, '_blank')
  }

  return (
    <button 
      onClick={handleWhatsAppOrder}
      className="whatsapp-order-btn"
      title="Order instantly via WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.552 4.17 1.605 6L.058 23.942l6.134-1.534A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.758-.543-5.358-1.57l-.384-.243-3.98 1.01 1.02-3.914-.257-.4A9.96 9.96 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
        <path d="M17.66 14.57c-.28-.14-1.65-.82-1.91-.91-.25-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.53-.88-2.1-.23-.55-.46-.47-.64-.48-.16-.01-.35-.01-.54-.01s-.49.07-.74.35c-.25.28-.96.94-.96 2.29s.98 2.66 1.12 2.85c.14.19 1.96 2.99 4.75 4.19.66.28 1.18.45 1.58.57.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"/>
      </svg>
      Order via WhatsApp
    </button>
  )
}

export default WhatsAppOrderButton
