import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="app-container">
      <header>
        <nav className="navbar navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Trouve ton artisan</span>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="mt-4">
        <div className="container text-center">
          <p className="mb-1">Région Auvergne-Rhône-Alpes</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
