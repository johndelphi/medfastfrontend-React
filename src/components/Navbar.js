/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import ServicesDropDown from "./ServicesDropdown";


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
    <ServicesDropDown/>
  </ul>
</nav>

    </>
    
    );
}


export default Navbar;