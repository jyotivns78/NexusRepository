import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (



    <ul className="nav justify-content-center" style={{width: "100%", backgroundColor: "gray"}}>
        <li className="me-auto">
            <Link to="/" className="nav-link" aria-current="page" style={{color:"#fff", fontSize:"20px", fontFamily: "revert", fontWeight: "600"}}>Home</Link>
        </li>

        <li className="nav-item">
            <Link to="/about" className="nav-link" style={{color:"#fff", fontSize:"20px", fontFamily: "revert", fontWeight: "600"}}>About</Link>
        </li>

        <li className="nav-item">
            <Link to="/contact" className="nav-link" style={{color:"#fff", fontSize:"20px", fontFamily: "revert", fontWeight: "600"}}>Contact</Link>
        </li>
    </ul>
)

export default Navbar;