import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Insta() {
    return (
        <section className="py-5">
            <div className="container about">
                <div className="row">
                <div className="text-center">
                     <Link to="https://api.instagram.com/oauth/authorize?client_id=687879222056083&redirect_uri=https://honeyandcombsalon.netlify.app/gallery/&scope=user_profile,user_media&response_type=code">
                        <button className="btn text-uppercase btn-yellow">Insta Gallery</button>
                    </Link> 
                    
                </div>   
            </div>
            </div>

        </section>
    )
}
