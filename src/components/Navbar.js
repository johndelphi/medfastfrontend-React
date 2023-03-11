/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";

function Navbar(){

    return(
    <>
   <nav id="nav" className="navbar bg-body-tertiary px-3 mb-3">
  <a className="navbar-brand" href="#">Medfast</a>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading1">About Us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">FindPharmacy</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Telehealth</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#scrollspyHeading5">Delivery</a></li>
      </ul>
    </li>
  </ul>
</nav>

    </>
    
    );
}


export default Navbar;