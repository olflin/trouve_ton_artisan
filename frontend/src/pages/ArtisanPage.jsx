import { useParams } from 'react-router-dom'

function ArtisanPage() {
  const { id } = useParams()

  return (
    <section>
      <h2>Fiche artisan</h2>
      <p>ID de l'artisan : {id}</p>
      <p>Contenu détaillé de la fiche artisan à implémenter.</p>
    </section>
  )
}

export default ArtisanPage
