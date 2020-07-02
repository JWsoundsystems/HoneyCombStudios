import React from 'react'
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby"


export default function BackgroundSection2({
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
        
                
    </BackgroundImage>
    );
}

BackgroundSection2.defaultProps = {
    title: "default title2",
    styleClass: "default-background2"
}