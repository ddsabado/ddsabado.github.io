import React, { useState } from 'react'
import accountBalances from './assets/finance/account-balances.png'
import creditCardUtilization from './assets/finance/credit-card-utilization.png'
import expenseIncome from './assets/finance/expense-income.png'
import installments from './assets/finance/installments.png'

const slides = [
  {
    title: 'Account Balances',
    image: accountBalances,
    text: 'A clear snapshot of available funds, helping users stay grounded in their cash flow at a glance.',
  },
  {
    title: 'Credit Card Utilization',
    image: creditCardUtilization,
    text: 'A focused view of spending habits and utilization trends that makes financial awareness feel effortless.',
  },
  {
    title: 'Expense and Income',
    image: expenseIncome,
    text: 'An easy-to-scan breakdown of incoming and outgoing money that turns raw transactions into useful insight.',
  },
  {
    title: 'Installments',
    image: installments,
    text: 'A calm, structured way to understand recurring commitments and keep repayments visible over time.',
  },
]

function FinanceDemoPage() {
  const [index, setIndex] = useState(0)

  const showNext = () => setIndex((i) => (i + 1) % slides.length)
  const showPrevious = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  const slide = slides[index]

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <p className="eyebrow">Project Showcase</p>
        <h1>Finance Tracker Demo</h1>
        <p className="detail-lead">
          A thoughtful finance dashboard experience built to make budgeting feel more approachable,
          visual, and motivating.
        </p>
        <a className="button secondary" href="#/">
          ← Back to Portfolio
        </a>
      </section>

      <section className="detail-content">
        <article className="detail-card single">
          <img className="detail-image" src={slide.image} alt={slide.title} />
          <div>
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>

            <div className="carousel-controls">
              <button type="button" className="carousel-button" onClick={showPrevious}>
                ← Prev
              </button>
              <span className="carousel-caption">{index + 1} / {slides.length}</span>
              <button type="button" className="carousel-button" onClick={showNext}>
                Next →
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default FinanceDemoPage
