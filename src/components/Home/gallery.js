import React from "react"
import Image from "gatsby-image"


const Gallery = ({image}) => {
    return <section className="py-5 product col-12 col-md-12 my-2 d-flex ">
            <div className="container product-div col-12 col-md-12 ">
            <Image fluid={image.childImageSharp.fluid} className="gallery-img col-12 col-md-12  mx-auto" />
        </div>
    </section>
}

Gallery.protoTypes = {}

export default Gallery
