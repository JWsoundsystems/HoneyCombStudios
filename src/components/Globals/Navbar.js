import React, { Component } from 'react'
import { Link } from 'gatsby'



export default class Navbar extends Component {
    state = {
        navbarOpen:false,
        css: 'collapse navbar-collapse',
        links: [
            {
            id:1,
            path:'/',
            text:'HOME |'
            },
            {
            id:2,
            path:'/shop',
            text:'SHOP |'
            },
            {
            id:3,
            path:'/reservation',
            text:'RESERVATIONS |'
            },
            {
            id:4,
            path:'https://www.vagaro.com/honeyandcombsalon/staff',
            text:'CONTACT STYLIST |'
            },
            {
                id:5,
                path:'/about',
                text:'ABOUT |'
            },
            {
                id:6,
                path:'/contact',
                text:'BUZZ US |'
            },
            {
                id:7,
                path:'/gallery',
                text:'GALLERY'
                },
        ]        
    }
    navbarHandler = () => {
        this.state.navbarOpen
        ? this.setState({navbarOpen: false, css:
            "collapse navbar-collapse" }) 
            : this.setState({
            navbarOpen: true,
            css: "collapse navbar-collapse show"
    
        });
    };

    render() {
        return <nav className="navbar navbar-expand-md bg-orange navbar-light" >
           
            <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                <span className="navbar-toggler-icon" />
            </button>
            <div className={this.state.css}>
                <ul className="navbar-nav mx-auto">
                    {
                        this.state.links.map(link => {
                            return (
                                <li key={link.id} className="nav-item">
                                <Link to={link.path} className="nav-link text-capitalize ">
                                  {link.text}
                                  </Link> 
                            </li>
                                
                        )
                    })}

                </ul>
            </div>
                  
        </nav>;
    }
}
