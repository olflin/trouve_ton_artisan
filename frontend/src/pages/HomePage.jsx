import { useEffect, useState } from 'react'
import { apiGet } from '../api/client'
import ArtisanCard from '../components/ArtisanCard'

function HomePage() {
  const [topArtisans, setTopArtisans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    apiGet('/artisans/top')
      .then((data) => {
        if (!isMounted) return
        setTopArtisans(data)
        setLoading(false)
      })
      .catch((err) => {
        if (!isMounted) return
        setError(err.message || 'Erreur lors du chargement des artisans du mois')
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="home-page">
      <header className="mb-4 text-center text-md-start">
        <h1 className="h3 text-primary fw-bold mb-3">Trouvez mon artisan en Auvergne-Rhône-Alpes</h1>
      </header>

      <section className="mb-5">
        <h2 className="h4 fw-bold mb-3">Comment trouver mon artisan&nbsp;?</h2>
        <ol className="list-unstyled ps-0">
          <li className="d-flex mb-2">
            <span className="badge bg-primary rounded-circle me-2">1</span>
            <span>Choisir la catégorie d&apos;artisan dans le menu.</span>
          </li>
          <li className="d-flex mb-2">
            <span className="badge bg-primary rounded-circle me-2">2</span>
            <span>Choisir un artisan.</span>
          </li>
          <li className="d-flex mb-2">
            <span className="badge bg-primary rounded-circle me-2">3</span>
            <span>Le contacter via le formulaire de contact.</span>
          </li>
          <li className="d-flex mb-2">
            <span className="badge bg-primary rounded-circle me-2">4</span>
            <span>Une réponse sera apportée sous 48h.</span>
          </li>
        </ol>
      </section>

      <section className="mb-4">
        <h2 className="h4 fw-bold mb-3">Les trois artisans du mois</h2>

        {loading && <p>Chargement des artisans du mois...</p>}
        {error && !loading && <p className="text-danger small">{error}</p>}

        {!loading && !error && (
          <div>
            {topArtisans.map((artisan) => (
              <ArtisanCard
                key={artisan.id_artisan}
                id={artisan.id_artisan}
                nom={artisan.nom}
                note={artisan.note}
                specialite={artisan.Specialite?.nom_specialite}
                localisation={artisan.localisation}
                topArtisan={artisan.top_artisan}
              />
            ))}
          </div>
        )}
      </section>
    </section>
  )
}

export default HomePage
