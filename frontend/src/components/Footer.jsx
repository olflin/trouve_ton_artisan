import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-4 w-100 bg-primary text-white">
      <div className="container py-4">
        <div className="row gy-3 align-items-center">
          <div className="col-12 col-md-6">
            <nav aria-label="Pages légales">
              <ul className="list-unstyled mb-0 text-center text-md-start small">
                <li>
                  <Link className="text-white text-decoration-none" to="/mentions-legales">
                    mentions légales
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-decoration-none" to="/donnees-personnelles">
                    données personnelles
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-decoration-none" to="/accessibilite">
                    accessibilité
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-decoration-none" to="/cookies">
                    cookies
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end small">
            <address className="mb-0">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              +33 (0)4 26 73 40 00
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
