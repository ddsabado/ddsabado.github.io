import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FinanceDemoPage from './FinanceDemoPage'
import { getRoute } from './router'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root was not found')
}

const route = getRoute()

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {route === 'finance' ? <FinanceDemoPage /> : <App />}
  </React.StrictMode>
)
