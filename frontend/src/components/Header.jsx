import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../styles/components/header.css'

function Header() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = search.trim()
    if (!trimmed) return
    navigate(`/recherche?nom=${encodeURIComponent(trimmed)}`)
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <img
                src="/Logo.png"
                alt="Logo Trouve ton artisan"
                className="me-1"
                style={{ height: '50px', width: 'auto' }}
                />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            



          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-md-0 w-50 justify-content-around">
              <li className="nav-item">
                <NavLink to="/categorie/1" className="nav-link">
                  Bâtiment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categorie/2" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categorie/3" className="nav-link">
                  Fabrication
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categorie/4" className="nav-link">
                  Alimentation
                </NavLink>
              </li>
            </ul>

            <form className="d-flex" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="header-search">
                Rechercher un artisan par nom
              </label>
              <input
                id="header-search"
                className="form-control me-2"
                type="search"
                placeholder="Rechercher un artisan"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
