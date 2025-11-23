import { usePageTitle } from '../hooks/usePageTitle'

function LegalMentionsPage() {
  usePageTitle('Mentions légales - Trouve ton artisan')

  return (
    <section>
      <header className="mb-4 text-center">
        <h1 className="h1 fw-bold mb-3">Mentions légales</h1>
      </header>
      <div className="alert alert-info text-center">
        Page en construction
      </div>
    </section>
  )
}

export default LegalMentionsPage
