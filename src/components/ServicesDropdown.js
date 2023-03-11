/* eslint-disable jsx-a11y/anchor-is-valid */
function ServicesDropDown(){


    return(
    <>
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Services</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#scrollspyHeading3">FindPharmacy</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#scrollspyHeading4">Telehealth</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#scrollspyHeading5">PatnerSignIn</a></li>
                </ul>
            </li></>
    );
}
export default ServicesDropDown;