import React from "react"
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer" 
import { graphql } from "gatsby"




const GalleryPage = ({

  data: {allStrapiGallery: {nodes : galleries }}
  
}) => {
  return <Layout>
    <Footer />     
  </Layout> 
}

export const query = graphql`
{
  allStrapiGallery {
    edges {
      node {
        id
        image {
          id
          formats {
            small {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
}
`


export default GalleryPage
