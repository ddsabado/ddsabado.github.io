import SplideCarousel from './components/SplideCarousel'
import guestRegistrationImage1 from './assets/screenshots/guest-registration/full-form.png'
import guestRegistrationImage2 from './assets/screenshots/guest-registration/review-screen.png'
import guestRegistrationImage3 from './assets/screenshots/guest-registration/confirmation-screen.png'
import posImage1 from './assets/screenshots/pos-demo/orders-page.png'
import posImage2 from './assets/screenshots/pos-demo/sale-confirmation.png'
import posImage3 from './assets/screenshots/pos-demo/sales-page.png'
import financeImage1 from './assets/screenshots/finance-demo-1.png'
import financeImage2 from './assets/screenshots/finance-demo-2.png'
import financeImage3 from './assets/screenshots/finance-demo-3.png'

const projects = [
  {
    title: 'Guest Registration Demo',
    description: 'A polished registration flow for a demo guest management experience.',
    link: '#/guest-registration',
    images: [guestRegistrationImage1, guestRegistrationImage2, guestRegistrationImage3],
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
    link: '#/pos-system',
    images: [posImage1, posImage2, posImage3],
  },
]

function App() {
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
                  <SplideCarousel
                    slides={project.images.map((image, index) => ({
                      image,
                      title: `${project.title} screenshot ${index + 1}`,
                      alt: `${project.title} screenshot ${index + 1}`,
                    }))}
                    imageClassName="project-image"
                    autoplay={false}
                  />
                </div>
              ) : null}
              <h3>
                <a href={project.link}>
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
