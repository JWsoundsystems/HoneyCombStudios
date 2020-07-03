import React from "react"
import { Link } from "gatsby"
import logo from "../images/Logo/04_Logo.png"
import Wallpaper from '../images/Wallpaper/03_Wallpaper.png'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import BackgroundSection2 from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
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
     
    
    <div className="row py-5 home-menu align-middle ">
       
        
        <div className="col-3 mx-auto justify-content-center">
          <Link to="/reservation/">
           <button className="home-btn btn-lg text-uppercase btn-yellow p-15 position-relative">Book Now</button>
          </Link>
          <img className="home-img align-middle" src={AboutImg3}></img>
          </div>

        <div className="col-3 mx-auto justify-content-center">
          <Link to="/shop/">
           <button className="home-btn-shop btn-lg text-uppercase btn-yellow p-15 position-relative">Shop Products</button>
          </Link>
          <img className="home-img-shop align-middle" src={AboutImg1}></img>
        </div>
        
        <div className="col-3 mx-auto justify-content-center"><Link to="/shop/">
           <button className="home-btn-hive btn-lg text-uppercase btn-yellow p-15 position-relative">The Hive</button>
        </Link>
        <img className="home-img-hive align-middle" src={AboutImg4}></img>
           </div>

        <div className="col-3 mx-auto justify-content-center"><Link to="/contact/">
           <button className="home-btn-join btn-lg text-uppercase btn-yellow p-15 position-relative">Join Us</button>
        </Link>
        <img className="home-img-join align-middle " src={AboutImg2}></img>
           </div>

        
        </div>
       
    </section>
    <div className="home-gallery row py-5">
    <div className="col-3  text-center align-middle">
    
    </div>
    <div className="col-3  text-center align-middle ">
    
    </div>
    <div className="col-3  text-center align-middle">
    
    </div>
    <div className="col-3  text-center align-middle">
   
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
