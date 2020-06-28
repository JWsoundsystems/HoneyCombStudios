import React from "react"
import { Link } from "gatsby"
import Logo from '../images/Logo/04_Logo.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Insta from "../components/Home/Instagram"
import Footer from "../components/Globals/Footer"


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Gallery" styleClass="about-background">
    </BackgroundSection>
    <Insta /> 
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

export default AboutPage
