import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../api/client'
import ArtisanCard from '../components/ArtisanCard'

const CATEGORY_LABELS = {
  1: 'Bâtiment',
  2: 'Services',
  3: 'Fabrication',
  4: 'Alimentation',
}

function CategoryPage() {
  const { id } = useParams()
  const [artisans, setArtisans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError(null)

    apiGet(`/categories/${id}/artisans`)
      .then((data) => {
        if (!isMounted) return
        setArtisans(data)
        setLoading(false)
      })
      .catch((err) => {
        if (!isMounted) return
        setError(err.message || "Erreur lors du chargement des artisans")
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [id])

  const label = CATEGORY_LABELS[id] || `Catégorie ${id}`

  return (
    <section>
      <header className="mb-4 text-center text-md-start">
        <h1 className="h3 fw-bold mb-1 text-primary">{label}</h1>
        <p className="text-muted mb-0">Artisans disponibles dans cette catégorie.</p>
      </header>

      {loading && <p>Chargement des artisans...</p>}
      {error && !loading && <p className="text-danger small">{error}</p>}

      {!loading && !error && artisans.length === 0 && (
        <p>Aucun artisan trouvé pour cette catégorie.</p>
      )}

      {!loading && !error && artisans.length > 0 && (
        <div>
          {artisans.map((artisan) => (
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
  )
}

export default CategoryPage
