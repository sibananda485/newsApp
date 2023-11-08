import React, { useState } from 'react'
import { Outlet,Link, useParams } from 'react-router-dom';

function Navbar() {
  const [country,setCountry] = useState("in")
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          DoxNews
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul className="dropdown-menu">
            <li><Link onClick={()=>{setCountry("in")}} to='/in' className="dropdown-item">India</Link></li>
            <li><Link onClick={()=>{setCountry("us")}} to='/us' className="dropdown-item">USA</Link></li>
            <li><Link onClick={()=>{setCountry("at")}} to='/at' className="dropdown-item">Austrelia</Link></li>
          </ul>
        </li>
            <li className="nav-item"><a role="button" className="nav-link disabled">About</a></li>
            <li className="nav-item"><Link role="button" to={`/${country}/business`} className="nav-link">business</Link></li>
            <li className="nav-item"><Link role="button" to={`/${country}/entertainment`} className="nav-link">entertainment</Link></li>
            <li className="nav-item"><Link role="button" to={`/${country}/general`} className="nav-link">general</Link></li>
            <li className="nav-item"><Link role="button" to={`/${country}/health`} className="nav-link">health</Link></li>
            <li className="nav-item"><Link role="button" to={`/${country}/science`} className="nav-link">science</Link></li>
            <li className="nav-item"><Link role="button" to={`/${country}/sports`} className="nav-link">sports</Link></li>
            <li className="nav-item"><Link role="button" to={`/${country}/technology`} className="nav-link">technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet></Outlet>
</>
  );
}
export default Navbar;
