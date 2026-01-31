import React from 'react'

function PromoSection() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-card">
          <div className="promo-text">
            <h2>📢 Want 10% Off Instantly?</h2>
            <p>Promote our <strong>Instagram page</strong> or <strong>website</strong> on your story or post and grab <strong>extra 10% off</strong> on any order.</p>
            <p className="muted">Tag <strong>@Accessly_store</strong> and send a screenshot on Instagram.</p>
            <a href="https://instagram.com/Accessly_store" target="_blank" rel="noopener noreferrer" className="btn-primary">Promote & Get Discount</a>
          </div>
          <div className="promo-art" aria-hidden="true">
            <i className="fa-solid fa-bolt"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoSection
