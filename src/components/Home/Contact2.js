import React from 'react'
import AboutImg1 from "../../images/Store/22_Store.jpg"

export default function Contact() {
    return (
       <div className="container">            
        <div className="row ">
        <div className="col-12 about-desc">
        <img src={AboutImg1} className="about-img" alt="about-img"></img>    
    <br />
    <p className="contact-words"><br />
                    
                   
    <div className="row contact-titles">
    <h3 className=" col-12 col-md-10 my-3 mx-auto"> Buzz Us!</h3>
    <h4 className="col-12 col-md-10 my-3 mx-auto contact-titles">Do you have a question or are you a hairstylist looking to join us?</h4>
    <h4 className=" col-12 col-md-10 my-3 mx-auto contact-titles">Please fill out the form below and we will buzz you back!</h4>
    </div>
    <div className="row">
    <form className="col-12 col-md-10 my-3 mx-auto" action="https://formspree.io/xlepwbzo" method="POST">
      <div className="col-12 col-md-12 my-3 mx-auto">
        <input type="text" name="name" placeholder="name" className="form-control">
        </input>
        <input type="email" name="email" placeholder="email" className="form-control">
        </input>
        <textarea name="message" rows="4" placeholder="message" className="form-control"></textarea>
      </div>
        <button type="submit" className="btn-warning btn-md submit-btn btn col-12 col-md-3 my-4 mx-auto">Submit Here</button> 
    </form>
    <div className="contact-address row py-5">
      <div className="col-6 col-md-6 contact-info">
   
        ADDRESS:
        <br></br>
        
        HONEY & COMB SALON
        <br></br>
        1919 MT DIABLO BLVD
        <br></br>
        WALNUT CREEK, CA 94596
        <br></br>
        <br></br>
        <br></br></div>
      <div className="col-6 col-md-6 contact-info">

      PHONE:
      <br></br>
      925-393-5383
      <br></br>
      <br></br>
      EMAIL:
      <br></br>
      INFO@HONEYANDCOMBSALON.COM
      <br></br>
      </div>

    </div>
    </div>

    </p>
    </div>
                   
    </div>
    </div>

    )
}
