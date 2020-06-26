import React from "react"
import Image from "gatsby-image"


const Product = ({title,description,image,price,company,Brand,category}) => {
    return <section className="product">
        <Image fluid={image.childImageSharp.fluid} className="product-img" />
        <div className="product-info">
        <h3>{title}</h3>
        <p className="product-desc">{description}</p>
        <p className="product-price">{price}</p>
        <p className="product-comp">{company}</p>
        <p className="product-brand">{Brand}</p>
        <p className="product-category">{category}</p> 
        </div>
    </section>
}

Product.protoTypes = {}

export default Product
