import React, {useState} from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import IconCreateEscow from "../assets/img/create-escrow.png";
import Iconfundescrow from "../assets/img/fund-escrow.png";
import Iconverify from "../assets/img/verify.png";
import Icondeliveryconfirmation from "../assets/img/delivery-confirmation.png";
import Iconreleasefund from "../assets/img/release-fund.png";
import IconRegistration from "../assets/img/registration.png";
import Iconincrease from "../assets/img/increase.png";
import Iconsafeandsecure from "../assets/img/safe-and-secure.png";
import Iconquicktransfer from "../assets/img/quick-transfer.png";
import Iconmakepayment from "../assets/img/make-payment.png";
import Iconsecurewallet from "../assets/img/secure-wallet.png";
import Iconavailability from "../assets/img/availability.png";
import Iconrecurring from "../assets/img/recurring.png";
import Iconchange from "../assets/img/change.png";

import IconProjectComplete from "../assets/img/project-complete.png";
import IconHappyClients from "../assets/img/happy-clients.png";
import IconLineOfWork from "../assets/img/line-of-work.png";
import IconAwardsWon from "../assets/img/award.png";
import Icondolar from "../assets/img/dolar-transparent.png";
import IconHvamBit from "../assets/img/logoicon.png";
import tiktoky from "../assets/img/tiktiky.png";
import { useTranslation } from 'react-i18next';
const Home = () => {
    const [hvmcount, setHvmcount] = useState(1);
    // const [hvmtotal, setHvmtotal] = useState(0.53);

    const handleChange = event => {
        setHvmcount(event.target.value);
        // setHvmtotal((event.target.value * 0.53).toFixed(2));
      };
      const { t } = useTranslation();
  return (
    <>
        <Header/>

        <section id="hero" className="hero-main parallax ">
            <div className="hero-overlay">
                <div className="background-image bg-3 herohead">
                    <img src="img/backgrounds/bg3.jpg" alt="#"/>
                </div>
            </div>
            <div className="hero-container container">
                <div className="hero-content">
                    <div className="col-sm-12 m-auto text-center white fadeHero">
                        <h6 className="subheading">{t('HeroSection.Hero_Title')}</h6>
                        <h1 className="h1-lg mb10 text-uppercase">{t('HeroSection.Hero_Title_Main')}</h1>
                        <ul className="list-inline banner-info">
                            <li><span>4.8 </span> Million
                                <br/>Transactions</li>
                            <li><span>24 </span> Hours
                                <br/>Response time</li>
                            <li><span>92 </span> Percent
                                <br/>Satisfaction rate</li>
                        </ul>
                        <h5 className="lead h5-md mt30 mb20">  
                        {t('HeroSection.Hero_SubTitle1')}
                        <br/>{t('HeroSection.Hero_SubTitle2')}</h5>
                        <a href="https://escrow.hvambit.com/register" className="btn btn-hero">{t('HeroSection.Hero_Btn')}</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="services" className="section-padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading m-auto text-center ">
                            <h2 className="f-xbold">{t('ServicesSection.Services_Title')}</h2>
                            <hr className="seperator"/>
                            <p>{t('ServicesSection.Services_SubTitle')}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-12"></div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center active">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={IconCreateEscow} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner">
                                <h4>{t('ServicesSection.Card_One_Title1')} <span>{t('ServicesSection.Card_One_Title2')}</span></h4>
                                <p>{t('ServicesSection.Card_One_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={Iconfundescrow} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner">
                                <h4>{t('ServicesSection.Card_Two_Title1')} <span>{t('ServicesSection.Card_Two_Title2')}</span></h4>
                                <p>{t('ServicesSection.Card_Two_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center active">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={Iconverify} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner">
                                <h4>{t('ServicesSection.Card_Three_Title1')} <span>{t('ServicesSection.Card_Three_Title2')}</span></h4>
                                <p>{t('ServicesSection.Card_Three_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={Icondeliveryconfirmation} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner">
                                <h4>{t('ServicesSection.Card_Four_Title1')} <span>{t('ServicesSection.Card_Four_Title2')}</span></h4>
                                <p>{t('ServicesSection.Card_Four_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center active">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={Iconreleasefund} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner">
                                <h4>{t('ServicesSection.Card_Five_Title1')} <span>{t('ServicesSection.Card_Five_Title2')}</span></h4>
                                <p>{t('ServicesSection.Card_Five_SubTitle')}</p>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </section>

        <section id="about" className="pb60">
            <div className="col-md-6 hidden-xs">
                <div className="about-bg"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="">
                            <h5 className="subheading">{t('AboutSection.About_Title')}</h5>
                            <h3>{t('AboutSection.About_Title_Main')}</h3>
                            <p>{t('AboutSection.About_SubTitle1')}</p>
                            <ul className="about-info-list">
                                <li><i className="icon ion-checkmark"></i>{t('AboutSection.About_Item1')}</li>
                                <li><i className="icon ion-checkmark"></i>{t('AboutSection.About_Item2')}</li>
                                <li><i className="icon ion-checkmark"></i>{t('AboutSection.About_Item3')}</li>
                                <li><i className="icon ion-checkmark"></i>{t('AboutSection.About_Item4')}</li>
                                <li><i className="icon ion-checkmark"></i>{t('AboutSection.About_Item5')}</li>
                                <li><i className="icon ion-checkmark"></i>{t('AboutSection.About_Item6')}</li>
                            </ul>
                            <a href="https://escrow.hvambit.com/register" className="btn btn-black ">{t('AboutSection.About_Btn')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="howorks">
            <div className="bg-feature work-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading m-auto text-center ">
                                <h2 className="f-xbold">{t('HowWorkSection.HowWork_Title')}</h2>
                                <hr className="seperator"/>
                                <p>{t('HowWorkSection.HowWork_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work-wrap ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-9 m-auto">
                            <div className="row">
                                <div className="col-md-3 col-sm-3">
                                    <div className="work-inner-box">
                                        <div className="icon-box work-icon icon-lg imgebox">
                                            <img src={IconRegistration} alt="" className="img-responsive imageres m-auto"/>
                                        </div>
                                        <h4>{t('HowWorkSection.HCard_One_Title')}</h4>
                                        <p>{t('HowWorkSection.hCard_One_SubTitle')}</p>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-3">
                                    <div className="work-inner-box">
                                        <div className="icon-box work-icon icon-lg imgebox">
                                            <img src={Iconincrease} alt="" className="img-responsive imageres m-auto"/>
                                        </div>
                                        <h4>{t('HowWorkSection.HCard_Two_Title')}</h4>
                                        <p>{t('HowWorkSection.hCard_Two_SubTitle')}</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="work-inner-box">
                                        <div className="icon-box work-icon icon-lg imgebox">
                                            <img src={Iconsafeandsecure} alt="" className="img-responsive imageres m-auto"/>
                                        </div>
                                        <h4>{t('HowWorkSection.HCard_Three_Title')}</h4>
                                        <p>{t('HowWorkSection.hCard_Three_SubTitle')}</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="work-inner-box">
                                        <div className="icon-box work-icon icon-lg imgebox">
                                            <img src={Iconquicktransfer} alt="" className="img-responsive imageres m-auto"/>
                                        </div>
                                        <h4>{t('HowWorkSection.HCard_Four_Title')}</h4>
                                        <p>{t('HowWorkSection.hCard_Four_SubTitle')}</p>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="bg-gray section-padding">
            <div className="container">
                <div className="row">
                    <div className="heading m-auto text-center ">
                        <h2 className="f-xbold">{t('FeaturesSection.Featu_Title')}</h2>
                        <hr className="seperator"/>
                        <p>{t('FeaturesSection.Featu_SubTitle')}</p>
                    </div>
                </div>
                <div className="row mb50">
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconsafeandsecure} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>{t('FeaturesSection.fCard_One_Title')}</h4>
                                <p>{t('FeaturesSection.fCard_One_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconmakepayment} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>{t('FeaturesSection.fCard_Two_Title')}</h4>
                                <p>{t('FeaturesSection.fCard_Two_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconsecurewallet} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>{t('FeaturesSection.fCard_Three_Title')}</h4>
                                <p>{t('FeaturesSection.fCard_Three_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconavailability} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>{t('FeaturesSection.fCard_Four_Title')}</h4>
                                <p>{t('FeaturesSection.fCard_Four_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconrecurring} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>{t('FeaturesSection.fCard_Five_Title')}</h4>
                                <p>{t('FeaturesSection.fCard_Five_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconchange} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>{t('FeaturesSection.fCard_Six_Title')}</h4>
                                <p>{t('FeaturesSection.fCard_Six_SubTitle')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="parallax-contact" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 ">
                        <div className="clients text-center">
                            <h3>{t('RateSection.Rate_Title')}</h3>
                            <p>{t('RateSection.Rate_Hvam')}</p>
                        </div>
                    </div>
                </div>
                
                <div className="row buyhamsec">
                    <div className="col-md-2 col-sm-12 col-12">
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="priceformsec">
                            <img src={IconHvamBit} alt="" className="img-responsive weblogoimg"/>
                            <div>
                                <h4>{t('RateSection.Rate_Hvam')}</h4>
                                <input className="form-control" placeholder="1" aria-label="1"
                                    type="text"
                                    id="hvmcount"    
                                    name="hvmcount"
                                    onChange={handleChange}
                                    value={hvmcount}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="priceformsec">
                            <img src={Icondolar} alt="" className="img-responsive logoimg"/>
                            <div>
                                <h4>{t('RateSection.Rate_Curruncy')}</h4>
                                <h1>{!hvmcount ? 0.53 : (hvmcount * 0.53).toFixed(2)}<span style={{fontSize: '16px'}}>USD</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-12">
                    </div>	
                    <div className="col-md-12 col-sm-12 col-12 text-center">
                        <a href="https://escrow.hvambit.com/" className="btn btn-black buybtn">{t('RateSection.Rate_Btn')}</a>
                    </div>			
                </div>
            </div>
        </section>

        <section id="parallax">
            <div className="overlay-bg"></div>
                <div className="container">
                <div className="col-sm-8 text-center m-auto pt100 pb100 border-top">
                    <div className="white text-center parallax-info">
                        <h4 className="mb10 lspacing">{t('CallSection.Call_Title')}</h4>
                        <h1>+44 7488 8808 02</h1>
                        <p>{t('CallSection.Call_SubTitle')}<br/> Info@hvambit.com</p>

                        <ul className="social-icons fadeIn">
                            <li><a href="https://www.facebook.com/hvamcoins"><i className="fa fa-facebook white"></i></a></li>
                            <li><a href="https://twitter.com/HvamCoins"><i className="fa fa-twitter white"></i></a></li>
                            <li><a href="https://www.instagram.com/hvambit/"><i className="fa fa-instagram white"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/hvam-coins-a58307173/"><i className="fa fa-linkedin white"></i></a></li>
                            {/* <li><a href="#"><i className="fa fa-google-plus white"></i></a></li> */}
                            <li><a href="https://www.hvamcoins.com"><i className="fa fa-dribbble white"></i></a></li>
                            <li><a href="http://www.tiktok.com/@hvambit"><img src={tiktoky} alt="" style={{width: '15px'}} /></a></li>
                        </ul>
                        {/* <h6>we don't <span className="highlight">enclose</span> your information with anyone.</h6> */}
                    </div>
                </div>
            </div>
        </section>

        <section id="price" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading m-auto text-center ">
                            <h2 className="f-xbold">{t('TableSection.Table_SubTitle')}</h2>
                            <hr className="seperator"/>
                            <p>{t('TableSection.Table_SubTitle')}</p>
                        </div>
                    </div>
                </div>
                <div className="row chartcontain">
                    <div className="col-md-6 col-xs-12">
                        <coingecko-coin-compare-chart-widget id="chartsecbox2"  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <coingecko-coin-list-widget coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-list-widget>
                    </div>
                </div>
            </div>
        </section>

        <section id="counter-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="single-project-complete">
                            <div className="imgebox">
                                <img src={IconProjectComplete} alt="" className="img-responsive imageres"/>
                            </div>
                            <h3>{t('CounterSection.Counter_One_Title')}</h3>
                            <h2 className="counter-num">{t('CounterSection.Counter_One_Number')}</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-project-complete">
                            <div className="imgebox">
                                <img src={IconHappyClients} alt="" className="img-responsive imageres"/>
                            </div>
                            <h3>{t('CounterSection.Counter_Two_Title')}</h3>
                            <h2 className="counter-num">{t('CounterSection.Counter_Two_Number')}</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-project-complete">
                            <div className="imgebox">
                                <img src={IconLineOfWork} alt="" className="img-responsive imageres"/>
                            </div>
                            <h3>{t('CounterSection.Counter_Three_Title')}</h3>
                            <h2 className="counter-num">{t('CounterSection.Counter_Three_Number')}</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-project-complete">
                            <div className="imgebox">
                                <img src={IconAwardsWon} alt="" className="img-responsive imageres"/>
                            </div>
                            <h3>{t('CounterSection.Counter_Four_Title')}</h3>
                            <h2 className="counter-num">{t('CounterSection.Counter_Four_Number')}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="blog" className="section-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="m-auto text-center ">
                            <h2 className="f-xbold">{t('BlogSection.Blog_Title')}</h2>
                            <hr className="seperator"/>
                            <p>{t('BlogSection.Blog_SubTitle')}</p>
                        </div>
                    </div>
                </div>
                
                {/* <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="blog-single">
                            <img src="img/blog/blog_1.jpg" alt="" className="img-responsive"/>
                            <div className="blog-inner">
                                <a href="#"><h4>Make a profitable busines with us...</h4></a>
                                <ul className="list-inline blog-info">
                                    <li><a href="#"><i className="fa fa-user"></i> Mike</a></li>
                                    <li><a href="#"><i className="fa fa-calendar"></i>17 jan 2018</a></li>
                                    <li><a href="#"><i className="fa fa-comments"></i> 5</a></li>
                                    <li><a href="#"><i className="fa fa-heart"></i> 20</a></li>
                                    <li><a href="#"><i className="fa fa-share"></i> 8 </a></li>
                                </ul>
                                <ul className="list-inline blog-social">
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-reddit-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance-square"></i></a></li>
                                </ul>
                                
                                <p>Perspiciatis maxime illo officiis modi, quasi molestiae molestias reiciendis repellendus, quaerat, expedita ea eveniet omnis illum accusantium. Adipisci eos vel, rem harum!</p>
                                <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-4">
                        <div className="blog-single">
                            <img src="img/blog/blog_2.jpg" alt="" className="img-responsive"/>
                            <div className="blog-inner">
                                <a href="#"><h4>Bitcoin crytpcurrency is now popular ...</h4></a>
                                <ul className="list-inline blog-info">
                                    <li><a href="#"><i className="fa fa-user"></i> Mike</a></li>
                                    <li><a href="#"><i className="fa fa-calendar"></i>17 jan 2018</a></li>
                                    <li><a href="#"><i className="fa fa-comments"></i> 5</a></li>
                                    <li><a href="#"><i className="fa fa-heart"></i> 20</a></li>
                                    <li><a href="#"><i className="fa fa-share"></i> 8 </a></li>
                                </ul>
                                <ul className="list-inline blog-social">
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-reddit-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance-square"></i></a></li>
                                </ul>
                                
                                <p>Perspiciatis maxime illo officiis modi, quasi molestiae molestias reiciendis repellendus, quaerat, expedita ea eveniet omnis illum accusantium. Adipisci eos vel, rem harum!</p>
                                <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-4">
                        <div className="blog-single">
                            <img src="img/blog/blog_3.jpg" alt="" className="img-responsive"/>
                            <div className="blog-inner">
                                <a href="#"><h4>How to grow Your business...</h4></a>
                                <ul className="list-inline blog-info">
                                    <li><a href="#"><i className="fa fa-user"></i> Mike</a></li>
                                    <li><a href="#"><i className="fa fa-calendar"></i>17 jan 2018</a></li>
                                    <li><a href="#"><i className="fa fa-comments"></i> 5</a></li>
                                    <li><a href="#"><i className="fa fa-heart"></i> 20</a></li>
                                    <li><a href="#"><i className="fa fa-share"></i> 8 </a></li>
                                </ul>
                                <ul className="list-inline blog-social">
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-reddit-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance-square"></i></a></li>
                                </ul>
                                
                                <p>Perspiciatis maxime illo officiis modi, quasi molestiae molestias reiciendis repellendus, quaerat, expedita ea eveniet omnis illum accusantium. Adipisci eos vel, rem harum!</p>
                                <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

        <section id="faq" className="pt120">
            <div className="container">
            <div className="row">
                    <div className="col-md-12">
                        <div className="heading m-auto text-center ">
                            <h5 className="subheading">{t('FaqSection.Faq_Title')}</h5>
                            <h2 className="f-xbold">{t('FaqSection.Faq_SubTitle')}</h2>
                            <hr className="seperator"/>
                        </div>
                    </div>
                </div>
                
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {t('FaqSection.Faq_One_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        <p>{t('FaqSection.Faq_One_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            {t('FaqSection.Faq_Two_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                        <p>{t('FaqSection.Faq_Two_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            {t('FaqSection.Faq_Three_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                        <p><a href="https://escrow.hvambit.com/register">Click here</a>{t('FaqSection.Faq_Three_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFour">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            {t('FaqSection.Faq_Five_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                    <div className="panel-body">
                                        <p>{t('FaqSection.Faq_Five_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFive">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            {t('FaqSection.Faq_Six_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                    <div className="panel-body">
                                        <p><a href="#">Click here</a>{t('FaqSection.Faq_Six_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingSix">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            {t('FaqSection.Faq_Seven_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                    <div className="panel-body">
                                        <p>{t('FaqSection.Faq_Seven_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingSeven">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            {t('FaqSection.Faq_Eight_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                    <div className="panel-body">
                                        <p>{t('FaqSection.Faq_Eight_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingEight">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            {t('FaqSection.Faq_Nine_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                                    <div className="panel-body">
                                        <p>{t('FaqSection.Faq_Nine_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTen">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                            {t('FaqSection.Faq_Ten_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTen">
                                    <div className="panel-body">
                                        <p>{t('FaqSection.Faq_Ten_SubTitle')}<a href="#">here</a>.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingEleven">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                            {t('FaqSection.Faq_Eleone_Title')}
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseEleven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEleven">
                                    <div className="panel-body">
                                        <p><a href="#">Click here</a>{t('FaqSection.Faq_Eleone_SubTitle')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    {/* <!-- COl end -->  */}
                    
                    <div className="col-md-6">
                    <img src="img/about/faq2.jpg" alt="" className="img-responsive m-auto"/>
                </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default Home