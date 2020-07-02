import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Globals/Footer" 
import { graphql } from "gatsby"
import Products from "../components/Home/Products"




const ShopPage = ({

  data: {allStrapiProduct: {nodes : products }}
  
}) => {
  return <Layout>

    
    <div className="row py-5 logos flex">
    
    <div className="col-12">
    <Link to="">
        <button className="btn-all btn text-uppercase btn-yellow p-15 position-relative">All</button>
    </Link>
    <Link to="">
        <button className="btn-all btn text-uppercase btn-yellow p-15 position-relative">Olaplex</button>
    </Link>
    <Link to="">
        <button className="btn-all btn text-uppercase btn-yellow p-15 position-relative">Oribe</button>
    </Link>
    <Link to="">
        <button className="btn-all btn text-uppercase btn-yellow p-15 position-relative">Unite</button>
    </Link>
    <Link to="">
        <button className="btn-all btn text-uppercase btn-yellow p-15 position-relative">Tools</button>
    </Link>
    </div>
    </div>
    
    <Products products={products} title="All Products"/>
    <Footer className="footer-gallery" />
  </Layout> 
}

export const query = graphql`
  {
    allStrapiProduct(sort: { fields: strapiId, order: DESC }) {
      nodes {
        id
        title
        description
        price
        Brand
        category
        company
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`


export default ShopPage
