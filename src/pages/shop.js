import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Globals/Footer" 
import { graphql } from "gatsby"
import Shopping from "../components/Home/Shopping"




const ShopPage = () => {
  return <Layout>
    <SEO title="Shop" />
    <Shopping />
    <Footer  />
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
