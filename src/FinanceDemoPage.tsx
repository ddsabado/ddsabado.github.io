import accountBalances from './assets/finance/account-balances.png'
import creditCardUtilization from './assets/finance/credit-card-utilization.png'
import expenseIncome from './assets/finance/expense-income.png'
import installments from './assets/finance/installments.png'

const sections = [
  {
    title: 'Account Balances',
    image: accountBalances,
    text: 'A clear snapshot of available funds, helping users stay grounded in their cash flow at a glance.',
  },
  {
    title: 'Credit Card Utilization',
    image: creditCardUtilization,
    text: 'A focused view of spending habits and utilization trends that makes financial awareness feel effortless.',
  },
  {
    title: 'Expense and Income',
    image: expenseIncome,
    text: 'An easy-to-scan breakdown of incoming and outgoing money that turns raw transactions into useful insight.',
  },
  {
    title: 'Installments',
    image: installments,
    text: 'A calm, structured way to understand recurring commitments and keep repayments visible over time.',
  },
]

function FinanceDemoPage() {
  return (
    <main className="detail-page">
      <section className="detail-hero">
        <p className="eyebrow">Project Showcase</p>
        <h1>Finance Tracker Demo</h1>
        <p className="detail-lead">
          A thoughtful finance dashboard experience built to make budgeting feel more approachable,
          visual, and motivating.
        </p>
        <a className="button secondary" href="/">
          ← Back to Portfolio
        </a>
      </section>

      <section className="detail-content">
        {sections.map((section) => (
          <article className="detail-card" key={section.title}>
            <img className="detail-image" src={section.image} alt={section.title} />
            <div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default FinanceDemoPage
