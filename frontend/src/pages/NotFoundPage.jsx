import '../styles/pages/NotFoundPage.css'

function NotFoundPage() {
  return (
    <section className="not-found-container d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
      <div className="error-code error-bracket-right">
        404
      </div>
      <h1 className="error-message mt-0">Page non trouvée</h1>
    </section>
  )
}

export default NotFoundPage
