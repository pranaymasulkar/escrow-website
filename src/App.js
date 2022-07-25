import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <>
    {/* <!-- Start Preloader--> */}
    {/* <div id="preloader">
        <div id="status">&nbsp;</div>
    </div> */}
    {/* <!-- End Preloader--> */}

<Header/>
   
    {/* <!-- Start Hero Section --> */}
    <section id="hero" class="hero-main parallax ">
        <div class="hero-overlay">
            <div class="background-image bg-3 herohead">
                <img src="img/backgrounds/bg3.jpg" alt="#"/>
            </div>
        </div>
        <div class="hero-container container">
            <div class="hero-content">
                <div class="col-sm-12 m-auto text-center white fadeHero">
                    <h6 class="subheading">Welcome to</h6>
                    <h1 class="h1-lg mb10 text-uppercase">HVAM</h1>
                    <ul class="list-inline banner-info">
                        <li><span>4.8 </span> Million
                            <br/>Transactions</li>
                        <li><span>24 </span> Hours
                            <br/>Response time</li>
                        <li><span>92 </span> Percent
                            <br/>Satisfaction rate</li>
                    </ul>
                    <h5 class="lead h5-md mt30 mb20">A New Vision of Banking Services backed by Blockchain Crypto<br/> Make your trade easier with HVAM</h5>
                    {/* <!--<a href="#services" class="btn btn-hero">Join Now</a>--> */}
					<a href="signup.html" class="btn btn-hero">Join Now</a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Hero Section --> */}

    {/* <!-- Start About Section --> */}
    <section id="services" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="heading m-auto text-center ">
                        <h2 class="f-xbold">Let Crypto Make Your Trade More Easy Than Before</h2>
                        <hr class="seperator"/>
                        <p>Companies can also benefit from HVAM based trading by importing and exporting their in a business wallet.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md 3 col-sm-3">
                    <div class="service-box text-center">
                        <div class="icon-box service-icon icon-lg">
                            <i class="icon ion-android-sync"></i>
                        </div>
                        <div class="service-inner">
							{/* <!--<h4>2. <span>FUND ESCROW</span></h4>--> */}
                            <h4><span></span>ESCROW</h4>
                            <p>The escrow account in the modern technology that we are working on will be completely safe maintaining the confidentiality of the dealers.</p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md 3 col-sm-3">
                    <div class="service-box text-center active">
                        <div class="icon-box service-icon icon-lg">
                            <i class="icon ion-android-share"></i>
                        </div>
                        <div class="service-inner">
							<h4>FUND <span>ESCROW</span></h4>
                            <p>Is an escrow account that the company provide to customers to ensure all parties are fulfilling their obligations.</p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md 3 col-sm-3">
                    <div class="service-box text-center">
                        <div class="icon-box service-icon icon-lg">
                            <i class="icon ion-android-bicycle"></i>
                        </div>
                        <div class="service-inner ">
                            <h4>MAKE <span>PAYMENT</span></h4>
                            <p>Payment is executed after the first party's obligations are fulfilled to the second party.</p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                </div>
			    <div class="col-md 3 col-sm-3">
                    <div class="service-box text-center active">
                        <div class="icon-box service-icon icon-lg">
                            <i class="icon ion-android-share"></i>
                        </div>
                        <div class="service-inner">
                            <h4>RELEASE <span>FUNDS</span></h4>
                            <p>The funds are released after the transaction process is reviewed by the company's professionals and ensure that everything is in order.</p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                </div>	
            </div>
        </div>
    </section>
    {/* <!-- End Service Section --> */}

    {/* <!-- Start About Section --> */}
    <section id="about" class="pb60">
        <div class="col-md-6 hidden-xs">
            <div class="about-bg"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="about-wrap">
                        <h5 class="subheading">About us</h5>
                        <h3>Secure &amp; Easy Way to Trade</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
                        <ul class="about-info-list">
                            <li><i class="icon ion-checkmark"></i> Trusted worldwide.</li>
                            <li><i class="icon ion-checkmark"></i> Securee Wallet service.</li>
                            <li><i class="icon ion-checkmark"></i> Clean Modern Design.</li>
                            <li><i class="icon ion-checkmark"></i> Bunch of Experts.</li>
                            <li><i class="icon ion-checkmark"></i> Lots Of Usefull Features.</li>
                        </ul>
                        
                        <a href="#" class="btn btn-black ">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- Start HOw It Works Section --> */}
    <section id="howorks">
        <div class="bg-feature work-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="heading m-auto text-center ">
                            <h2 class="f-xbold">How our system works?</h2>
                            <hr class="seperator"/>
                            <p>Companies can also benefit from HVAM based trading by importing and exporting their assets in a business wallet. Follow the steps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="work-wrap ">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-9 m-auto">
                        <div class="row">
                            <div class="col-md-3 col-sm-3">
                                <div class="work-inner-box">
                                    <div class="icon-box work-icon icon-lg">
                                        <img src="img/icon/icon1.png" alt="" class="img-responsive"/>
                                    </div>
                                    <h4>1. Registration</h4>
                                    <p>sign up now and join our businesses.</p>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-3">
                                <div class="work-inner-box">
                                    <div class="icon-box work-icon icon-lg">
                                        <img src="img/icon/icon2.png" alt="" class="img-responsive"/>
                                    </div>
                                    <h4>2. Increase your balance</h4>
                                    <p>Profit increases by increasing balance.</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <div class="work-inner-box">
                                    <div class="icon-box work-icon icon-lg">
                                        <img src="img/icon/icon3.png" alt="" class="img-responsive"/>
                                    </div>
                                    <h4>3. Save your money and transactions</h4>
                                    <p>Wait for your profits to increase.</p>
                                </div>
                            </div>
						    <div class="col-md-3 col-sm-3">
                                <div class="work-inner-box">
                                    <div class="icon-box work-icon icon-lg">
                                        <img src="img/icon/icon3.png" alt="" class="img-responsive"/>
                                    </div>
                                    <h4>4. Quick Tranfer</h4>
                                    <p>Do your commercial transfer faster and safety.</p>
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
    <section id="features" class="bg-gray section-padding">
        <div class="container">
            <div class="row">
                <div class="heading m-auto text-center ">
                    <h2 class="f-xbold">Why Choose HVAM</h2>
                    <hr class="seperator"/>
                    <p>With a belief that culture drives commerce, we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action. Our specialty of connecting brand, culture, and commerce has earned us a big reputation.</p>
                </div>
            </div>
            <div class="row mb50">
                <div class="col-md-4 col-sm-4">
                    <div class="feature-box">
                        <div class="feature-icon">
                            <img src="img/service/service-1.png" alt="" class="img-responsive"/>
                        </div>
                        <div class="feature-inner">
                            <h4>Safe and Secure</h4>
                            <p>we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="feature-box">
                        <div class="feature-icon">
                            <img src="img/service/service-2.png" alt="" class="img-responsive"/>
                        </div>
                        <div class="feature-inner">
                            <h4>Make Payment</h4>
                            <p>we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="feature-box">
                        <div class="feature-icon">
                            <img src="img/service/service-3.png" alt="" class="img-responsive"/>
                        </div>
                        <div class="feature-inner">
                            <h4>Secure Wallet</h4>
                            <p>we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                 <div class="col-md-4 col-sm-4">
                    <div class="feature-box">
                        <div class="feature-icon">
                            <img src="img/service/service-4.png" alt="" class="img-responsive"/>
                        </div>
                        <div class="feature-inner">
                            <h4>Higher Availibilty</h4>
                            <p>we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="feature-box">
                        <div class="feature-icon">
                            <img src="img/service/service-5.png" alt="" class="img-responsive"/>
                        </div>
                        <div class="feature-inner">
                            <h4>Recurring Buying</h4>
                            <p>we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="feature-box">
                        <div class="feature-icon">
                            <img src="img/service/service-6.png" alt="" class="img-responsive"/>
                        </div>
                        <div class="feature-inner">
                            <h4>Instant Exchnage</h4>
                            <p>we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End  Feature Section --> */}
    
    {/* <!-- Start Testimonial Section --> */}
    <section id="parallax-contact" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 ">
                    <div class="clients text-center">
                        <h3>HVAM Rate</h3>
                        <p>$1 = 2 HVAM</p>
                    </div>
                </div>
            </div>
            {/* <!--   1st row end--> */}
           
            {/* <!--<div class="row">
                <div class="col-md-8 m-auto clients-wrap">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="client-logo">
                                <img src="img/partner/partner1.png" alt="" class="img-responsive center-block">
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="client-logo">
                               <img src="img/partner/partner2.png" alt="" class="img-responsive center-block">
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-26">
                            <div class="client-logo">
                                <img src="img/partner/partner3.png" alt="" class="img-responsive center-block">
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="client-logo">
                                <img src="img/partner/partner2.png" alt="" class="img-responsive center-block">
                            </div>
                        </div>
                    </div>
                </div>
            </div> --> */}
            {/* <!--   2nd row end--> */}
            
            <div class="row">
				<div class="col-md-3 col-sm-3">&nbsp;
				</div>
				<div class="col-md-3 col-sm-3">
					<div class="testimonial-wrap">	
						<p>&nbsp;</p>					
						<img src="img/about/dolar-transparent.png" style={{width: '98px', high: '98px'}} alt="" class="img-responsive"/>
						<div class="client-info">
							<h4>Dolar</h4>
							<p>2</p>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-3">
					<div class="testimonial-wrap">
						<p>&nbsp;</p>
						
						<img src="img/about/FullLogo_Transparent_2.png" style={{width: '98px', high: '98px'}} alt="" class="img-responsive"/>
						<div class="client-info">
							<h4>HVAM</h4>
							<p>$1</p>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-3">&nbsp;
				</div>				
               
               <div class="col-md-9 m-auto">
                <div class="carousel slide" id="testimonial-carousel" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="item active">
                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="testimonial-wrap">
                                        <p>Beatae fugit fugiat aperiam odio aliquid obcaecati ad, cupiditate sequi repudiandae necessitatibus minus debitis officia maxime id sint deserunt, quia quis mollitia.</p>
                                        
                                        <img src="img/about/tm2.jpg" alt="" class="img-responsive"/>
                                        <div class="client-info">
                                            <h4>Nikol Tin</h4>
                                            <p>Senior Consutant ,Softcorner INc</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="testimonial-wrap">
                                        <p>Beatae fugit fugiat aperiam odio aliquid obcaecati ad, cupiditate sequi repudiandae necessitatibus minus debitis officia maxime id sint deserunt, quia quis mollitia.</p>
                                        
                                        <img src="img/about/tm3.jpg" alt="" class="img-responsive"/>
                                        <div class="client-info">
                                            <h4>Martin Guptil</h4>
                                            <p>Consutant ,Softcorner INc</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="testimonial-wrap">
                                        <p>Beatae fugit fugiat aperiam odio aliquid obcaecati ad, cupiditate sequi repudiandae necessitatibus minus debitis officia maxime id sint deserunt, quia quis mollitia.</p>
                                        
                                        <img src="img/about/tm4.jpg" alt="" class="img-responsive"/>
                                        <div class="client-info">
                                            <h4>Nikol Tin</h4>
                                            <p>Senior Consutant ,Softcorner INc</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="testimonial-wrap">
                                        <p>Beatae fugit fugiat aperiam odio aliquid obcaecati ad, cupiditate sequi repudiandae necessitatibus minus debitis officia maxime id sint deserunt, quia quis mollitia.</p>
                                        
                                        <img src="img/about/tm.jpg" alt="" class="img-responsive"/>
                                        <div class="client-info">
                                            <h4>Martin Guptil</h4>
                                            <p>Consutant ,Softcorner INc</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				</div>
                
            </div>
        </div>
    </section>
    {/* <!-- End Testimonial Section --> */}
    
    {/* <!-- Start parallax Section --> */}
    <section id="parallax">
       <div class="overlay-bg"></div>
        <div class="container">
            <div class="col-sm-8 text-center m-auto pt100 pb100 border-top">
                <div class="white text-center parallax-info">
                    <h4 class="mb10 lspacing">Give Us A Call</h4>
                    <h1>+971 50 401 7415</h1>

                    <p>Office 407, Indogo Tower Jumeirah Lakes Towers (JLT), Dubai ,United Arab Emirates (UAE).<br/> info@hvamcoin.com </p>

                    <ul class="social-icons fadeIn">
                        <li><a href="#"><i class="fa fa-facebook white"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter white"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram white"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus white"></i></a></li>
                        <li><a href="#"><i class="fa fa-behance white"></i></a></li>
                        <li><a href="#"><i class="fa fa-dribbble white"></i></a></li>
                    </ul>
                    <h6>we don't <span class="highlight">enclose</span> your information with anyone.</h6>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Parallax Section -->  */}
    
    {/* <!-- Start Price chart Section -->  */}
    <section id="price" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                     <div class="heading m-auto text-center ">
                        <h2 class="f-xbold">Updated Price rate</h2>
                        <hr class="seperator"/>
                        <p>With a belief that culture drives commerce, we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action. Our specialty of connecting brand, culture, and commerce has earned us a big reputation.</p>
                    </div>
                </div>
            </div>
            
            <div class="row">
               <div class="col-md-6 col-xs-12">
                   <div class="price-chart-img">
                       <img src="img/about/chart.jpg" alt="" class="img-responsive"/>
                   </div>
               </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="price-chart ">
                        
                    <table class="table table-striped table-responsive-xs table-hover text-left">
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
                            <td><img src="img/coin/1.png" class="currency-icon" alt=""/>Bitcoin</td>
                            <td>9,290.06 $</td>
                            <td class="up">14.44%</td>
                            <td>218,087 BTC</td>
                            <td>923,629</td>
                        </tr>
                        <tr>
                            <td><img src="img/coin/2.png" class="currency-icon" alt=""/>Ethereum</td>
                            <td>407.13 $</td>
                            <td class="up">16.17%</td>
                            <td>1,223,367 ETH</td>
                            <td>663,133</td>
                        </tr>
                        <tr>
                            <td><img src="img/coin/3.png" class="currency-icon" alt=""/>Exchange Union</td>
                            <td>7.47 $</td>
                            <td class="down">-1.09%</td>
                            <td>3,352 XUC</td>
                            <td>427,132</td>
                        </tr>
                        <tr>
                            <td><img src="img/coin/4.png" class="currency-icon" alt=""/>Ripple</td>
                            <td>0.22 $</td>
                            <td class="up">20.80%</td>
                            <td>211,418,299 XRP</td>
                            <td>719,280</td>
                        </tr>
                        <tr>
                            <td><img src="img/coin/5.png" class="currency-icon" alt=""/>Veritaseum</td>
                            <td>84.22 $</td>
                            <td class="down">-14.56%</td>
                            <td>36 VERI	</td>
                            <td>218,887</td>
                        </tr>
                        <tr>
                            <td><img src="img/coin/6.png" class="currency-icon" alt=""/>DigitalCash</td>
                            <td>709.31 $</td>
                            <td class="down">-1.18%</td>
                            <td>125,361 DASH</td>
                            <td>427,132</td>
                        </tr>
                        <tr>
                            <td><img src="img/coin/7.png" class="currency-icon" alt=""/>Monero</td>
                            <td>78.97 $</td>
                            <td class="up">20.55%	</td>
                            <td>2,281,288 LTC</td>
                            <td>719,280</td>
                        </tr>
                        <tr>
                            <td><img src="img/coin/8.png" class="currency-icon" alt=""/> Litecoin</td>
                            <td>156.32 $</td>
                            <td class="up">1.18%</td>
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
         <div class="container">
             <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="single-project-complete">
                        <i class="icon ion-thumbsup"></i>
                        <h3>project complete</h3>
                        <h2 class="counter-num">1200</h2>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-project-complete">
                        <i class="icon ion-ios-people"></i>
                        <h3>Happy Clients</h3>
                        <h2 class="counter-num">1000</h2>

                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-project-complete">
                        <i class="icon ion-android-globe"></i>
                        <h3>Line of Work</h3>
                        <h2 class="counter-num">56090</h2>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-project-complete">
                        <i class="fa fa-angellist"></i>
                        <h3>Awards won</h3>
                        <h2 class="counter-num">31</h2>
                    </div>
                </div>
             </div>
         </div>
     </section>
     {/* <!-- End Counter Section -->  */}
    
     {/* <!-- Start Team Section --> */}
     <section id="team" class="section-padding ">
         <div class="container">
             <div class="row">
                  <div class="col-md-12">
                     <div class="heading m-auto text-center ">
                        <h2 class="f-xbold">Excellent Team Workers</h2>
                        <hr class="seperator"/>
                        <p>With a belief that culture drives commerce, we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action. Our specialty of connecting brand, culture, and commerce has earned us a big reputation.</p>
                    </div>
                </div>
             </div>
             
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="img/team/img-1.jpg" alt="Team image"/>
                        </div>
                        <h3 class="title">Williamson</h3>
                        <span class="post">Web Developer</span>
                        <ul class="social">
                            <li><a href="#" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-google-plus"></a></li>
                            <li><a href="#" class="fa fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="img/team/img-2.jpg" alt="Team image"/>
                        </div>
                        <h3 class="title">Kristiana</h3>
                        <span class="post">Web Designer</span>
                        <ul class="social">
                            <li><a href="#" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-google-plus"></a></li>
                            <li><a href="#" class="fa fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="img/team/img-3.jpg" alt="Team image"/>
                        </div>
                        <h3 class="title">Williamson</h3>
                        <span class="post">Web Developer</span>
                        <ul class="social">
                            <li><a href="#" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-google-plus"></a></li>
                            <li><a href="#" class="fa fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="img/team/img-4.jpg" alt="Team image"/>
                        </div>
                        <h3 class="title">Kristiana</h3>
                        <span class="post">Web Designer</span>
                        <ul class="social">
                            <li><a href="#" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-google-plus"></a></li>
                            <li><a href="#" class="fa fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
     </section> 
     {/* <!-- End Team Section -->  */}
     
     {/* <!-- Start Blog Section -->  */}
     <section id="blog" class="section-padding bg-gray">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                     <div class="heading m-auto text-center ">
                        <h2 class="f-xbold">Recent Blog Update</h2>
                        <hr class="seperator"/>
                        <p>With a belief that culture drives commerce, we leverage shared values and ideals to inform strategy and design, creating experiences that inspire life and inspire action. Our specialty of connecting brand, culture, and commerce has earned us a big reputation.</p>
                    </div>
                </div>
             </div>
             
             <div class="row">
                 <div class="col-md-4 col-sm-4">
                     <div class="blog-single">
                         <img src="img/blog/blog_1.jpg" alt="" class="img-responsive"/>
                         <div class="blog-inner">
                             <a href="#"><h4>Make a profitable busines with us...</h4></a>
                             <ul class="list-inline blog-info">
                                 <li><a href="#"><i class="fa fa-user"></i> Mike</a></li>
                                 <li><a href="#"><i class="fa fa-calendar"></i>17 jan 2018</a></li>
                                 <li><a href="#"><i class="fa fa-comments"></i> 5</a></li>
                                 <li><a href="#"><i class="fa fa-heart"></i> 20</a></li>
                                 <li><a href="#"><i class="fa fa-share"></i> 8 </a></li>
                             </ul>
                            <ul class="list-inline blog-social">
                                <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-reddit-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance-square"></i></a></li>
                            </ul>
                            
                             <p>Perspiciatis maxime illo officiis modi, quasi molestiae molestias reiciendis repellendus, quaerat, expedita ea eveniet omnis illum accusantium. Adipisci eos vel, rem harum!</p>
                             <a href="#" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                             
                         </div>
                     </div>
                 </div>
                 
                 <div class="col-md-4 col-sm-4">
                     <div class="blog-single">
                         <img src="img/blog/blog_2.jpg" alt="" class="img-responsive"/>
                         <div class="blog-inner">
                             <a href="#"><h4>Bitcoin crytpcurrency is now popular ...</h4></a>
                             <ul class="list-inline blog-info">
                                 <li><a href="#"><i class="fa fa-user"></i> Mike</a></li>
                                 <li><a href="#"><i class="fa fa-calendar"></i>17 jan 2018</a></li>
                                 <li><a href="#"><i class="fa fa-comments"></i> 5</a></li>
                                 <li><a href="#"><i class="fa fa-heart"></i> 20</a></li>
                                 <li><a href="#"><i class="fa fa-share"></i> 8 </a></li>
                             </ul>
                            <ul class="list-inline blog-social">
                                <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-reddit-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance-square"></i></a></li>
                            </ul>
                            
                             <p>Perspiciatis maxime illo officiis modi, quasi molestiae molestias reiciendis repellendus, quaerat, expedita ea eveniet omnis illum accusantium. Adipisci eos vel, rem harum!</p>
                             <a href="#" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                             
                         </div>
                     </div>
                 </div>
                 
                 <div class="col-md-4 col-sm-4">
                     <div class="blog-single">
                         <img src="img/blog/blog_3.jpg" alt="" class="img-responsive"/>
                         <div class="blog-inner">
                             <a href="#"><h4>How to grow Your business...</h4></a>
                             <ul class="list-inline blog-info">
                                 <li><a href="#"><i class="fa fa-user"></i> Mike</a></li>
                                 <li><a href="#"><i class="fa fa-calendar"></i>17 jan 2018</a></li>
                                 <li><a href="#"><i class="fa fa-comments"></i> 5</a></li>
                                 <li><a href="#"><i class="fa fa-heart"></i> 20</a></li>
                                 <li><a href="#"><i class="fa fa-share"></i> 8 </a></li>
                             </ul>
                            <ul class="list-inline blog-social">
                                <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-reddit-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance-square"></i></a></li>
                            </ul>
                            
                             <p>Perspiciatis maxime illo officiis modi, quasi molestiae molestias reiciendis repellendus, quaerat, expedita ea eveniet omnis illum accusantium. Adipisci eos vel, rem harum!</p>
                             <a href="#" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     {/* <!-- End Blog Section -->   */}
     
     {/* <!-- Start Faq Section -->   */}
     <section id="faq" class="pt120">
         <div class="container">
           <div class="row">
                 <div class="col-md-12">
                     <div class="heading m-auto text-center ">
                        <h5 class="subheading">Have any Question on Mind ?</h5>
                        <h2 class="f-xbold">Frequently Asked Questions</h2>
                        <hr class="seperator"/>
                    </div>
                </div>
             </div>
             
             
            <div class="row">
                <div class="col-md-6">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How It Works ?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How To create a Wallet?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What do you need to do a business?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* <!-- COl end -->  */}
                
                <div class="col-md-6">
                   <img src="img/about/faq2.png" alt="" class="img-responsive"/>
               </div>
            </div>
         </div>
     </section>
     {/* <!-- End Faq Section -->  */}
     
    {/* <!-- Start Footer section    --> */}
    <footer id="footer-main">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-4">
                    <div class="widget footer-widget">
                        <h4>We accept</h4>
                        <ul class="list-inline coin-widget">
                            <li><a href="#"><i class="fa  fa-cc-mastercard"></i></a></li>
                            <li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
                            <li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
                            <li><a href="#"><i class="fa  fa-cc-discover"></i></a></li>
                            <li><a href="#"><i class="fa  fa-cc-amex"></i></a></li>
                            <li><a href="#"><i class="fa  fa-cc-stripe"></i></a></li>
                        </ul>
                    </div>
                </div>
            
               
                <div class="col-md-4 col-sm-6">
                    <div class="widget news-widget">
                        <h4>Stay up to date</h4>
                        
						{/* <!-- Input Card --> */}
						<div class="input-card mt-3">
						  <div class="input-card-form newsletter">
							<input type="email" class="form-control newsletter-input" id="newsletter_email_footer" name="email" placeholder="Email Address" aria-label="Email Address" maxlength="99"/>
						  </div>
						  <button type="submit" name="submit" value="form" class="btn btn-primary newsletter-button">Subscribe</button>
						</div>
						{/* <!-- End Input Card --> */}
						<div id="form_newsletter_response"></div>
						<input type="hidden" name="sys_lang_id" value="1"/>
                        <ul>
							<li><a href="#">&nbsp;</a></li>
                            <li><a href="#">You can unsubscribe at any time</a></li>
						</ul>	
                         {/* <!--   <li><a href="#">Unlimited API request</a></li>
                            <li><a href="#">Bitcoin Price report 2016</a></li>
                            <li><a href="#">Average Bitcoin Price</a></li>
                            <li><a href="#">API Documentation</a></li>
                            <li><a href="#">API Statics</a></li>
                        </ul>--> */}
                    </div>
                </div>
                <div class="col-md-2 col-sm-6">
                    <div class="widget news-widget">
                        <h4>HVAM DMCC</h4>
                        
                        <ul>
                            <li><a href="#">ADD HVAM</a></li>
                            <li><a href="#">Roadmap</a></li>
                            <li><a href="#">Markets</a></li>
                            <li><a href="#">Whitepaper </a></li>
                            <li><a href="#">Certificate </a></li>
                            <li><a href="#">Terms & Conditions </a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="widget contact-widget">
                        <h4>Contact Us</h4>
                        
                        <ul class="footer-contact">
                            <li><i class="fa fa-map-marker"></i>Office 407, Indogo Tower Jumeirah Lakes Towers (JLT), Dubai ,United Arab Emirates (UAE) </li>
                            <li><i class="fa fa-phone"></i> <span>+971 50 401 7415</span></li>
                            <li><i class="fa fa-envelope-o"></i> <span>info@hvamcoin.com</span></li>
                        </ul>
                        
                        <ul class="list-inline">
                            <li><a href="#"><i class="icon ion-social-facebook"></i></a></li>
                            <li><a href="#"><i class="icon ion-social-googleplus"></i></a></li>
                            <li><a href="#"><i class="icon ion-social-twitter"></i></a></li>
                            <li><a href="#"><i class="icon ion-social-instagram"></i></a></li>
                            <li><a href="#"><i class="icon ion-social-tumblr"></i></a></li>
                            <li><a href="#"><i class="icon ion-social-rss"></i></a></li>
                            <li><a href="#"><i class="icon ion-social-vimeo"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-12 text-center">
                    <p class="copy ">
                        {/* <!--Bitcoin is unstabe source of statics income over virtual world. <br>--> */}
                         All copyright Reserved to <span>HVAM DMCC</span> 2022</p>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- End Footer section    --> */}
 
    {/* <!-- Start Back To Top --> */}
    <a data-scroll id="back-to-top" href="#hero"><i class="icon ion-chevron-up"></i></a>
    {/* <!-- End Back To Top --> */}
    </>
  );
}

export default App;
