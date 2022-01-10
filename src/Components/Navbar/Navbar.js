import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
// import { userContext } from '../../App';
import { auth } from '../Authentication/Login/firebase.config';

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        setUserLoggedIn({})
      }).catch((error) => {
      })
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{ background: "#1F0F60" }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder text-white" to="/">Car-Repair BD</Link>
        <button className="navbar-toggler bg-white text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold pe-5" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold pe-5" aria-current="page" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold pe-5" aria-current="page" to="/dashboard">Dashboard</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-white fw-bold pe-5" aria-current="page" to="/">Admin</Link>
            </li> */}
            <li className="nav-item">
              {/* <Link className="nav-link text-white fw-bold pe-5" aria-current="page" to="/login">Login</Link> */}
              <Link to={userLoggedIn?.email ? "/" : "/login"} onClick={handleSignOut} className="nav-link text-white fw-bold pe-5">
                {userLoggedIn?.email ? `${userLoggedIn.displayName}` : "Login"}
              </Link  >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;