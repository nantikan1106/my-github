
import React from 'react';

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container-fluid'>
      <a className="navbar-brand" href="#">My Restaurant</a>
      <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="#navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id='navbarNav'>
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" active-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Menu</a>
        </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;