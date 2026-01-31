import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid-4">
        <div>
          <img src="/assets/logo.png" alt="ALL PREMIUM" />
          <p>India's Most Trusted Affordable Premium Service Platform for Students & Creators.</p>
          
          {/* Security Trust Badges */}
          <div className="footer-security-badges">
            <div className="security-badge">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Secure Payment</span>
            </div>
            <div className="security-badge">
              <i className="fa-solid fa-lock"></i>
              <span>SSL Encrypted</span>
            </div>
            <div className="security-badge">
              <i className="fa-solid fa-check-circle"></i>
              <span>Verified Seller</span>
            </div>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#plans" onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault();
                window.location.href = '/#plans';
              }
            }}>Our Plans</a></li>
            <li><a href="/#how-to-order" onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault();
                window.location.href = '/#how-to-order';
              }
            }}>How to Order</a></li>
          </ul>
        </div>
        <div>
          <h4>We're Trusted!</h4>
          <ul className="ticks">
            <li>✅ 1000+ Happy Customers</li>
            <li>✅ Instant Delivery Guaranteed</li>
            <li>✅ 100% Replacement Guarantee</li>
            <li>🔒 Secure UPI Payments</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="https://instagram.com/Accessly_store" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* Telegram removed */}
            <a href="mailto:accessly01@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="foot-copy">
        <p>© 2025 ALL PREMIUM | All rights reserved.</p>
        <p>Made with ❤️ for Indian Students</p>
      </div>
    </footer>
  )
}

export default Footer
