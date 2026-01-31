import React from 'react'
import './PriceComparisonTable.css'

function PriceComparisonTable() {
  const comparisons = [
    {
      service: 'ChatGPT 5 Pro',
      icon: '🤖',
      official: '₹1,999',
      ours: '₹149',
      save: '₹1,850',
      savePercent: '92%'
    },
    {
      service: 'Claude Max',
      icon: '🧠',
      official: '₹1,799',
      ours: '₹299',
      save: '₹1,500',
      savePercent: '83%'
    },
    {
      service: 'Cursor AI Pro',
      icon: '💻',
      official: '₹1,699',
      ours: '₹499',
      save: '₹1,200',
      savePercent: '71%'
    },
    {
      service: 'LinkedIn Premium',
      icon: '💼',
      official: '₹1,299',
      ours: '₹499',
      save: '₹800',
      savePercent: '62%'
    },
    {
      service: 'Replit Core',
      icon: '⚡',
      official: '₹999',
      ours: '₹499',
      save: '₹500',
      savePercent: '50%'
    },
    {
      service: 'Netflix 4K',
      icon: '🎬',
      official: '₹649',
      ours: '₹149',
      save: '₹500',
      savePercent: '77%'
    },
    {
      service: 'Canva Pro',
      icon: '🎨',
      official: '₹999',
      ours: '₹99',
      save: '₹900',
      savePercent: '90%'
    },
    {
      service: 'YouTube Premium',
      icon: '📺',
      official: '₹149',
      ours: '₹79',
      save: '₹70',
      savePercent: '47%'
    },
    {
      service: 'Spotify Premium',
      icon: '🎵',
      official: '₹119',
      ours: '₹59',
      save: '₹60',
      savePercent: '50%'
    }
  ]

  const totalOfficial = 9711
  const totalOurs = 2322
  const totalSave = 7389
  const yearlySavings = totalSave * 12

  return (
    <section className="price-comparison-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            💰 Why Pay More? Compare & Save!
          </h2>
          <p className="section-subtitle">
            Get the same premium services at a fraction of the cost
          </p>
        </div>

        <div className="comparison-table-wrapper">
          <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Official Price</th>
                <th className="highlight-col">ALL PREMIUM</th>
                <th>You Save</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index}>
                  <td className="service-name">
                    <span className="service-icon">{item.icon}</span>
                    <span>{item.service}</span>
                  </td>
                  <td className="official-price">
                    <span className="price-strike">{item.official}</span>
                    <span className="per-month">/month</span>
                  </td>
                  <td className="our-price highlight-col">
                    <span className="price-big">{item.ours}</span>
                    <span className="per-month">/month</span>
                  </td>
                  <td className="savings">
                    <span className="save-amount">{item.save}</span>
                    <span className="save-percent">{item.savePercent} OFF</span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="total-row">
                <td><strong>Total Monthly</strong></td>
                <td className="official-price">
                  <strong>₹{totalOfficial}</strong>
                </td>
                <td className="our-price highlight-col">
                  <strong>₹{totalOurs}</strong>
                </td>
                <td className="savings">
                  <strong className="save-amount">₹{totalSave}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
          </div>
        </div>

        <div className="savings-highlight">
          <div className="savings-card">
            <div className="savings-icon">🎉</div>
            <div className="savings-content">
              <h3>Your Yearly Savings</h3>
              <div className="savings-amount">₹{yearlySavings.toLocaleString()}</div>
              <p>That's enough for a vacation! 🏖️</p>
            </div>
          </div>
          <div className="savings-cta">
            <p className="cta-text">Why waste money when you can save?</p>
            <a href="#plans" className="cta-button">
              Start Saving Today →
            </a>
          </div>
        </div>

        <div className="comparison-note">
          <p>💡 <strong>Note:</strong> All prices are per month. Official prices are from respective company websites as of Jan 2026.</p>
        </div>
      </div>
    </section>
  )
}

export default PriceComparisonTable
