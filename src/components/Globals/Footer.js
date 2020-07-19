import React from 'react'
import { Link } from "gatsby"
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer py-3 ">
        <div className="row foot-row">
        <div className="footer-text col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
        <p className="foot">Honey & Comb Salon © 
        <Link to="https://www.instagram.com/honey_and_comb_salon/?hl=en">
        <RiInstagramLine className="insta-btn" />
        </Link>
        <Link to="https://www.facebook.com/Honey-Comb-Salon-501773253693385/">
        <FaFacebookSquare className="facebook-btn" />
        </Link>
            <br></br>All Rights Reserved {new Date().getFullYear().toString()}</p>

        </div>
        </div>
        </footer>
    )
}
