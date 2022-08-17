import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-default transparent-white navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-main-collapse" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <Link data-scroll to="/" className="navbar-brand">
                        <img src="img/assets/logo-light.png" className="logo-light" alt="#"/>
                        <img src="img/assets/logo-dark.png" className="logo-dark" alt="#"/>
                    </Link>
                    <div className="loginbtnhed">
                    <a className="btn btn-warning" href="https://escrow.hvambit.com">Login</a>
                    </div>
                </div>
                <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <a href="https://escrow.hvambit.com">Escrow</a>
                        </li>
                        <li>
                            <NavLink to="/">Swapping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">soon</NavLink>
                        </li>
                        <li>
                            <a href="https://hvambit.com/HVAMWHITEPAPER.pptx" download="https://hvambit.com/HVAMWHITEPAPER.pptx">WHITEPAPER</a>
                        </li>	
                        <li>
                            <NavLink to="/">Roadmap</NavLink>
                        </li>
                        <li>
                            <a href="https://twitter.com/HvamCoins" target="blank">
                                <i className="icon ion-social-twitter"></i> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://escrow.hvambit.com/register">Register</a>
                        </li>
                        <li className="quote">
                            <a href="https://escrow.hvambit.com">Login</a>
                        </li>	
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header