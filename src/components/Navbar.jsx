import React, { Component } from 'react'

export class Navbar extends Component {

    render() {
        return (
            <>
   <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-danger"><b>Bharat Sharma</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="card1">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#card">About</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
            </>
        )
    }
}

export default Navbar
