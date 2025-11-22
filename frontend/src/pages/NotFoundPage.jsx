import '../styles/pages/NotFoundPage.css'

function NotFoundPage() {
  return (
    <section className="not-found-container">
      <div className="error-code error-bracket-right">
        404
      </div>
      <h2 className="error-message">Page non trouvée</h2>
    </section>
  )
}

export default NotFoundPage
