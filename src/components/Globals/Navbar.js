import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/Logo/04_Logo.png'
import { FaCartArrowDown } from 'react-icons/fa'


export default class Navbar extends Component {
    state = {
        navbarOpen:false,
        css: 'collapse navbar-collapse',
        links: [
            {
            id:1,
            path:'/',
            text:'Home'
            },
            {
            id:2,
            path:'/shop',
            text:'Shop'
            },
            {
            id:3,
            path:'/stylists',
            text:'Stylists'
            },
            {
            id:4,
            path:'/reservation',
            text:'Reservations'
            },
            {
            id:5,
            path:'/about',
            text:'About'
            },
            {
            id:6,
            path:'/contact',
            text:'Contact'
            }
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
        return <nav className="navbar navbar-expand-md bg-light navbar-light">
           
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
                    <li className="nav-item ml-sm-5">
                    <FaCartArrowDown className="cart-icon snipcart-checkout" />
                    </li>

                </ul>
            </div>
        </nav>;
    }
}
