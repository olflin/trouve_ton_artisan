import { Link } from 'react-router-dom'
import '../styles/components/ArtisanCard.css'

function renderStars(noteSur10) {
  // note est sur 10 en base, on l'affiche sur 5 étoiles
  const noteSur5 = Math.round((noteSur10 || 0) / 2)
  return '★★★★★☆☆☆☆☆'.slice(5 - noteSur5, 10 - noteSur5)
}

function ArtisanCard({ id, nom, note, specialite, localisation, topArtisan = false }) {
  const content = (
    <article className={`card mb-5 ${topArtisan ? 'top-artisan' : ''}`}>
      <div className="card-body text-center">
        <h3 className="h3 card-title mb-3 text-uppercase">{nom}</h3>

        {topArtisan && (
          <p className="mb-3 fw-bold text-uppercase small text-dark">TOP artisan</p>
        )}

        <div className="mb-3" aria-label={`Note ${note}/10`}>
          <span className="fw-bold small">{renderStars(note)}</span>
        </div>

        <p className="mb-3 small">
          <span className="text-muted">Spécialité :</span> {specialite || '—'}
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
