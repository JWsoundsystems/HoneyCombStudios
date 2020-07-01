import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Footer from "../components/Globals/Footer" 
import { graphql } from "gatsby"
import Products from "../components/Home/Products"
import Olaplex from "../images/olaplex.jpg"
import Oribe from "../images/oribre.png"
import Unite from "../images/Unite-brand.jpeg"



const ShopPage = ({

  data: {allStrapiProduct: {nodes : products }}
  
}) => {
  return <Layout>
    <div className="row py-5 logos">
    <Link to="/contact/">
        <button className="btn-contact-home btn-lg text-uppercase btn-yellow p-15 position-relative">All</button>
    </Link>
    <Link to="/contact/">
        <button className="btn-contact-home btn-lg text-uppercase btn-yellow p-15 position-relative">Olaplex</button>
    </Link>
    <Link to="/contact/">
        <button className="btn-contact-home btn-lg text-uppercase btn-yellow p-15 position-relative">Oribe</button>
    </Link>
    <Link to="/contact/">
        <button className="btn-contact-home btn-lg text-uppercase btn-yellow p-15 position-relative">Unite</button>
    </Link>
    <Link to="/contact/">
        <button className="btn-contact-home btn-lg text-uppercase btn-yellow p-15 position-relative">Tools</button>
    </Link>
    </div>
    <Products products={products} title="All Products"/>
    <Footer />
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
