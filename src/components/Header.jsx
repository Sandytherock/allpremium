import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shouldScrollToTop, setShouldScrollToTop] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll to top when location changes and shouldScrollToTop is true
  useEffect(() => {
    if (shouldScrollToTop && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      setShouldScrollToTop(false)
    }
  }, [location.pathname, shouldScrollToTop])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={() => window.scrollTo(0, 0)}>
          <img src="/assets/logo.png" alt="ALL PREMIUM" loading="eager" className="brand-logo" />
        </Link>
        <button 
          className="hamburger" 
          aria-label="Open menu" 
          aria-controls="mainnav"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="mainnav" className={`main-nav ${isMenuOpen ? 'open' : ''}`} aria-label="primary">
          <a 
            href="#top"
            className={isActive('/')}
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              
              // If already on homepage, just scroll to top
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              } else {
                // If on another page, set flag and navigate
                setShouldScrollToTop(true);
                navigate('/');
              }
            }}
          >
            Home
          </a>
          <a href={location.pathname === '/' ? '#plans' : '/#plans'} onClick={(e) => {
            if (location.pathname !== '/') {
              e.preventDefault();
              window.location.href = '/#plans';
            } else {
              setIsMenuOpen(false);
            }
          }}>Plans</a>
          <a href={location.pathname === '/' ? '#how-to-order' : '/#how-to-order'} onClick={(e) => {
            if (location.pathname !== '/') {
              e.preventDefault();
              window.location.href = '/#how-to-order';
            } else {
              setIsMenuOpen(false);
            }
          }}>How to Order</a>
          <a href="https://wa.me/918530911484" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://www.instagram.com/Accessly_store" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
