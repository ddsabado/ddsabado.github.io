import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FinanceDemoPage from './FinanceDemoPage'
import GuestRegistrationDemoPage from './GuestRegistrationDemoPage'
import POSDemoPage from './POSDemoPage'
import { getRoute } from './router'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root was not found')
}

function AppShell() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute())

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (route === 'finance') {
    return <FinanceDemoPage />
  }

  if (route === 'guest-registration') {
    return <GuestRegistrationDemoPage />
  }

  if (route === 'pos') {
    return <POSDemoPage />
  }

  return <App />
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>
)
