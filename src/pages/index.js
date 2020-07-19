import React from "react"
import { graphql, Link } from "gatsby"
import logo from "../images/Logo/04_Logo.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Globals/Footer"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
      <div className="row">
      <div className="col-12 home-header">
    <img className="home-img rounded mx-auto d-block" src={logo} alt="Logo"/>
    </div>
    </div>
    <div className="row py-5 home-menu">
               
        <div className="col-3 home-btn mx-auto justify-content-center">
          <Link to="/reservation/">
           <button className="btn-lg text-uppercase btn-yellow p-15">Book Now</button>
          </Link>
          </div>

        <div className="col-3 home-btn-shop mx-auto justify-content-center">
          <Link to="/shop/">
           <button className="btn-lg text-uppercase btn-yellow p-15">Shop Products</button>
          </Link>
        </div>
        
        <div className="col-3 mx-auto home-btn-hive justify-content-center">
          <Link to="https://www.vagaro.com/honeyandcombsalon/staff">
           <button className="btn-lg text-uppercase btn-yellow p-15">The Hive</button>
        </Link>
        </div>

        <div className="col-3 home-btn-join mx-auto justify-content-center">
          <Link to="/contact/">
        <button className=" btn-lg text-uppercase btn-yellow p-15">Buzz Us</button>
        </Link>
        </div>  
        </div>
      </div>
    
   <Footer />     
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "03_Logo.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
