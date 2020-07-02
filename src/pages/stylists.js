import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Footer from "../components/Globals/Footer"
import Staff from "../components/Home/Staff"

const StylistPage = ({ data }) => (
  <Layout>
    <SEO title="Stylists" />
    
    <Info />

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

export default StylistPage
