import React from 'react'
import { Link } from "gatsby"
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        
        <footer className="footer py-3 ">
        <div className="row">
        
        <div className=" col text-yellow text-center text-capitalize">
        1919 MT DIABLO BLVD
        <br></br>
        WALNUT CREEK, CA 94596
        <br></br>
        </div>
        <div className="col  text-yellow text-center text-capitalize">
        
        HONEY & COMB SALON © 
        <Link to="https://www.instagram.com/honey_and_comb_salon/?hl=en">
        <RiInstagramLine className="insta-btn" />
        </Link>
        <Link to="https://www.facebook.com/Honey-Comb-Salon-501773253693385/">
        <FaFacebookSquare className="facebook-btn" />
        </Link>
            <br></br>ALL RIGHTS RESERVED {new Date().getFullYear().toString()}
        </div>
        <div className=" col text-yellow text-center text-capitalize">
        925-393-5383
        <br></br>
        INFO@HONEYANDCOMBSALON.COM
        <br></br>
        </div>
        </div>
        </footer>
       
    )
}
