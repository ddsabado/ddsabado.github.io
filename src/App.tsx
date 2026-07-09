import { useState } from "react";
import SplideCarousel from "./components/SplideCarousel";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import guestRegistrationImage1 from "./assets/screenshots/guest-registration/full-form.png";
import guestRegistrationImage2 from "./assets/screenshots/guest-registration/review-screen.png";
import guestRegistrationImage3 from "./assets/screenshots/guest-registration/confirmation-screen.png";
import posImage1 from "./assets/screenshots/pos-demo/orders-page.png";
import posImage2 from "./assets/screenshots/pos-demo/sale-confirmation.png";
import posImage3 from "./assets/screenshots/pos-demo/sales-page.png";
import financeImage1 from "./assets/screenshots/finance-demo-1.png";
import financeImage2 from "./assets/screenshots/finance-demo-2.png";
import financeImage3 from "./assets/screenshots/finance-demo-3.png";
import hiddenLoftThumbnail from "./assets/screenshots/guest-registration/thumbnail.jpeg";
import sweepierThumbnail from "./assets/screenshots/finance-sweepier-thumbnail.png";

const projects = [
  {
    title: "Hidden Loft",
    description:
      "Check-in before you even arrive. Guests submit their details and IDs online ahead of time, eliminating paperwork on arrival day. The host automatically receives a formatted guest summary and authorization letter, making the handoversmooth on both ends.",
    thumbnail: hiddenLoftThumbnail,
    tags: ["Google Apps Script", "JavaScript", "Google Workspace"],
    demoLink: "https://sites.google.com/view/demo-guest-reg/registration",
  },
  {
    title: "Sweepier",
    description:
      "Your finances, simplified. Tracks account balances, monitors credit card utilization with due date alerts, and breaks down monthly spending by category — with installment scheduling built right in.",
    thumbnail: sweepierThumbnail,
    tags: ["Google Apps Script", "JavaScript", "Google Workspace"],
    demoLink: "https://sites.google.com/view/demo-finance-tracker/dashboard",
  },
  {
    title: "Pointr",
    description:
      "No server, no problem. A fully functional point-of-sale system built entirely on Google Sheets, with a product catalog, multi-payment checkout, automatic inventory deduction, and order management. Role-based access for Cashiers, Managers, and Admins — plus a daily sales dashboard with KPIs, top items, and low stock alerts.",
    thumbnail: posImage1,
    tags: ["Google Apps Script", "JavaScript", "Google Workspace"],
    demoLink: "https://sites.google.com/view/demo-pos-system/pos",
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_55%)] px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        className={`lg:hidden fixed left-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-950 shadow-lg shadow-black/5 transition hover:bg-slate-50 ${
          mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="text-lg">☰</span>
      </button>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-64 border-r border-slate-200 bg-white/95 p-5 shadow-xl transition-transform duration-300 ease-out flex flex-col justify-between ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-lg font-semibold text-slate-950"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <ul className="mt-10 flex flex-col gap-3 text-slate-950 text-sm">
              <li>
                <a
                  className="font-semibold no-underline transition hover:text-slate-800"
                  href="https://github.com/ddsabado"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>
              </li>
              <li>
                <a className="font-semibold no-underline transition hover:text-slate-800">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <h1
            className="mt-8 leading-tight font-semibold tracking-tight text-slate-950"
            style={{ fontSize: "1.25rem" }}
          >
            Dwight Sabado
          </h1>
        </div>
      </div>

      <div className="lg:flex lg:items-start lg:gap-8">
        <section className="hidden lg:block mb-8 w-full lg:w-[14rem] lg:min-w-[14rem] lg:max-w-[14rem] lg:flex-shrink-0 lg:sticky lg:top-8 lg:flex lg:flex-col lg:justify-end lg:min-h-[calc(100vh-3rem)]">
          <ul className="flex flex-col gap-2 text-slate-950 text-sm">
            <li>
              <a
                className="font-semibold no-underline transition hover:text-slate-800"
                href="https://github.com/ddsabado"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </li>
            <li>
              <a className="block mb-3 font-semibold no-underline transition hover:text-slate-800">
                Contact Me
              </a>
            </li>
          </ul>
          <h1
            className="mt-8 font-semibold tracking-tight text-slate-950"
            style={{ fontSize: "1.25rem" }}
          >
            Dwight Sabado
          </h1>
        </section>

        <section className="w-full lg:flex-1">
          <div className="mx-auto w-full max-w-5xl  border-black/10 bg-white/90 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white-950">
              Featured Projects
            </h2>
            <div className="mt-6 grid gap-4">
              {projects.map((project) => (
                <Card key={project.title} className="p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-3xl bg-slate-100">
                      <img
                        src={project.thumbnail ?? project.images?.[0]}
                        alt={`${project.title} thumbnail`}
                        className="h-full w-full object-cover object-left-center"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold text-slate-950">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-slate-700">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                      <div className="project-actions mt-4">
                        <Button
                          as="a"
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          variant="default"
                          size="sm"
                        >
                          View Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
