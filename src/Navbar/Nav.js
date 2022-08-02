import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Nav(props) {

  return (
    <div className="container" >
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href='#'>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link> */}
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode2 ==='light'?'dark':'light'}`}>
  <input onClick={props.change} className="form-check-input mx-4 my-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
      </nav>

 
      
    </div>
  )
}
Nav.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
}

Nav.defaultProps = {
  title: 'Set the Title',
  home: 'Set the HomeText'
}



