import React from "react"
import { Link } from "gatsby"
import Logo from '../images/Logo/04_Logo.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Footer from "../components/Globals/Footer"

const StylistPage = ({ data }) => (
  <Layout>
    <SEO title="Stylists" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Stylists Page" styleClass="stylist-background">
    </BackgroundSection>
    
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
