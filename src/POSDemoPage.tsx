import { useState } from 'react'
import SplideCarousel from './components/SplideCarousel'
import ordersPage from './assets/screenshots/pos-demo/orders-page.png'
import saleConfirmation from './assets/screenshots/pos-demo/sale-confirmation.png'
import salesPage from './assets/screenshots/pos-demo/sales-page.png'

const slides = [
  {
    title: 'Orders View',
    image: ordersPage,
    text: 'A focused orders interface that helps staff move quickly through transactions with clear visibility into active requests.',
  },
  {
    title: 'Sale Confirmation',
    image: saleConfirmation,
    text: 'A confirmation experience with printing options designed to make checkout feel smooth and dependable.',
  },
  {
    title: 'Sales Dashboard',
    image: salesPage,
    text: 'A compact sales view that surfaces key details at a glance for faster decisions and smoother day-to-day operations.',
  },
]

function POSDemoPage() {
  const [index, setIndex] = useState(0)

  const slide = slides[index]

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <p className="eyebrow">Project Showcase</p>
        <h1>POS System Demo</h1>
        <p className="detail-lead">
          A practical point-of-sale experience built to keep transactions fast, clear, and reliable for staff and customers alike.
        </p>
        <a className="button secondary" href="#/">
          ← Back to Portfolio
        </a>
        <a className="button secondary" href="https://sites.google.com/view/demo-pos-system/pos" target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </section>

      <section className="detail-card single">
        <img className="detail-image" src={ordersPage} alt="POS system orders preview" />

        <div>
          <p className="detail-lead">
            This POS interface focuses on speed and usability, with screens for order management,
            sale confirmation, and sales tracking. The experience is designed to feel simple in a busy environment.
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
  )
}

export default POSDemoPage
