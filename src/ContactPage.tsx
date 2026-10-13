const email = "dwightsabado@gmail.com"
const githubUrl = "https://github.com/ddsabado"

export default function ContactPage() {
  return (
    <main className="contact-page contact-page--simple">
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <a href="#contact">Dwight Sabado</a>
        <div><a href="#/">Projects</a><a aria-current="page" href="#contact">Contact</a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </nav>
      <section className="contact-simple" aria-labelledby="contact-heading">
        <h1 id="contact-heading">Contact</h1>
        <div className="contact-simple-links">
          <a href={`mailto:${email}`}><span>Email</span><strong>{email}</strong><span aria-hidden="true">↗</span></a>
          <a href={githubUrl} target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/ddsabado</strong><span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  )
}
