import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3 ">
        <div className="row foot-row">
        <div className="footer-text col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
        <p className="foot">Honey & Comb Salon © 
            <br></br>All Rights Reserved {new Date().getFullYear().toString()}</p>

        </div>
        </div>
        </footer>
    )
}
