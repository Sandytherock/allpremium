import React from 'react'

function TestimonialsSection() {
  const testimonials = [
    { text: "I got ChatGPT & Netflix both from ALL PREMIUM. Delivery was super fast!", author: "Aayush K." },
    { text: "Affordable and 100% working accounts. Highly recommended!", author: "Priya R." },
    { text: "Great service! My Canva Pro was activated within minutes.", author: "Rohan S." },
    { text: "My go-to for all OTT and AI tools. Super easy process!", author: "Neha P." },
    { text: "Very professional and trustworthy. I've purchased multiple plans!", author: "Aditya M." }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2>⭐ What Our Customers Say</h2>
        <p className="muted" style={{ textAlign: 'center', marginBottom: '30px' }}>
          Real reviews from real customers
        </p>
        
        <div className="t-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <blockquote>{testimonial.text}</blockquote>
              <cite>— {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
