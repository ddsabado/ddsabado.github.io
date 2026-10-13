type PortfolioNavProps = {
  current: "projects" | "contact"
}

export default function PortfolioNav({ current }: PortfolioNavProps) {
  return (
    <nav className={`portfolio-nav portfolio-nav--${current}`} aria-label="Primary navigation">
      <div className="portfolio-nav__links">
        <a aria-current={current === "projects" ? "page" : undefined} href="#/">Projects</a>
        <a aria-current={current === "contact" ? "page" : undefined} href="#contact">Contact</a>
        <a href="https://github.com/ddsabado" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
      <a className="portfolio-nav__name" href="#/">Dwight Sabado</a>
    </nav>
  )
}
