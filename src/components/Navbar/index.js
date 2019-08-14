import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Plant a seed</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog Posts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Little Dog Pictures</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href="#">Tools of the Trade</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My Favorite Things</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;