import React from "react"
import { graphql, Link } from "gatsby"
import logo from "../images/Logo/04_Logo.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Globals/Footer"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section id="page-container">
    <div id="content-wrap">
    <div className="container">
      <div className="row">
      <div className="col-12 home-header">
    <img className="home-img rounded mx-auto d-block" src={logo} alt="Logo"/>
    </div>
    </div>
    <div className="row py-5 home-menu">
        <div className="col-3 home-btn mx-auto ">
          <Link to="/reservation/">
           <button className="btn-lg text-uppercase btn-yellow p-15">Book Now</button>
          </Link>
          </div>

        <div className="col-3 home-btn-shop mx-auto">
          <Link to="/shop/">
           <button className="btn-lg text-uppercase btn-yellow p-15">Products</button>
          </Link>
        </div>
        
        <div className="col-3 mx-auto home-btn-hive ">
          <Link to="https://www.vagaro.com/honeyandcombsalon/staff">
           <button className="btn-lg text-uppercase btn-yellow p-15 btn-hive">The Hive</button>
        </Link>
        </div>

        <div className="col-3 home-btn-join mx-auto ">
          <Link to="/contact/">
        <button className=" btn-lg text-uppercase btn-yellow btn-join p-15">Buzz Us</button>
        </Link>
        </div>  
        </div>
      </div>
      </div>
      </section>
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


let template = (
   <div id="page-container">
     <div id="content-wrap">
       <div>
       all other page content 
       </div>
     </div>
     <footer id="footer"></footer>
   </div>
)

let templateC = {"page_container":{"position":"relative","minHeight":"100vh"},"content_wrap":{"paddingBottom":"2.5rem"},"footer":{"position":"absolute","bottom":"0","width":"100%","height":"2.5rem"}}

let oldJSX = (  <Layout>
  <SEO title="Home" />
  <section id="page-container">
  <div id="content-wrap">
  <div className="container">
    <div className="row">
    <div className="col-12 home-header">
  <img className="home-img rounded mx-auto d-block" src={logo} alt="Logo"/>
  </div>
  </div>
  <div className="row py-5 home-menu">
      <div className="col-3 home-btn mx-auto ">
        <Link to="/reservation/">
         <button className="btn-lg text-uppercase btn-yellow p-15">Book Now</button>
        </Link>
        </div>

      <div className="col-3 home-btn-shop mx-auto">
        <Link to="/shop/">
         <button className="btn-lg text-uppercase btn-yellow p-15">Products</button>
        </Link>
      </div>
      
      <div className="col-3 mx-auto home-btn-hive ">
        <Link to="https://www.vagaro.com/honeyandcombsalon/staff">
         <button className="btn-lg text-uppercase btn-yellow p-15 btn-hive">The Hive</button>
      </Link>
      </div>

      <div className="col-3 home-btn-join mx-auto ">
        <Link to="/contact/">
      <button className=" btn-lg text-uppercase btn-yellow btn-join p-15">Buzz Us</button>
      </Link>
      </div>  
      </div>
    </div>
    </div>
    </section>
 <Footer />     
</Layout>)