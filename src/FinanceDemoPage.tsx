import React, { useEffect, useState } from 'react'
import accountBalances from './assets/finance/account-balances.png'
import creditCardUtilization from './assets/finance/credit-card-utilization.png'
import expenseIncome from './assets/finance/expense-income.png'
import installments from './assets/finance/installments.png'
import financeImage1 from './assets/screenshots/finance-demo-1.png'


const slides = [
  {
    title: 'Account Balances',
    image: accountBalances,
    text: 'A clear snapshot of available funds, helping users stay grounded in their cash flow at a glance.',
  },
  {
    title: 'Credit Card Utilization',
    image: creditCardUtilization,
    text: 'Monitor credit card usage across billing cycles so you always know where you stand before your statement closes.',
  },
  {
    title: 'Expenses and Income',
    image: expenseIncome,
    text: 'See exactly how much you\'ve spent per category each month, with drill-down into subcategories and individual transactions.',
  },
  {
    title: 'Installments',
    image: installments,
    text: 'Track installment plans with automatic monthly payment logging so nothing slips through.',
  },
]

function FinanceDemoPage() {
  const [index, setIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const showNext = () => {
    setIndex((i) => (i + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const showPrevious = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return undefined

    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [isAutoPlaying])

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
        <a className="button secondary" href="https://sites.google.com/view/demo-finance-tracker/dashboard" target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </section>

      <section className="detail-card single">
        <img className="detail-image" src={financeImage1} alt="Finance tracker dashboard preview" />

        <div>
          <h2>Project Snapshot</h2>
          <p className="detail-lead">
            A personal finance tracker built on Google Sheets and Apps Script, featuring a real-time web
            dashboard with account balances, credit card utilization, installment tracking, and monthly
            expense breakdowns — integrated with an iOS Shortcut for receipt-based transaction entry.
          </p>
        </div>
      </section>

      <section className="detail-content">
        <article className="detail-card">
          <div className="carousel-frame">
            <img className="detail-image carousel-image" src={slide.image} alt={slide.title} />

            <button
              type="button"
              className="carousel-overlay-button left"
              onClick={showPrevious}
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              type="button"
              className="carousel-overlay-button right"
              onClick={showNext}
              aria-label="Next slide"
            >
              →
            </button>

            <div className="carousel-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? 'active' : ''}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="carousel-copy">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default FinanceDemoPage
