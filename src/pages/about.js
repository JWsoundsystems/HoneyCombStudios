import React from "react"
import { Link } from "gatsby"
import Logo from '../images/Logo/04_Logo.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Footer from "../components/Globals/Footer"
import AboutImg from "../images/16_Store.jpg"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="row py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={AboutImg}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={AboutImg}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={AboutImg}></img>
    </div>
    </div>
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

export default AboutPage
