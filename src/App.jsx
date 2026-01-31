import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Also try with requestAnimationFrame for better timing
    window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  }, [pathname, search])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  )
}

export default App
