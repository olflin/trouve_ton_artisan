import { useEffect, useState } from 'react'
import { apiGet } from '../api/client'
import ArtisanCard from '../components/ArtisanCard'
import { usePageTitle } from '../hooks/usePageTitle'

function HomePage() {
  usePageTitle('Trouve ton artisan - Accueil')
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
      <header className="mb-4 text-center">
        <h1 className="h1 fw-bold mb-3">Trouvez mon artisan en Auvergne-Rhône-Alpes</h1>
      </header>

      <section className="mb-5">
        <h2 className="h2 fw-bold mb-5 text-center">Comment trouver mon artisan ?</h2>
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="d-flex align-items-center">
              <span className="badge bg-primary rounded-circle me-2 step-badge">1</span>
              <span className='fw-bold'>Choisir la catégorie d'artisan dans le menu.</span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="d-flex align-items-center">
              <span className="badge bg-primary rounded-circle me-2 step-badge">2</span>
              <span className='fw-bold'>Choisir un artisan.</span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="d-flex align-items-center">
              <span className="badge bg-primary rounded-circle me-2 step-badge">3</span>
              <span className='fw-bold'>Le contacter via le formulaire de contact.</span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="d-flex align-items-center">
              <span className="badge bg-primary rounded-circle me-2 step-badge">4</span>
              <span className='fw-bold'>Une réponse sera apportée sous 48h.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <h2 className="h2 fw-bold mb-5 text-center">Les trois artisans du mois</h2>

        {loading && <p>Chargement des artisans du mois...</p>}
        {error && !loading && <p className="text-danger small">{error}</p>}
 
        {!loading && !error && (
          <div className="row">
            {topArtisans.map((artisan) => (
              <div key={artisan.id_artisan} className="col-12 col-lg-4">
                <ArtisanCard
                  id={artisan.id_artisan}
                  nom={artisan.nom}
                  note={artisan.note}
                  specialite={artisan.Specialite?.nom_specialite}
                  localisation={artisan.localisation}
                  topArtisan={artisan.top_artisan}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  )
}

export default HomePage
