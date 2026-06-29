import SplideCarousel from "./components/SplideCarousel";
import guestRegistrationImage1 from "./assets/screenshots/guest-registration/full-form.png";
import guestRegistrationImage2 from "./assets/screenshots/guest-registration/review-screen.png";
import guestRegistrationImage3 from "./assets/screenshots/guest-registration/confirmation-screen.png";
import posImage1 from "./assets/screenshots/pos-demo/orders-page.png";
import posImage2 from "./assets/screenshots/pos-demo/sale-confirmation.png";
import posImage3 from "./assets/screenshots/pos-demo/sales-page.png";
import financeImage1 from "./assets/screenshots/finance-demo-1.png";
import financeImage2 from "./assets/screenshots/finance-demo-2.png";
import financeImage3 from "./assets/screenshots/finance-demo-3.png";

const projects = [
  {
    title: "Guest Registration Demo",
    description:
      "A polished registration flow for a demo guest management experience.",
    link: "#/guest-registration",
    images: [
      guestRegistrationImage1,
      guestRegistrationImage2,
      guestRegistrationImage3,
    ],
  },
  {
    title: "Finance Tracker Demo",
    description:
      "A clean dashboard concept for monitoring transactions and spending.",
    link: "#/finance-tracker",
    images: [financeImage1, financeImage2, financeImage3],
  },
  {
    title: "POS System Demo",
    description:
      "A simple point-of-sale interface focused on speed and usability.",
    link: "#/pos-system",
    images: [posImage1, posImage2, posImage3],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(153,182,248,0.18),transparent_55%)] px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto mb-5 w-full max-w-5xl rounded-3xl border border-perano-200/15 bg-perano-950/75 p-8 shadow-[0_20px_50px_rgba(29,32,73,0.3)] backdrop-blur-xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-perano-300">
          Portfolio
        </p>
        <h1 className="mb-3 text-4xl font-semibold sm:text-5xl">
          Dwight Sabado
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-perano-100">
          I design and build practical web experiences that are clean,
          responsive, and easy to use.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex rounded-full bg-perano-400 px-4 py-2.5 font-semibold text-perano-950 transition hover:bg-perano-300"
            href="https://github.com/ddsabado"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
          <a
            className="inline-flex rounded-full border border-perano-200/20 px-4 py-2.5 font-semibold text-perano-50 transition hover:bg-perano-200/10"
            href="mailto:hello@example.com"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl rounded-3xl border border-perano-200/15 bg-perano-950/75 p-8 shadow-[0_20px_50px_rgba(29,32,73,0.3)] backdrop-blur-xl">
        <h2 className="text-2xl font-semibold text-perano-50">
          Featured Projects
        </h2>
        <div className="mt-6 grid gap-4">
          {projects.map((project) => (
            <article
              className="rounded-2xl border border-perano-200/12 bg-perano-200/5 p-4"
              key={project.title}
            >
              {project.images ? (
                <div className="mb-4">
                  <SplideCarousel
                    slides={project.images.map((image, index) => ({
                      image,
                      title: `${project.title} screenshot ${index + 1}`,
                      alt: `${project.title} screenshot ${index + 1}`,
                    }))}
                    imageClassName="max-h-[420px] w-full rounded-[10px] object-contain"
                    autoplay={false}
                  />
                </div>
              ) : null}
              <h3 className="mb-2 text-xl font-semibold">
                <a
                  className="text-inherit no-underline transition hover:text-perano-300 focus:text-perano-300"
                  href={project.link}
                >
                  {project.title}
                </a>
              </h3>
              <p className="m-0 text-perano-100">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
