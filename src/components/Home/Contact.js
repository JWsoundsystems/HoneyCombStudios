import React from 'react'
import { BsXSquare } from "react-icons/bs";


export default function Contact() {
    return (
        <div className="container">
<div className="row py-4">
<div className="col-12  text-center">


</div>
</div>
<section className="contact-page py-4">
  
    <div className="row contact-titles">
    <Link to="/">
    <BsXSquare className="close-btn" />
    </Link>
    <h3 className=" col-12 col-md-10 my-3 mx-auto"> Buzz Us!</h3>
    <h4 className="col-12 col-md-10 my-3 mx-auto">Do you have a question or are you a hairstylist looking to join us?</h4>
    <h4 className=" col-12 col-md-10 my-3 mx-auto">Please fill out the form below and we will buzz you back!</h4>
    </div>
    <br />
    <div className="row">
    <br />
    <form className="col-12 col-md-10 my-3 mx-auto" action="https://formspree.io/xlepwbzo" method="POST">
      <div className="form-control col-12 col-md-12 my-3 mx-auto">
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
 
</section>
</div>

    )
}
