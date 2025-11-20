import { useParams } from 'react-router-dom'

function CategoryPage() {
  const { id } = useParams()

  return (
    <section>
      <h2>Catégorie {id}</h2>
      <p>Liste des artisans pour cette catégorie (contenu à implémenter).</p>
    </section>
  )
}

export default CategoryPage
