import React from "react"
import { Link } from "gatsby"
import Logo from '../images/Logo/04_Logo.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Footer from "../components/Globals/Footer"
import AboutImg from "../images/16_Store.jpg"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <div className="row py-4">
    <div className="col-4  text-center">
    <img className="contact-img w-50 h-40" src={AboutImg}></img>
    </div>
    <div className="col-4  text-center">
    <img className="contact-img w-50 h-40" src={AboutImg}></img>
    </div>
    <div className="col-4  text-center">
    <img className="contact-img w-50 h-40" src={AboutImg}></img>
    </div>
    </div>
    <section className="contact-page py-5">
      <article className="contact-form">
        <h3 className="form-group col-11 col-md-8 my-3 mx-auto"> Buzz Us!</h3>
        <form action="https://formspree.io/xlepwbzo" method="POST">
          <div className="form-group col-11 col-md-8 my-3 mx-auto">
            <input type="text" name="name" placeholder="name" className="form-control">
            </input>
            <input type="email" name="email" placeholder="email" className="form-control">
            </input>
            <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
          </div>
            <button type="submit" className="btn-warning btn-sm submit-btn btn col-11 col-md-1 my-3 mx-auto">Submit Here</button> 
        </form>
      </article>
    </section>
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
