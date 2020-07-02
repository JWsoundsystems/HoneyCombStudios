import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Globals/Footer" 
import { graphql } from "gatsby"
import GalleryImg1 from "../images/Store/01_Store.jpg"
import GalleryImg2 from "../images/Store/02_Store.jpg"
import GalleryImg3 from "../images/Store/03_Store.png"
import GalleryImg4 from "../images/Store/04_Store.png"
import GalleryImg5 from "../images/Store/05_Store.jpeg"
import GalleryImg6 from "../images/Store/06_Store.png"
import GalleryImg7 from "../images/Store/07_Store.jpeg"
import GalleryImg8 from "../images/Store/08_Store.jpg"
import GalleryImg9 from "../images/Store/09_Store.jpg"
import GalleryImg10 from "../images/Store/10_Store.jpg"
import GalleryImg11 from "../images/Store/11_Store.jpg"
import GalleryImg12 from "../images/Store/12_Store.jpg"
import GalleryImg13 from "../images/Store/13_Store.jpg"
import GalleryImg14 from "../images/Store/14_Store.jpg"
import GalleryImg15 from "../images/Store/15_Store.jpg"
import GalleryImg16 from "../images/Store/16_Store.jpg"
import GalleryImg17 from "../images/Store/17_Store.jpg"
import GalleryImg18 from "../images/Store/18_Store.jpg"
import GalleryImg19 from "../images/Store/19_Store.jpg"
import GalleryImg20 from "../images/Store/20_Store.jpg"
import GalleryImg21 from "../images/Store/21_Store.jpg"
import GalleryImg22 from "../images/Store/22_Store.jpg"
import GalleryImg23 from "../images/Store/23_Store.jpg"
import GalleryImg24 from "../images/Store/24_Store.jpg"


const GalleryPage = ({

  data: {allStrapiGallery: {nodes : galleries }}
  
}) => {
  return <Layout>
    <section className="gallery">
    <div className="row photobook py-5">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg1}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg2}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg3}></img>
    </div>
    </div>
    <div className="row photobook py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg4}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg5}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg6}></img>
    </div>
    </div>
    <div className="row photobook py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg7}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg8}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg9}></img>
    </div>
    </div>
    <div className="row photobook py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg10}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg11}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg12}></img>
    </div>
    </div>
    <div className="row photobook py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg13}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg14}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg15}></img>
    </div>
    </div>
    <div className="row photobook py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg16}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg17}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg18}></img>
    </div>
    </div>
    <div className="row photobook py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg19}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg20}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg21}></img>
    </div>
    </div>
    <div className="row photobook py-4">
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg22}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg23}></img>
    </div>
    <div className="col-4  text-center">
    <img className="about-img w-50 h-80" src={GalleryImg24}></img>
    </div>
    </div>
    </section>
    
    <Footer />     
  </Layout> 
}

export const query = graphql`
{
  allStrapiGallery {
    edges {
      node {
        id
        image {
          id
          formats {
            small {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
}
`


export default GalleryPage
