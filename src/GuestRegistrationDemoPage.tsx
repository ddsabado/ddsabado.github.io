import { useState } from "react";
import SplideCarousel from "./components/SplideCarousel";
import fullForm from "./assets/screenshots/guest-registration/full-form.png";
import authorizationEmail from "./assets/screenshots/guest-registration/authorization-email.png";
import authorizationLetter from "./assets/screenshots/guest-registration/authorization-letter.png";
import confirmationEmail from "./assets/screenshots/guest-registration/confirmation-email.png";
import reviewScreen from "./assets/screenshots/guest-registration/review-screen.png";

const slides = [
  {
    title: "Complete Guest Form",
    image: fullForm,
    text: "A guided form experience that collects the details needed for registration without overwhelming the guest.",
  },
  {
    title: "Review Before Submit",
    image: reviewScreen,
    text: "A dedicated review screen lets guests double-check every field before final submission.",
  },
  {
    title: "Confirmation Email",
    image: confirmationEmail,
    text: "Guests receive an automated confirmation email the moment they submit the registration form, giving them immediate acknowledgment and setting clear expectations for their stay — no manual follow-up needed.",
  },
  {
    title: "Authorization Email",
    image: authorizationEmail,
    text: "A clear email step ensures guests receive the next action promptly and understand what comes next.",
  },
  {
    title: "Authorization Letter",
    image: authorizationLetter,
    text: "Designed to reduce manual admin work for an Airbnb host, from check-in coordination to document management",
  },
];

function GuestRegistrationDemoPage() {
  const [index, setIndex] = useState(0);

  const slide = slides[index];

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <p className="eyebrow">Project Showcase</p>
        <h1>Guest Registration Demo</h1>
        <p className="detail-lead">
          A polished guest registration experience that guides people through
          form completion, review, and confirmation with clarity and confidence.
        </p>
        <a className="button secondary" href="#/">
          ← Back to Portfolio
        </a>
        <a
          className="button secondary"
          href="https://sites.google.com/view/demo-guest-reg/registration"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </section>

      <section className="detail-card single">
        <img
          className="detail-image"
          src={fullForm}
          alt="Guest registration form preview"
        />

        <div>
          <p className="detail-lead">
            An automated guest registration system for an Airbnb business, built
            on Google Forms and Apps Script, that collects pre-check-in details,
            manages ID uploads, and automatically generates and sends
            personalized authorization letters and confirmation emails —
            eliminating manual admin work end to end.
          </p>
        </div>
      </section>

      <section className="detail-content">
        <article className="detail-card">
          <SplideCarousel
            slides={slides}
            imageClassName="detail-image carousel-image"
            onActiveIndexChange={setIndex}
          />

          <div className="carousel-copy">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default GuestRegistrationDemoPage;
