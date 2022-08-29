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
import IconHvamBit from "../assets/img/logo.png";
import tiktoky from "../assets/img/tiktiky.png";

const Home = () => {
    const [hvmcount, setHvmcount] = useState(1);
    // const [hvmtotal, setHvmtotal] = useState(0.53);

    const handleChange = event => {
        setHvmcount(event.target.value);
        // setHvmtotal((event.target.value * 0.53).toFixed(2));
      };
  return (
    <>
        <Header/>
        {/* <!-- Start Hero Section --> */}
        <section id="hero" className="hero-main parallax ">
            <div className="hero-overlay">
                <div className="background-image bg-3 herohead">
                    <img src="img/backgrounds/bg3.jpg" alt="#"/>
                </div>
            </div>
            <div className="hero-container container">
                <div className="hero-content">
                    <div className="col-sm-12 m-auto text-center white fadeHero">
                        <h6 className="subheading">Welcome to</h6>
                        <h1 className="h1-lg mb10 text-uppercase">HVAMBIT</h1>
                        <ul className="list-inline banner-info">
                            <li><span>4.8 </span> Million
                                <br/>Transactions</li>
                            <li><span>24 </span> Hours
                                <br/>Response time</li>
                            <li><span>92 </span> Percent
                                <br/>Satisfaction rate</li>
                        </ul>
                        <h5 className="lead h5-md mt30 mb20">A New Vision of Banking Services backed by Blockchain.  
                        <br/>Make your trade easier with HVAMBIT.</h5>
                        <a href="https://escrow.hvambit.com/register" className="btn btn-hero">Join Now</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Hero Section --> */}

        {/* <!-- Start About Section --> */}
        <section id="services" className="section-padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading m-auto text-center ">
                            <h2 className="f-xbold">Let HVAM make your trade easier than before.</h2>
                            <hr className="seperator"/>
                            <p>Buy, sell, swap and access unique services - all from a single platform.</p>
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
                                {/* <!--<h4>2. <span>FUND ESCROW</span></h4>--> */}
                                <h4>CREATE <span>ESCROW</span></h4>
                                <p>Create an escrow account by providing your transaction details and send an escrow payment request to seller.</p>
                                {/* <a href="#" className="read-more">Read More</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={Iconfundescrow} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner">
                                <h4>FUND <span>ESCROW</span></h4>
                                <p>Buyer transfers payment to HVAM escrow account for safekeeping until the conditions are met and service is delivered.</p>
                                {/* <a href="#" className="read-more">Read More</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center active">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={Iconverify} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner ">
                                <h4>VERIFIES <span>DOCUMENTS</span></h4>
                                <p>Seller to provide proof of deliveries and HVAM to verifies each parties’ documents.</p>
                                {/* <a href="#" className="read-more">Read More</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={Icondeliveryconfirmation} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner">
                                <h4>DELIVERY <span>CONFIRMATION</span></h4>
                                <p>The buyer now has a specific inspection period to verify the product before the acceptance or rejection.</p>
                                {/* <a href="#" className="read-more">Read More</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-12">
                        <div className="service-box text-center active">
                            <div className="icon-box service-icon icon-lg imgebox">
                                <img src={Iconreleasefund} alt="" className="img-responsive imageres m-auto"/>
                            </div>
                            <div className="service-inner">
                                <h4>RELEASE <span>FUNDS</span></h4>
                                <p>If the product meets the specifications and conditions agreed upon, HVAM may now release the funds to the seller accordingly.</p>
                                {/* <a href="#" className="read-more">Read More</a> */}
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </section>
        {/* <!-- End Service Section --> */}

        {/* <!-- Start About Section --> */}
        <section id="about" className="pb60">
            <div className="col-md-6 hidden-xs">
                <div className="about-bg"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="">
                            <h5 className="subheading">ABOUT US</h5>
                            <h3>Secure &amp; Easy way to trade</h3>
                            <p>HVAMBIT offers its participants with multiple benefits and advantages such as own crypto wallet to explore blockchain, trading, swapping, NFT platform, and crypto payment escrow services – all from a single platform. One of our purposes is to replace the classic financial instruments (LC.DLC.SBLC), to financial instrument based on cryptocurrency to make trading move easier and safer between companies and individuals. </p>
                            <ul className="about-info-list">
                                <li><i className="icon ion-checkmark"></i>User’s information and financial security.</li>
                                <li><i className="icon ion-checkmark"></i>Confidentiality</li>
                                <li><i className="icon ion-checkmark"></i>Trouble-free</li>
                                <li><i className="icon ion-checkmark"></i>Cost-effective</li>
                                <li><i className="icon ion-checkmark"></i>Trusted Worldwide</li>
                                <li><i className="icon ion-checkmark"></i>Clear Navigation</li>
                            </ul>
                            
                            <a href="https://escrow.hvambit.com/register" className="btn btn-black ">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- Start HOw It Works Section --> */}
        <section id="howorks">
            <div className="bg-feature work-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading m-auto text-center ">
                                <h2 className="f-xbold">HOW OUR SYSTEM WORKS?</h2>
                                <hr className="seperator"/>
                                <p>Companies can also benefit from HVAM based trading by importing and exporting their assets in a business wallet. Follow the steps</p>
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
                                        <h4>1. Registration</h4>
                                        <p>Sign up now to discover our exclusive benefits.</p>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-3">
                                    <div className="work-inner-box">
                                        <div className="icon-box work-icon icon-lg imgebox">
                                            <img src={Iconincrease} alt="" className="img-responsive imageres m-auto"/>
                                        </div>
                                        <h4>2. Increase your balance</h4>
                                        <p>Profit increases by increasing your balance.</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="work-inner-box">
                                        <div className="icon-box work-icon icon-lg imgebox">
                                            <img src={Iconsafeandsecure} alt="" className="img-responsive imageres m-auto"/>
                                        </div>
                                        <h4>3. Save your money and transaction</h4>
                                        <p>Wait for your profit to increase.</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="work-inner-box">
                                        <div className="icon-box work-icon icon-lg imgebox">
                                            <img src={Iconquicktransfer} alt="" className="img-responsive imageres m-auto"/>
                                        </div>
                                        <h4>4. Quick transfer</h4>
                                        <p>Do your commercial transfer safe, fast, and cost-effective.</p>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End HOw It Works Section --> */}

        {/* <!-- Start  Feature Section --> */}
        <section id="features" className="bg-gray section-padding">
            <div className="container">
                <div className="row">
                    <div className="heading m-auto text-center ">
                        <h2 className="f-xbold">WHY CHOOSE HVAM</h2>
                        <hr className="seperator"/>
                        <p>Our project grasps one of the problems in overall marketplace; “trust”. Developing decentralized applications and escrow services can guarantee the security of users’ assets and satisfaction. Our upmost scheme is to provide safe trading industry between parties.</p>
                    </div>
                </div>
                <div className="row mb50">
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconsafeandsecure} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>Safe and secure</h4>
                                <p>Safe trading platform is the upmost goal of HVAMBIT. Personal and financial information will be secured.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconmakepayment} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>Make Payment</h4>
                                <p>Easily and securely make payment for the goods/service you desire.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconsecurewallet} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>Secure Wallet</h4>
                                <p>Store all your digital assets securely.</p>
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
                                <h4>Higher Availibilty</h4>
                                <p>High level of operational performance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconrecurring} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>Recurring Buying</h4>
                                <p>Set-up how you want to purchase the cryptocurrency you like.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src={Iconchange} alt="" className="img-responsive"/>
                            </div>
                            <div className="feature-inner">
                                <h4>Instant Exchnage</h4>
                                <p>Exchange any cryptocurrency faster, simpler, and in secure way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End  Feature Section --> */}
        
        {/* <!-- Start Testimonial Section --> */}
        <section id="parallax-contact" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 ">
                        <div className="clients text-center">
                            <h3>HVAM Rate</h3>
                            <p>1 HVAM = 0.53 USD</p>
                        </div>
                    </div>
                </div>
                
                <div className="row buyhamsec">
                    <div className="col-md-2 col-sm-12 col-12">
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="priceformsec">
                            <img src={Icondolar} alt="" className="img-responsive logoimg"/>
                            <div>
                                <h4>Dolar</h4>
                                <input className="form-control" placeholder="$1" aria-label="$1"
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
                            <img src={IconHvamBit} alt="" className="img-responsive weblogoimg"/>
                            <div>
                                <h4>HVAM</h4>
                                <h1>{!hvmcount ? 0.53 : (hvmcount * 0.53).toFixed(2)}<span style={{fontSize: '16px'}}>USD</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-12">
                    </div>	
                    <div className="col-md-12 col-sm-12 col-12 text-center">
                        <a href="https://escrow.hvambit.com/" className="btn btn-black buybtn">Buy HVAM</a>
                    </div>			
                </div>
            </div>
        </section>
        {/* <!-- End Testimonial Section --> */}
        
        {/* <!-- Start parallax Section --> */}
        <section id="parallax">
            <div className="overlay-bg"></div>
                <div className="container">
                <div className="col-sm-8 text-center m-auto pt100 pb100 border-top">
                    <div className="white text-center parallax-info">
                        <h4 className="mb10 lspacing">Give Us A Call</h4>
                        <h1>+44 7488 8808 02</h1>
                        <p>Kemp House 160 City Road P.o. Box : EC1V2NX London United Kingdom<br/> Info@hvambit.com</p>

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
        {/* <!-- End Parallax Section -->  */}
        
        {/* <!-- Start Price chart Section -->  */}
        <section id="price" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading m-auto text-center ">
                            <h2 className="f-xbold">Updated Price Rate</h2>
                            <hr className="seperator"/>
                            <p>Markets Overview</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                <div className="col-md-6 col-xs-12">
                    <div className="price-chart-img">
                        <img src="img/about/chart.jpg" alt="" className="img-responsive"/>
                    </div>
                </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="price-chart table-responsive">
                            
                        <table className="table table-striped  table-hover text-left">
                            <thead>
                            <tr>
                                <th>Cryptocurrency</th>
                                <th>Price</th>
                                <th>24h % Change</th>
                                <th>24h Volume (coin)</th>
                                <th>Supply</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><img src="img/coin/1.png" className="currency-icon" alt=""/>Bitcoin</td>
                                <td>9,290.06 $</td>
                                <td className="up">14.44%</td>
                                <td>218,087 BTC</td>
                                <td>923,629</td>
                            </tr>
                            <tr>
                                <td><img src="img/coin/2.png" className="currency-icon" alt=""/>Ethereum</td>
                                <td>407.13 $</td>
                                <td className="up">16.17%</td>
                                <td>1,223,367 ETH</td>
                                <td>663,133</td>
                            </tr>
                            <tr>
                                <td><img src="img/coin/3.png" className="currency-icon" alt=""/>Exchange Union</td>
                                <td>7.47 $</td>
                                <td className="down">-1.09%</td>
                                <td>3,352 XUC</td>
                                <td>427,132</td>
                            </tr>
                            <tr>
                                <td><img src="img/coin/4.png" className="currency-icon" alt=""/>Ripple</td>
                                <td>0.22 $</td>
                                <td className="up">20.80%</td>
                                <td>211,418,299 XRP</td>
                                <td>719,280</td>
                            </tr>
                            <tr>
                                <td><img src="img/coin/5.png" className="currency-icon" alt=""/>Veritaseum</td>
                                <td>84.22 $</td>
                                <td className="down">-14.56%</td>
                                <td>36 VERI	</td>
                                <td>218,887</td>
                            </tr>
                            <tr>
                                <td><img src="img/coin/6.png" className="currency-icon" alt=""/>DigitalCash</td>
                                <td>709.31 $</td>
                                <td className="down">-1.18%</td>
                                <td>125,361 DASH</td>
                                <td>427,132</td>
                            </tr>
                            <tr>
                                <td><img src="img/coin/7.png" className="currency-icon" alt=""/>Monero</td>
                                <td>78.97 $</td>
                                <td className="up">20.55%	</td>
                                <td>2,281,288 LTC</td>
                                <td>719,280</td>
                            </tr>
                            <tr>
                                <td><img src="img/coin/8.png" className="currency-icon" alt=""/> Litecoin</td>
                                <td>156.32 $</td>
                                <td className="up">1.18%</td>
                                <td>255,226 XMR</td>
                                <td>218,887</td>
                            </tr>
                            </tbody>
                        </table>
                    
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Price Chart Section --> */}
        
        {/* <!-- Start Counter Section -->  */}
        <section id="counter-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="single-project-complete">
                            <div className="imgebox">
                                <img src={IconProjectComplete} alt="" className="img-responsive imageres"/>
                            </div>
                            <h3>project complete</h3>
                            <h2 className="counter-num">1200</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-project-complete">
                            <div className="imgebox">
                                <img src={IconHappyClients} alt="" className="img-responsive imageres"/>
                            </div>
                            <h3>Happy Clients</h3>
                            <h2 className="counter-num">1000</h2>

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-project-complete">
                            <div className="imgebox">
                                <img src={IconLineOfWork} alt="" className="img-responsive imageres"/>
                            </div>
                            <h3>Line of Work</h3>
                            <h2 className="counter-num">56090</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-project-complete">
                            <div className="imgebox">
                                <img src={IconAwardsWon} alt="" className="img-responsive imageres"/>
                            </div>
                            <h3>Awards won</h3>
                            <h2 className="counter-num">31</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Counter Section -->  */}
        
        {/* <!-- Start Team Section --> */}
        {/* <section id="team" className="section-padding ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading m-auto text-center ">
                            <h2 className="f-xbold">Excellent team workers</h2>
                            <hr className="seperator"/>
                            <p>A highly skilled and motivated team technologists and team leaders with great expertise in trading industry and businesses, with economic advisors who are interested in the smallest details.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="our-team">
                            <div className="pic">
                                <img src="img/team/avtar.jpg" alt="Team image"/>
                            </div>
                            <h3 className="title">Name</h3>
                            <span className="post">Position</span>
                            <ul className="social">
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-google-plus"></a></li>
                                <li><a href="#" className="fa fa-linkedin"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="our-team">
                            <div className="pic">
                                <img src="img/team/avtar.jpg" alt="Team image"/>
                            </div>
                            <h3 className="title">Name</h3>
                            <span className="post">Position</span>
                            <ul className="social">
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-google-plus"></a></li>
                                <li><a href="#" className="fa fa-linkedin"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="our-team">
                            <div className="pic">
                                <img src="img/team/avtar.jpg" alt="Team image"/>
                            </div>
                            <h3 className="title">Name</h3>
                            <span className="post">Position</span>
                            <ul className="social">
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-google-plus"></a></li>
                                <li><a href="#" className="fa fa-linkedin"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="our-team">
                            <div className="pic">
                                <img src="img/team/avtar.jpg" alt="Team image"/>
                            </div>
                            <h3 className="title">Name</h3>
                            <span className="post">Position</span>
                            <ul className="social">
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-google-plus"></a></li>
                                <li><a href="#" className="fa fa-linkedin"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>  */}
        {/* <!-- End Team Section -->  */}
        
        {/* <!-- Start Blog Section -->  */}
        <section id="blog" className="section-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="m-auto text-center ">
                            <h2 className="f-xbold">Recent blog update</h2>
                            <hr className="seperator"/>
                            <p>Latest article from HVAMBIT.</p>
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
        {/* <!-- End Blog Section -->   */}
        
        {/* <!-- Start Faq Section -->   */}
        <section id="faq" className="pt120">
            <div className="container">
            <div className="row">
                    <div className="col-md-12">
                        <div className="heading m-auto text-center ">
                            <h5 className="subheading">Have any Question on Mind ?</h5>
                            <h2 className="f-xbold">Frequently Asked Questions</h2>
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
                                            What is HVAMBIT?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        <p>HVAMBIT is a platform which offer its participants with multiple benefits and advantages such as own crypto wallet to explore blockchain, trading, swapping, NFT platform, and crypto payment escrow services – all from a single platform. One of our purposes is to replace the classic financial instruments (LC.DLC.SBLC), to financial instrument based on cryptocurrency to make trading move easier and safer between companies and individuals.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How does it work?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                        <p>First and foremost, you must create an account, verify it by confirming your email and provide the HVAM receiving wallet address. Next, increase your balance and do your commercial transfer safe, fast, and cost-effective. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How can I register?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                        <p>Click <a href="https://escrow.hvambit.com/register">here</a> to sign-up.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFour">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What HVAM can offer?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                    <div className="panel-body">
                                        <p>HVAM wallet, NFT platform, Escrow service, Swapping, and more. Aside from that, you can guarantee the security, reliability, and cost-effectiveness with HVAM. Click here to know more about us.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFive">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How can I get the HVAM receiving wallet address?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                    <div className="panel-body">
                                        <p>Click <a href="#">here</a> and watch the video below for the step-by-step instructions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingSix">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            What is HVAM escrow?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                    <div className="panel-body">
                                        <p>HVAM escrow is a neutral third party keeping the funds until the conditions are met and the delivery is confirmed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingSeven">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            What is HVAM wallet?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                    <div className="panel-body">
                                        <p>Where you can store all your assets in one place. We developed our own wallet for you to store your cryptos and NFTs securely, initiate sending, receiving, exchange tokens, access our NFT Marketplace and payments. HVAM wallet employs a number of security mechanisms (secret phrase) to protect client’s assets against hacking or fraud and equips you with a user login and everything you need to manage your digital assets. It will be available for IOS and Android.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingEight">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            Is it safe to pay using my financial card?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                                    <div className="panel-body">
                                        <p>Yes. HVAM platform doesn’t do its own transactions and handle your financial information when it comes to payment, PayPal does. They built up the expertise and implemented the proper tools and procedure to make sure every transaction achieves security, liquidity and efficiency. To know more about it, <a href="#">click here.</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTen">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                            Where can I read the whitepaper?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTen">
                                    <div className="panel-body">
                                        <p>You can find whitepaper in HVAM homepage or by clicking <a href="#">here</a>.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingEleven">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                            How can I view the roadmap?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseEleven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEleven">
                                    <div className="panel-body">
                                        <p>Click <a href="#">here</a> to view the roadmap.</p>
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
        {/* <!-- End Faq Section -->  */}
        
        <Footer/>
    </>
  )
}

export default Home