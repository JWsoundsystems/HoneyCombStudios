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
import AboutImg1 from "../images/Store/17_Store.jpg"
import AboutImg2 from "../images/Store/19_Store.jpg"
import AboutImg3 from "../images/Store/18_Store.jpg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <img className="home-img rounded mx-auto d-block" src={logo} alt="Logo"/>
    
    <section>
      <div className="row py-5 home-menu align-middle mx-auto">
    
    <div className="row py-5 home-menu align-middle mx-auto">
        <div className="col-2 mx-auto justify-content-center "></div>
        
        <div className="col-2 mx-auto justify-content-center">
          <Link to="/reservation/">
           <button className="home-btn btn-lg text-uppercase btn-yellow p-15 position-relative">Book Now</button>
          </Link>
           <p className="home-desc">LOOKING FOR A SWEET CHANGE? FIND A SERVICE AND HAIRSTYLIST THAT IS RIGHT FOR YOU!</p>
           </div>

        <div className="col-2 mx-auto justify-content-center">
          <Link to="/shop/">
           <button className="home-btn btn-lg text-uppercase btn-yellow p-15 position-relative">Shop Products</button>
          </Link>
           <p className="home-desc">FEELING DULL, HONEY? WE SELL PRODUCTS TO KEEP YOUR HAIR HEALTHY AND FEELING RICH. SEE WHY OTHERS LOVE THEM TOO!</p>
        </div>
        
        <div className="col-2 mx-auto justify-content-center"><Link to="/shop/">
           <button className="home-btn btn-lg text-uppercase btn-yellow p-15 position-relative">The Hive</button>
        </Link>
           <p className="home-desc">TAKE A LOOK AT WHATS GOIN DOWN IN THIS HIVE, LOTS OF BUSY BEES!</p>
           </div>

        <div className="col-2 mx-auto justify-content-center"><Link to="/contact/">
           <button className="home-btn btn-lg text-uppercase btn-yellow p-15 position-relative">Join Us</button>
        </Link>
           <p className="home-desc">LOVE WHAT WE DO HERE? WE'RE A BUSY HIVE AND ALWAYS LOOKING FOR NEW TALENT. FIND OUT WHAT THE BUZZ IS ALL ABOUT.</p>
           </div>

        <div className="col-2 mx-auto"></div>
        </div>
        </div>
    </section>
    <div className="home-gallery row py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-70 align-middle" src={AboutImg3}></img>
    </div>
    <div className="col-4  text-center ">
    <img className="about-img w-50 h-70 align-middle " src={AboutImg2}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-70 align-middle" src={AboutImg1}></img>
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
