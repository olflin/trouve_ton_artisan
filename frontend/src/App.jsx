import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ArtisanPage from './pages/ArtisanPage'
import LegalMentionsPage from './pages/LegalMentionsPage'
import LegalDataPage from './pages/LegalDataPage'
import LegalAccessibilityPage from './pages/LegalAccessibilityPage'
import LegalCookiesPage from './pages/LegalCookiesPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorie/:id" element={<CategoryPage />} />
        <Route path="/artisans/:id" element={<ArtisanPage />} />

        {/* Pages légales */}
        <Route path="/mentions-legales" element={<LegalMentionsPage />} />
        <Route path="/donnees-personnelles" element={<LegalDataPage />} />
        <Route path="/accessibilite" element={<LegalAccessibilityPage />} />
        <Route path="/cookies" element={<LegalCookiesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
