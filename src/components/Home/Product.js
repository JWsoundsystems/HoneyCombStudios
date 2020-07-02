import React from "react"
import Image from "gatsby-image"


const Product = ({title,description,image,price,company,Brand,category}) => {
    return <section className="py-5 product col-12 col-md-12 my-2 d-flex ">
            <br></br>
            <br></br>
            <div className="container product-div col-12 col-md-12 ">
            <Image fluid={image.childImageSharp.fluid} className="product-img col-12 col-md-12  mx-auto" />
            <div className="overlay product-info col-12 col-md-12 mx-auto text-center ">
            <br></br>
            <br></br>
            <h5 className="align-middle">{title}</h5>
            <p className="product-category">{category}</p> 
            <p className="product-price">${price}</p>
            </div>
        </div>
    </section>
}

Product.protoTypes = {}

export default Product
