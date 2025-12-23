import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg   py-3">
  <div className="container">
    <Link className="navbar-brand text-white" to={""}>
      <h1 className='h2'>START FRAMEWORK</h1>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item px-3">
          <NavLink className="nav-link py-1 px-2 text-white fs-4" to={"about"}>
            About
          </NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link py-1 px-2 text-white fs-4" to={"portfolio"}>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link py-1 px-2 text-white fs-4" to={"contact"}>
            Contact
          </NavLink>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>

    </>
  )
}
