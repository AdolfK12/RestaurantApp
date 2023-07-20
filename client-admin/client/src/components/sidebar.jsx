// import React from 'react';
import { NavLink } from "react-router-dom"


const Sidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem("access_token");
    }
    return (
        <>
            <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sidebar-menu">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link active fw-bold" id="nav-dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category"} className="nav-link" href="#" id="nav-category">Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/register"} className="nav-link" href="#" id="nav-admin">Register Admin</NavLink>
                        </li>
                    </ul>
                    <hr className="my-4" />
                    <h6
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                        <span>Account</span>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="nav-logout" onClick={handleLogout}>Sign Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
