import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { BsGlobe2 } from "react-icons/bs";
import i18next from 'i18next';

const Header = () => {
    const { t } = useTranslation();
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }
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
                    <a className="btn btn-warning" href="https://escrow.hvambit.com">{t('HeaderMenu.LOGIN')}</a>
                    </div>
                </div>
                <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/">{t('HeaderMenu.HOME')}</NavLink>
                        </li>
                        <li>
                            <a href="https://escrow.hvambit.com">{t('HeaderMenu.ESCROW')}</a>
                        </li>
                        <li>
                            <NavLink to="/">{t('HeaderMenu.SWAPPING')}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">{t('HeaderMenu.SOON')}</NavLink>
                        </li>
                        {/* <li>
                            <a href="https://hvambit.com/HVAMWHITEPAPER.pptx" download="https://hvambit.com/HVAMWHITEPAPER.pptx">{t('HeaderMenu.WHITEPAPER')}</a>
                        </li>	 */}
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            {t('HeaderMenu.WHITEPAPER')} <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="https://hvambit.com/WHITEPAPER_EN.pdf" target="blank">English</a>
                                </li>
                                <li>
                                    <a href="https://hvambit.com/WHITEPAPER_ARABIC.pdf" target="blank">Arabic</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/">{t('HeaderMenu.ROADMAP')}</NavLink>
                        </li>
                        <li>
                            <a href="https://twitter.com/HvamCoins" target="blank">
                                <i className="icon ion-social-twitter"></i> {t('HeaderMenu.TWITTER')}
                            </a>
                        </li>
                        <li>
                            <a href="https://escrow.hvambit.com/register"> {t('HeaderMenu.REGISTER')}</a>
                        </li>	
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <BsGlobe2 size={20} /> <span className="caret mtr-1"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a onClick={()=>handleClick('en')} href="#">English</a>
                                </li>
                                <li>
                                    <a onClick={()=>handleClick('arabic')} href="#">arabic</a>
                                </li>
                            </ul>
                        </li>
                        <li className="quote">
                            <a href="https://escrow.hvambit.com">{t('HeaderMenu.LOGIN')}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header