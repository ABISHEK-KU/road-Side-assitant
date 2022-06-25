import React from "react";
import { Link } from "react-router-dom";

const NavBar=(props)=>{

    return (
        <div>
            <Link to='/user'><button className="user">User</button></Link>
            <Link to='/admin'><button className="user">Admin</button></Link>
        </div>
    )
}
export default NavBar