import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Header(props) {
  let headerStyle ={
    border:"3px solid yellow"
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"style= {headerStyle}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        
      </ul>
      {props.searchBar? <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:""}
    </div>
  </div>
</nav>
  )
}
Header.defaultProps ={
  title: "Default title",
  // searchBar : false
}
Header.propTypes ={
  title: PropTypes.string ,  //title string type ka hoga else shows error
  searchBar : PropTypes.bool
  // searchBar : PropTypes.bool.isRequired    //in this searchbar is must to declare or default value must given else it will shows error

}