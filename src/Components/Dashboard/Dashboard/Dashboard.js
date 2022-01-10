import { faBars, faComment, faListAlt, faPlus, faShoppingCart, faSignOutAlt, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { userContext } from '../../../App';
import "./Dashoard.css";
const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [userLoggedIn] = useContext(userContext)
    useEffect(() => {
        if (userLoggedIn?.email) {
          axios.get(`https://afternoon-mesa-42742.herokuapp.com/isAdmin/${userLoggedIn?.email}`)
            .then(res => setIsAdmin(res.data))
            .catch(err =>{})
        }
      }, [userLoggedIn?.email])

    return (
        <div className="sidebar">
            <div className="left-side">

                <Link to="book/:id" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faShoppingCart} />
                        <strong className="side-menu-name">Book</strong>
                    </p>
                </Link>
                <Link to="bookingList" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faThList} />
                        <strong className="side-menu-name">Booking List</strong>
                    </p>
                </Link>
                <Link to="review" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faComment} />
                        <strong className="side-menu-name">Review</strong>
                    </p>
                </Link>
                {
                    isAdmin&&<>
                <Link to="orderList" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faListAlt} />
                        <strong className="side-menu-name">Order List</strong>
                    </p>
                </Link>
  
                    <Link to="addService" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faPlus} />
                        <strong className="side-menu-name">Add Service</strong>
                    </p>
                </Link>
                <Link to="addAdmin" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faUserPlus} />
                        <strong className="side-menu-name">Add Admin</strong>
                    </p>
                </Link>
                <Link to="manageServices" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faBars} />
                        <strong className="side-menu-name">Manage Services</strong>
                    </p>
                </Link>
                <Link to="" className="side-menu-main">
                    <p className="side-menu-details" style={{ marginTop: "100px" }}>
                        <FontAwesomeIcon className="side-menu-icon" icon={faSignOutAlt} />
                        <strong className="side-menu-name">Logout</strong>
                    </p>
                </Link>
                    </>
                }


            </div>
            <div className="right-side">
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;