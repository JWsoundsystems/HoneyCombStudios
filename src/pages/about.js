import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Footer from "../components/Globals/Footer"
import AboutImg1 from "../images/Store/21_Store.jpg"
import AboutImg2 from "../images/Store/08_Store.jpg"
import AboutImg3 from "../images/Store/20_Store.jpg"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="row py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={AboutImg3}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={AboutImg2}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={AboutImg1}></img>
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
