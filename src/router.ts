export function getRoute() {
  const path = window.location.pathname

  if (path === '/finance-tracker') {
    return 'finance'
  }

  return 'home'
}
