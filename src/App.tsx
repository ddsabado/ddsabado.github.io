const projects = [
  {
    title: 'Guest Registration Demo',
    description: 'A polished registration flow for a demo guest management experience.',
    link: 'https://sites.google.com/view/demo-guest-reg/registration',
  },
  {
    title: 'Finance Tracker Demo',
    description: 'A clean dashboard concept for monitoring transactions and spending.',
    link: 'https://sites.google.com/view/demo-finance-tracker/dashboard',
  },
  {
    title: 'POS System Demo',
    description: 'A simple point-of-sale interface focused on speed and usability.',
    link: 'https://sites.google.com/view/demo-pos-system/pos',
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="button secondary" href={project.link} target="_blank" rel="noreferrer">
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
