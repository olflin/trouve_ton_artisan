import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { apiGet } from '../api/client'
import ArtisanCard from '../components/ArtisanCard'

function useQuery() {
  const { search } = useLocation()
  return new URLSearchParams(search)
}

function SearchPage() {
  const query = useQuery()
  const nom = query.get('nom') || ''

  const [artisans, setArtisans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const trimmed = nom.trim()
    if (!trimmed) {
      setArtisans([])
      return
    }

    let isMounted = true
    setLoading(true)
    setError(null)

    apiGet(`/artisans/recherche?nom=${encodeURIComponent(trimmed)}`)
      .then((data) => {
        if (!isMounted) return
        setArtisans(data)
        setLoading(false)
      })
      .catch((err) => {
        if (!isMounted) return
        setError(err.message || 'Erreur lors de la recherche d\'artisans')
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [nom])

  const hasQuery = nom.trim().length > 0

  return (
    <section>
      <header className="mb-4 text-center">
        <h1 className="h1 fw-bold mb-1">Résultats de recherche</h1>
        {hasQuery && <p className="text-muted mb-0">Recherche pour : "{nom}"</p>}
      </header>

      {!hasQuery && <p>Veuillez saisir un nom d&apos;artisan dans la barre de recherche.</p>}

      {hasQuery && loading && <p>Recherche des artisans...</p>}
      {hasQuery && error && !loading && <p className="text-danger small">{error}</p>}

      {hasQuery && !loading && !error && artisans.length === 0 && (
        <p>Aucun artisan ne correspond à cette recherche.</p>
      )}

      {hasQuery && !loading && !error && artisans.length > 0 && (
        <div className="row">
          {artisans.map((artisan) => (
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
  )
}

export default SearchPage
