// import { useEffect, useState } from "react"
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom"

const Layout = () => {

    return (
        <div className="container-fluid " style={{ "min-height": "100vh" }} >
            <div className="row" style={{ "min-height": "100vh" }}>
                <Sidebar />
                <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ "min-height": "100vh" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
