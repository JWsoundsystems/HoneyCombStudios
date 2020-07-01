import React from 'react'
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby"


export default function BackgroundSection({
    img,
    styleClass,
    title,
    children
}) {
    return (
    <BackgroundImage className={styleClass} fluid={img}>
        <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
        </h1>
        {children}
        <Link to="/contact/">
           <button className="btn-contact-home btn-lg text-uppercase btn-yellow p-15 position-relative">Buzz Us!</button>
        </Link>
        <Link to="/reservation/">
           <button className="btn-book-home btn-lg text-uppercase btn-yellow p-15 position-relative">Book Appointment</button>
        </Link>
        <Link to="/shop/">
           <button className="btn-shop-home btn-lg text-uppercase btn-yellow p-15 position-relative">Shop Products</button>
        </Link>
                
    </BackgroundImage>
    );
}

BackgroundSection.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}