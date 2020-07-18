import React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from 'gatsby'



const query = graphql`
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

const Gallery = () => {
    const data = useStaticQuery(query)
    const {allStrapiGallery:{edges:galleries}} = data
    const [value,setValue] = React.useState(0)
    const { image } = galleries

  return (
  <section className="section products py-5">
      <div className="row window">
        <div className="col-1"></div>
        <div className="col-3 col-md-3">
        <div className="section-center cts-center">
        [{ image.galleries }]
        </div>
        </div>
      </div>        
  </section>
  )
}

export default Gallery
