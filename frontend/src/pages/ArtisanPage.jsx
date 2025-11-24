import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet, apiPost } from '../api/client'
import '../styles/components/ArtisanCard.css'
import { usePageTitle } from '../hooks/usePageTitle'

function renderStars(noteSur10) {
  const noteSur5 = Math.round((noteSur10 || 0) / 2)
  return '★★★★★☆☆☆☆☆'.slice(5 - noteSur5, 10 - noteSur5)
}

function ArtisanPage() {
  const { id } = useParams()

  const [artisan, setArtisan] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [form, setForm] = useState({ nom: '', email: '', objet: '', message: '' })
  const [sending, setSending] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [formError, setFormError] = useState('')

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError(null)

    apiGet(`/artisans/${id}`)
      .then((data) => {
        if (!isMounted) return
        setArtisan(data)
        setLoading(false)
      })
      .catch((err) => {
        if (!isMounted) return
        setError(err.message || "Erreur lors du chargement de l'artisan")
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [id])

  usePageTitle(artisan ? `${artisan.nom} - Trouve ton artisan` : 'Chargement... - Trouve ton artisan')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')
    setSuccessMessage('')

    if (!form.nom || !form.email || !form.objet || !form.message) {
      setFormError('Tous les champs sont obligatoires.')
      return
    }

    try {
      setSending(true)
      await apiPost(`/artisans/${id}/contact`, form)
      setSuccessMessage('Votre message a été envoyé. Un artisan vous répondra sous 48h.')
      setForm({ nom: '', email: '', objet: '', message: '' })
    } catch (err) {
      setFormError(err.message || "Erreur lors de l'envoi du message.")
    } finally {
      setSending(false)
    }
  }

  if (loading) {
    return (
      <section>
        <p>Chargement de la fiche artisan...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <p className="text-danger">{error}</p>
      </section>
    )
  }

  if (!artisan) {
    return (
      <section>
        <p>Artisan introuvable.</p>
      </section>
    )
  }

  return (
    <section className="artisan-page">
      <header className="mb-4 text-center">
        <h1 className="h1 fw-bold mb-3">Fiche artisan</h1>
      </header>

      <div className="row mb-5">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
          <img
            src="/favicon.png"
            alt="Avatar artisan"
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-12 col-lg-6">
           <article className="card h-100">
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h3 className="h3 text-uppercase mb-2">{artisan.nom}</h3>
                <div className="mb-1" aria-label={`Note ${artisan.note}/10`}>
                  <span className="fw-bold small">{renderStars(artisan.note)}</span>
                </div>
                <p className="mb-1 small">
                  <span className="text-muted">Spécialité :</span> {artisan.Specialite?.nom_specialite || '—'}
                </p>
                <p className="mb-0 small text-muted">{artisan.localisation || 'Localisation inconnue'}</p>
              </div>
           </article>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <section>
            <h2 className="h2 fw-bold mb-5">À propos</h2>
            <p className="mb-0 small">{artisan.a_propos || "Cet artisan n'a pas encore renseigné de description."}</p>
            {artisan.website && (
              <p className="mt-3 small">
                <a href={artisan.website} target="_blank" rel="noopener noreferrer" className="text-primary">
                  {artisan.website}
                </a>
              </p>
            )}
          </section>
        </div>

        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <section>
            <h2 className="h2 fw-bold mb-5">Formulaire de contact</h2>
            {formError && <p className="text-danger small mb-2">{formError}</p>}
            {successMessage && <p className="text-success small mb-2">{successMessage}</p>}

            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-12">
                <label htmlFor="contact-nom" className="form-label small">Nom</label>
                <input id="contact-nom" name="nom" type="text" className="form-control" value={form.nom} onChange={handleChange} />
              </div>

              <div className="col-12">
                <label htmlFor="contact-email" className="form-label small">Email</label>
                <input id="contact-email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} />
              </div>

              <div className="col-12">
                <label htmlFor="contact-objet" className="form-label small">Objet</label>
                <input id="contact-objet" name="objet" type="text" className="form-control" value={form.objet} onChange={handleChange} />
              </div>

              <div className="col-12">
                <label htmlFor="contact-message" className="form-label small">Message</label>
                <textarea id="contact-message" name="message" className="form-control" rows="4" value={form.message} onChange={handleChange} />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary" disabled={sending}>
                  {sending ? 'Envoi en cours...' : 'Envoyer' }
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

    </section>
  )
}

export default ArtisanPage
