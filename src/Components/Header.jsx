import React from 'react'

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
                    <a data-scroll href="#hero" className="navbar-brand">
                        <img src="img/assets/logo-light.png" className="logo-light" alt="#"/>
                        <img src="img/assets/logo-dark.png" className="logo-dark" alt="#"/>
                    </a>
                    <div className="loginbtnhed">
                    <a className="btn btn-warning" href="https://escrow.hvambit.com">Login</a>
                    </div>
                </div>
                <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul className="nav navbar-nav">

                        {/* <!--<li className="dropdown">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Pages<i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu" role="menu">
                                <li><a href="about.html" className="page-scroll">About</a></li>
                                <li><a href="service.html" className="page-scroll">Services</a></li>
                                <li><a href="team.html" className="page-scroll">Team</a></li>
                                <li><a href="blog.html" className="page-scroll">Blog</a></li>
                                <li><a href="contact.html" className="page-scroll">Contact</a></li>
                            </ul>
                        </li>
                        <li>
                            <a data-scroll href="contact.html">Contact</a>
                        </li>--> */}
                        
                        <li>
                            <a data-scroll href="index.html">Home</a>
                        </li>
                        <li>
                            <a data-scroll href="/admin/pages/sign-in.html">Swapping</a>
                        </li>
                        <li>
                            <a data-scroll href="/admin/pages/sign-in.html">Escrow</a>
                        </li>
                        {/* <!--
                        <li>
                            <a data-scroll href="index.html#features">Add HVAM Token</a>
                        </li>
                        --> */}
                        <li>
                            <a data-scroll href="team.html">Certificate</a>
                        </li>
                        <li>
                            <a data-scroll href="team.html">Team</a>
                        </li>	
                        <li>
                            <a data-scroll href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon ion-social-twitter"></i> Twitter
                            </a>
                        </li>
                        <li>
                            <a data-scroll href="https://escrow.hvambit.com/register">Register</a>
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