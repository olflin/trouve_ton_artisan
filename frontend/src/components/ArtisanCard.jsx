import { Link } from 'react-router-dom'
import '../styles/components/ArtisanCard.css'

function renderStars(noteSur10) {
  // note est sur 10 en base, on l'affiche sur 5 étoiles avec paliers de 0,5
  const ratingSur5 = (noteSur10 || 0) / 2 // ex : 9/10 -> 4.5/5

  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1

    if (ratingSur5 >= starNumber) {
      return 'full'
    }

    if (ratingSur5 >= starNumber - 0.5) {
      return 'half'
    }

    return 'empty'
  })
}

function ArtisanCard({ id, nom, note, specialite, localisation, topArtisan = false }) {
  const content = (
    <article className={`card h-100 ${topArtisan ? 'top-artisan' : ''}`}>
      <div className="card-body text-center d-flex flex-column justify-content-center">
        <h3 className="h3 card-title mb-3 text-uppercase">{nom}</h3>

        {topArtisan && (
          <p className="mb-3 small text-uppercase top-artisan-label">
            <strong>TOP artisan</strong>
          </p>
        )}

        <div className="mb-3" aria-label={`Note ${note}/10`}>
          <div className="card-rating">
            {renderStars(note).map((state, index) => (
              <span
                key={index}
                className={`card-star card-star--${state}`}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
          </div>
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
    <Link to={`/artisans/${id}`} className="text-decoration-none text-reset h-100 d-block">
      {content}
    </Link>
  )
}

export default ArtisanCard
