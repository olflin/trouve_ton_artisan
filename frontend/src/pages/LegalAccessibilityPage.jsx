import { usePageTitle } from '../hooks/usePageTitle'

function LegalAccessibilityPage() {
  usePageTitle('Accessibilité - Trouve ton artisan')

  return (
    <section>
      <header className="mb-4 text-center">
        <h1 className="h1 fw-bold mb-3">Accessibilité</h1>
      </header>
      <div className="alert alert-info text-center">
        Page en construction
      </div>
    </section>
  )
}

export default LegalAccessibilityPage
