import { useState } from 'react'
import financeImage1 from './assets/screenshots/finance-demo-1.png'
import financeImage2 from './assets/screenshots/finance-demo-2.png'
import financeImage3 from './assets/screenshots/finance-demo-3.png'

const projects = [
  {
    title: 'Guest Registration Demo',
    description: 'A polished registration flow for a demo guest management experience.',
    link: 'https://sites.google.com/view/demo-guest-reg/registration',
  },
  {
    title: 'Finance Tracker Demo',
    description: 'A clean dashboard concept for monitoring transactions and spending.',
    link: '#/finance-tracker',
    images: [financeImage1, financeImage2, financeImage3],
  },
  {
    title: 'POS System Demo',
    description: 'A simple point-of-sale interface focused on speed and usability.',
    link: 'https://sites.google.com/view/demo-pos-system/pos',
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  const financeImages = [financeImage1, financeImage2, financeImage3]

  const showNextImage = () => {
    setActiveIndex((current) => (current + 1) % financeImages.length)
  }

  const showPreviousImage = () => {
    setActiveIndex((current) => (current - 1 + financeImages.length) % financeImages.length)
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Dwight Sabado</h1>
        <p className="lead">
          I design and build practical web experiences that are clean, responsive, and easy to use.
        </p>
        <div className="actions">
          <a className="button primary" href="https://github.com/ddsabado" target="_blank" rel="noreferrer">
            View GitHub
          </a>
          <a className="button secondary" href="mailto:hello@example.com">
            Contact Me
          </a>
        </div>
      </section>

      <section className="card">
        <h2>Featured Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              {project.images ? (
                <div className="carousel">
                  <div className="carousel-frame">
                    <img className="project-image" src={project.images[activeIndex]} alt={`${project.title} screenshot ${activeIndex + 1}`} />
                  </div>
                  <div className="carousel-controls">
                    <button type="button" className="carousel-button" onClick={showPreviousImage}>
                      ← Prev
                    </button>
                    <span className="carousel-caption">{activeIndex + 1} / {project.images.length}</span>
                    <button type="button" className="carousel-button" onClick={showNextImage}>
                      Next →
                    </button>
                  </div>
                </div>
              ) : null}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="button secondary" href={project.link}>
                Open Demo
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
