import React from 'react'
import { Link, useLocation} from 'react-router-dom'

function Navbar() {
  const pathname = useLocation().pathname;

  return (
    <div className='bg-dark shadow'>
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-dark navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand navbar-dark" to="/">Example.com</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/" className={`${pathname === '/' ? 'active nav-link' : 'nav-link'}`}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${pathname === '/about' ? 'active nav-link' : 'nav-link'}`} to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${pathname === '/contact' ? 'active nav-link' : 'nav-link'}`} to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar