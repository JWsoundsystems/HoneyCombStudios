import React from "react"
import Product from "./Product"


const Products = ({products}) => {
  return (
  <section className="section products py-5">
      <div className="row">
        <div className="col-1 production"></div>
        <div className="col-3 col-md-3 production">
        <div className="section-center cts-center production">
        {products.map((product,index)=>{
            return <Product key={product.id} index={index} {...product} />            
        })}
      </div>
      </div>
      <div className="col-3 col-md-3 production">
      <div className="section-center cts-center production">
        {products.map((product,index)=>{
            return <Product key={product.id} index={index} {...product} />            
        })}
      </div>
      </div>
      <div className="col-3 col-md-3 production">
      <div className="section-center cts-center production">
        {products.map((product,index)=>{
            return <Product key={product.id} index={index} {...product} />            
        })}
      </div>
      </div>
      <div className="col-1"></div>
      </div>
      
         
  </section>
  )
}

export default Products
