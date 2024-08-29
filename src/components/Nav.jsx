import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Techno Source</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  className="nav-link " to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AboutUs">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Solution">Solutions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav
