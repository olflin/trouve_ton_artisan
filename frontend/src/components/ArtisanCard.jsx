import { Link } from 'react-router-dom'

function renderStars(noteSur10) {
  // note est sur 10 en base, on l'affiche sur 5 étoiles
  const noteSur5 = Math.round((noteSur10 || 0) / 2)
  return '★★★★★☆☆☆☆☆'.slice(5 - noteSur5, 10 - noteSur5)
}

function ArtisanCard({ id, nom, note, specialite, localisation, topArtisan = false }) {
  const content = (
    <article className="card shadow-sm mb-3">
      <div className="card-body text-center">
        <h3 className="h5 card-title mb-2 text-uppercase">{nom}</h3>

        <div className="mb-1" aria-label={`Note ${note}/10`}>
          <span className="fw-bold small">{renderStars(note)}</span>
        </div>

        {topArtisan && (
          <p className="mb-1 text-success text-uppercase small fw-bold">TOP artisan</p>
        )}

        <p className="mb-1 small">
          <span className="text-muted">Badge spécialité :</span> {specialite || '—'}
        </p>

        <p className="mb-3 small text-muted">{localisation || 'Localisation inconnue'}</p>
      </div>
    </article>
  )

  if (!id) {
    return content
  }

  return (
    <Link to={`/artisans/${id}`} className="text-decoration-none text-reset">
      {content}
    </Link>
  )
}

export default ArtisanCard
