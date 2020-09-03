import React from 'react'
import { Link } from "gatsby"
import AboutImg1 from "../../images/Store/22_Store.jpg"
import { BsXSquare } from "react-icons/bs";

export default function Info() {
    return (
       <div className="container">
                  
                <div className="row ">
                
                  
                    <div className="col-12 about-desc">
                    <img src={AboutImg1} className="about-img" alt="about-img"></img>    
                    <br />
                    <p className="about-words"><br />
                    <Link to="/">
                    <BsXSquare className="close-btn" />
                    </Link>
                    <h1 className="about-title">About Honey & Comb Salon</h1>
                
                    Honey & Comb Salon lies in the heart of downtown Walnut Creek.  Inspired by the Mid-Century Modern Era, the salon's atmosphere creates an oasis for clients to relax and revive.  Whether you're seeking a new style, color or cut, Honey & Comb Salon welcomes each client as an old friend...And we provide expertise tailored to your hair type.  We stay on top of the current hair trends with our continuing education, all to ensure we deliver the most beatuiful hair.  Honey & Comb Salon strives to be the "Best of the Best" like its sister company Honey & Comb Studio in Walnut Creek.  Let us make your life sweeter by visiting Honey & Comb Salon today and find out what the Buzz is all about!
                    <br />
                    <br />
                    </p>
                    </div>
                   
                    </div>
                    </div>

    )
}
