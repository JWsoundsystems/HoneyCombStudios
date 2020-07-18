import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Home/Contact2"
import Footer from "../components/Globals/Footer"


const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Contact />
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

export default ContactPage
