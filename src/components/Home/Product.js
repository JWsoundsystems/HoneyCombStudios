import React from "react"
import Image from "gatsby-image"


const Product = ({title,description,image,price,company,Brand,category}) => {
    return <section className="py-5 product col-11 col-md-8 my-3 d-flex ">
            <div className="product-div">
            <Image fluid={image.childImageSharp.fluid} className="product-img col-3 col-sm-3 mx-auto" />
            </div>
        
            <div className="product-info col-6 col-sm-6 mx-auto text-left">
            <h3>{title}</h3>
            <p className="product-desc">{description}</p>
            <p className="product-price">Price: ${price}</p>
            <p className="product-comp">Company: {company}</p>
            <p className="product-brand">Brand: {Brand}</p>
            <p className="product-category">Category: {category}</p> 
        </div>
    </section>
}

Product.protoTypes = {}

export default Product
