import React from "react"
import { Link } from "gatsby"
import Product from "./Product"


const Products = ({products}) => {
  return (
  <section className="section products">
      <h1 className="text-center">Product Line</h1>
      <div className="section-center product cts-center">
        {products.map((product,index)=>{
            return <Product key={product.id} index={index} {...product} />
        })}
      </div>   
  </section>
  )
}

export default Products
