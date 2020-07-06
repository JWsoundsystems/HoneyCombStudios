import React from "react"
import { Link } from "gatsby"
import logo from "../images/Logo/04_Logo.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Globals/Footer"
import AboutImg1 from "../images/Store/26_Store.jpg"
import AboutImg2 from "../images/Store/02_Store.jpg"
import AboutImg3 from "../images/Store/33_Store.jpg"
import AboutImg4 from "../images/Store/32_Store.jpg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <img className="home-header rounded mx-auto d-block" src={logo} alt="Logo"/>
    
    <section>
     
    
    <div className="row py-4 home-menu align-middle ">
       
        
        <div className="col-3 mx-auto justify-content-center">
          <Link to="/reservation/">
           <button className="home-btn btn-lg text-uppercase btn-yellow p-15">Book Now</button>
          </Link>
          <img className="home-img" src={AboutImg3}></img>
          </div>

        <div className="col-3 mx-auto justify-content-center">
          <Link to="/shop/">
           <button className="home-btn-shop btn-lg text-uppercase btn-yellow p-15">Shop Products</button>
          </Link>
          <img className="home-img-shop" src={AboutImg1}></img>
        </div>
        
        <div className="col-3 mx-auto justify-content-center"><Link to="/shop/">
           <button className="home-btn-hive btn-lg text-uppercase btn-yellow p-15">The Hive</button>
        </Link>
        <img className="home-img-hive" src={AboutImg4}></img>
        </div>

        <div className="col-3 mx-auto justify-content-center"><Link to="/contact/">
           <button className="home-btn-join btn-lg text-uppercase btn-yellow p-15">Join Us</button>
        </Link>
        <img className="home-img-join" src={AboutImg2}></img>
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
