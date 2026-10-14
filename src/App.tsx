import { useRef, useState } from "react";
import ledgrr from "./assets/screenshots/ledgrr-dashboard.png";
import loft from "./assets/screenshots/guest-registration/hidden-loft-desktop.png";
import splittr from "./assets/screenshots/splittr-desktop.png";
const projects = [
  {
    title: "Hidden Loft",
    desc: "Pre-arrival guest registration and authorization workflows.",
    image: loft,
    href: "https://sites.google.com/view/demo-guest-reg/registration",
  },
  {
    title: "Ledgrr",
    desc: "A personal finance dashboard for tracking balances, credit cards, budgets, and spending.",
    image: ledgrr,
    href: "https://ledgrr-full.vercel.app/demo",
  },
  {
    title: "Splittr",
    desc: "A private, local-first web app that helps friends split shared bills and settle up clearly.",
    image: splittr,
    href: "https://ddsabado-splittr.vercel.app/",
  },
];
export default function App() {
  const [active, setActive] = useState(0);
  const [changing, setChanging] = useState(false);
  const timer = useRef<number>();
  const p = projects[active];
  const select = (i: number) => {
    if (i === active || changing) return;
    setChanging(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setActive(i);
      setChanging(false);
    }, 180);
  };
  return (
    <main className="portfolio-shell">
      <section id="projects" className="switcher">
        {projects.map((item, i) => (
          <button
            key={item.title}
            onClick={() => select(i)}
            aria-pressed={active === i}
            className={active === i ? "active" : ""}
          >
            0{i + 1} {item.title}
          </button>
        ))}
      </section>
      <section className={`dossier ${changing ? "is-changing" : ""}`} id="top">
        <div>
          <h1>Projects</h1>
          <div className="project-copy">
            <div className="project-details">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
            </div>
            <a href={p.href} target="_blank" rel="noreferrer">
              View live demo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <img
          className="project-stage"
          src={p.image}
          alt={`${p.title} interface preview`}
        />
      </section>
    </main>
  );
}
