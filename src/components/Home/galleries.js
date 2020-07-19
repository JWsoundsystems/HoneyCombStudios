import React from 'react'
import { Link } from "gatsby"
import AboutImg1 from "../../images/Store/22_Store.jpg"
import { BsXSquare } from "react-icons/bs";

export default function Gallery() {
    return (
       <div className="container">
                  
                <div className="row ">
                
                  
                    <div className="col-12 about-desc">
                    <img src={AboutImg1} className="about-img" alt="about-img"></img>    
                    <br />
                    <p className="about-words"><br />
                    <h1 className="">Honey & Comb Salon Gallery</h1>
                    <br />
                      (Under Construction...)
                    <br />
                    <br />
                    <Link to="/">
                    <BsXSquare className="close-btn-3" />
                    </Link>
                    </p>
                    </div>
                   
                    </div>
                    </div>

    )
}
