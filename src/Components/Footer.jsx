import React from 'react'

const Footer = () => {
  return (
    <>
        {/* <!-- Start Footer section    --> */}
        <footer id="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4">
                        <div className="widget footer-widget">
                            <h4>We accept</h4>
                            <ul className="list-inline coin-widget">
                                <li><a href="#"><i className="fa  fa-cc-mastercard"></i></a></li>
                                <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                                <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                                <li><a href="#"><i className="fa  fa-cc-discover"></i></a></li>
                                <li><a href="#"><i className="fa  fa-cc-amex"></i></a></li>
                                <li><a href="#"><i className="fa  fa-cc-stripe"></i></a></li>
                            </ul>
                        </div>
                    </div>
                
                
                    <div className="col-md-4 col-sm-6">
                        <div className="widget news-widget">
                            <h4>Stay up to date</h4>
                            
                            {/* <!-- Input Card --> */}
                            <div className="input-card mt-3">
                            <div className="input-card-form newsletter">
                                <input type="email" className="form-control newsletter-input" id="newsletter_email_footer" name="email" placeholder="Email Address" aria-label="Email Address" maxlength="99"/>
                            </div>
                            <button type="submit" name="submit" value="form" className="btn btn-primary newsletter-button">Subscribe</button>
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
                    <div className="col-md-2 col-sm-6">
                        <div className="widget news-widget">
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
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="widget contact-widget">
                            <h4>Contact Us</h4>
                            
                            <ul className="footer-contact">
                                <li><i className="fa fa-map-marker"></i>Kemp House 160 City Road, London, United Kingdom P.O box: EC1V2NX</li>
                                <li><i className="fa fa-phone"></i> <span>+44 7488 8808 02</span></li>
                                <li><i className="fa fa-phone"></i> <span>+97150 401 7415</span></li>
                                <li><i className="fa fa-envelope-o"></i> <span>Info@hvamcoins.com</span></li>
                            </ul>
                            
                            <ul className="list-inline">
                                <li><a href="#"><i className="icon ion-social-facebook"></i></a></li>
                                <li><a href="#"><i className="icon ion-social-googleplus"></i></a></li>
                                <li><a href="#"><i className="icon ion-social-twitter"></i></a></li>
                                <li><a href="#"><i className="icon ion-social-instagram"></i></a></li>
                                <li><a href="#"><i className="icon ion-social-tumblr"></i></a></li>
                                <li><a href="#"><i className="icon ion-social-rss"></i></a></li>
                                <li><a href="#"><i className="icon ion-social-vimeo"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copy ">
                            {/* <!--Bitcoin is unstabe source of statics income over virtual world. <br>--> */}
                            All copyright Reserved to <span>HVAM DMCC</span> 2022</p>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- End Footer section    --> */}

        {/* <!-- Start Back To Top --> */}
        <a data-scroll id="back-to-top" href="#hero"><i className="icon ion-chevron-up"></i></a>
        {/* <!-- End Back To Top --> */}
    </>
  )
}

export default Footer