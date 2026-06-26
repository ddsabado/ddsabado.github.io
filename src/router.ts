export function getRoute() {
  const hash = window.location.hash

  if (hash.includes('finance-tracker')) {
    return 'finance'
  }

  return 'home'
}
