import React from 'react'
// import PropTypes from 'prop-types'
import './buttons.css'
// import { Link } from "react-router-dom";





export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
      </ul>

      <div className='darkMode mx-2 p-3' onClick={props.toggleMode}></div>
      <div className='lightMode mx-2 p-3' onClick={props.toggleMode2}></div>
      <div className='primaryMode mx-2 p-3' onClick={props.toggleMode3}></div>
      <div className='dangerMode mx-2 p-3' onClick={props.toggleMode4}></div>
      

    </div>
  </div>
</nav>

  )
}




// Navbar.propTypes = {
//     name : PropTypes.string,                    // name must be string
//     home : PropTypes.string.isRequired          // home must be string and required
// }

// Navbar.defaultProps = {
//     name : 'Khan'                               // default name is Khan if not provided
// }
