import React from "react"
import { Link } from "gatsby"
import Logo from '../images/Logo/04_Logo.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Footer from "../components/Globals/Footer"
import Booking from "../components/Home/Booking"

const ResPage = ({ data }) => (
  <Layout>
    <SEO title="Reservation" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Reservations Page" styleClass="reservation-background">
    </BackgroundSection>
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
