import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Galleries from "../components/Home/Galleries"
// ...GatsbyImageSharpFluid

const GalleryPage = ({
  data:{allStrapiGalleries: {nodes : image }},
}) => {
  return <Layout>
    <section className="Gallery-page">
  <Galleries />
    </section>
  </Layout>
}
export const query = graphql`
  {
    allStrapiGallery {
      edges {
        node {
          image {
            formats {
              small {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          strapiId
        }
      }
    }
  }
`

export default GalleryPage
