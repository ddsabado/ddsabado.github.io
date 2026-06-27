import React, { useEffect, useState } from 'react'
import fullForm from './assets/screenshots/guest-registration/full-form.png'
import authorizationEmail from './assets/screenshots/guest-registration/authorization-email.png'
import authorizationLetter from './assets/screenshots/guest-registration/authorization-letter.png'
import confirmationEmail from './assets/screenshots/guest-registration/confirmation-email.png'
import confirmationScreen from './assets/screenshots/guest-registration/confirmation-screen.png'
import reviewScreen from './assets/screenshots/guest-registration/review-screen.png'

const slides = [
  {
    title: 'Complete Guest Form',
    image: fullForm,
    text: 'A guided form experience that collects the details needed for registration without overwhelming the guest.',
  },
  {
    title: 'Authorization Email',
    image: authorizationEmail,
    text: 'A clear email step ensures guests receive the next action promptly and understand what comes next.',
  },
  {
    title: 'Authorization Letter',
    image: authorizationLetter,
    text: 'The generated authorization letter gives a formal, polished handoff that feels trustworthy and complete.',
  },
  {
    title: 'Review Before Submit',
    image: reviewScreen,
    text: 'A dedicated review screen lets guests double-check every field before final submission.',
  },
  {
    title: 'Confirmation Experience',
    image: confirmationScreen,
    text: 'The confirmation screen and follow-up email close the loop with reassurance and clear next steps.',
  },
  {
    title: 'Confirmation Email',
    image: confirmationEmail,
    text: 'A polished confirmation email reinforces the successful registration and keeps the experience feeling complete.',
  },
]

function GuestRegistrationDemoPage() {
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
        <h1>Guest Registration Demo</h1>
        <p className="detail-lead">
          A polished guest registration experience that guides people through form completion,
          review, and confirmation with clarity and confidence.
        </p>
        <a className="button secondary" href="#/">
          ← Back to Portfolio
        </a>
        <a className="button secondary" href="https://sites.google.com/view/demo-guest-reg/registration" target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </section>

      <section className="detail-card single">
        <img className="detail-image" src={fullForm} alt="Guest registration form preview" />

        <div>
          <h2>Project Snapshot</h2>
          <p className="detail-lead">
            This flow was designed to make guest registration feel calm and straightforward, with a
            clear sequence from form entry to confirmation email. It combines a structured UI with a
            thoughtful communication experience so each step feels intentional.
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

export default GuestRegistrationDemoPage
