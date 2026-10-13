export function getRoute() {
  const hash = window.location.hash

  if (hash.includes('contact')) {
    return 'contact'
  }

  if (hash.includes('finance-tracker')) {
    return 'finance'
  }

  if (hash.includes('guest-registration')) {
    return 'guest-registration'
  }

  if (hash.includes('pos-system')) {
    return 'pos'
  }

  return 'home'
}
