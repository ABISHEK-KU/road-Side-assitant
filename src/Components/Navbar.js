import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const NavBar = (props) => {

    return (
        <div>
            <Link to='/user'><button className="btn btn-primary w-20">User</button></Link>
            <Link to='/admin'><button className="btn btn-info w-20">Admin</button></Link>
        </div>
    )
}
export default NavBar