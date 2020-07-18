import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Globals/Footer"
import Booking from "../components/Home/Booking"

const ResPage = ({ data }) => (
  <Layout>
    <SEO title="Reservation" />
    <Booking />
    <Footer />     
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "07_Wallpaper.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ResPage
