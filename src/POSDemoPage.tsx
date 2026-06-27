import React, { useEffect, useState } from 'react'
import ordersPage from './assets/screenshots/pos-demo/orders-page.png'
import saleConfirmation from './assets/screenshots/pos-demo/sale-confirmation.png'
import salesPage from './assets/screenshots/pos-demo/sales-page.png'

const slides = [
  {
    title: 'Orders View',
    image: ordersPage,
    text: 'A focused orders interface that helps staff move quickly through transactions with clear visibility into active requests.',
  },
  {
    title: 'Sale Confirmation',
    image: saleConfirmation,
    text: 'A confirmation experience with printing options designed to make checkout feel smooth and dependable.',
  },
  {
    title: 'Sales Dashboard',
    image: salesPage,
    text: 'A compact sales view that surfaces key details at a glance for faster decisions and smoother day-to-day operations.',
  },
]

function POSDemoPage() {
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
        <h1>POS System Demo</h1>
        <p className="detail-lead">
          A practical point-of-sale experience built to keep transactions fast, clear, and reliable for staff and customers alike.
        </p>
        <a className="button secondary" href="#/">
          ← Back to Portfolio
        </a>
      </section>

      <section className="detail-card single">
        <img className="detail-image" src={ordersPage} alt="POS system orders preview" />

        <div>
          <h2>Project Snapshot</h2>
          <p className="detail-lead">
            This POS interface focuses on speed and usability, with screens for order management,
            sale confirmation, and sales tracking. The experience is designed to feel simple in a busy environment.
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

export default POSDemoPage
