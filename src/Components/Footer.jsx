import React from 'react'
import tiktokw from "../assets/img/tiktikw.png"

const Footer = () => {
  return (
    <>
        {/* <!-- Start Footer section    --> */}
        <footer id="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4">
                        <div className="widget footer-widget">
                            <h4>{t('Footer.Foot_Title1')}</h4>
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
                            <h4>{t('Footer.Foot_Title2')}</h4>
                            
                            {/* <!-- Input Card --> */}
                            <div className="input-card mt-3">
                            <div className="input-card-form newsletter">
                                <input type="email" className="form-control newsletter-input" id="newsletter_email_footer" name="email" placeholder="Email Address" aria-label="Email Address" maxlength="99"/>
                            </div>
                            <button type="submit" name="submit" value="form" className="btn btn-warning newsletter-button">Subscribe</button>
                            </div>
                            {/* <!-- End Input Card --> */}
                            <div id="form_newsletter_response"></div>
                            <input type="hidden" name="sys_lang_id" value="1"/>
                            <ul>
                                <li><a href="#">&nbsp;</a></li>
                                <li>You can unsubscribe at any time</li>
                            </ul>	
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="widget news-widget">
                            <h4>{t('Footer.Foot_Title3')}</h4>
                            
                            <ul>
                                <li><a href="#">{t('Footer.Foot_Url1')}</a></li>
                                <li><a href="#">{t('Footer.Foot_Url2')}</a></li>
                                <li><a href="#">{t('Footer.Foot_Url3')}</a></li>
                                <li><a href="#">{t('Footer.Foot_Url4')}</a></li>
                                <li><a href="#">{t('Footer.Foot_Url5')}</a></li>
                                <li><a href="#">{t('Footer.Foot_Url6')}</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="widget contact-widget">
                            <h4>{t('Footer.Foot_Title4')}</h4>
                            
                            <ul className="footer-contact">
                                <li><i className="fa fa-map-marker"></i>{t('Footer.Foot_Address')}</li>
                                <li><i className="fa fa-phone"></i> <span>+44 7488 8808 02</span></li>
                                <li><i className="fa fa-envelope-o"></i> <span>infor@hvambit.com</span></li>
                            </ul>
                            
                            <ul className="list-inline">
                                <li><a href="https://www.facebook.com/hvamcoins"><i className="icon ion-social-facebook"></i></a></li>
                                <li><a href="https://twitter.com/HvamCoins"><i className="icon ion-social-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/hvambit/"><i className="icon ion-social-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/hvam-coins-a58307173/"><i className="icon ion-social-linkedin"></i></a></li>
                                <li><a href="http://www.tiktok.com/@hvambit"><img src={tiktokw} alt="" className="icon" style={{width: '10px', marginTop: '-3px'}} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copy ">{t('Footer.Foot_Copyright1')} <span>HVAMBIT</span> {t('Footer.Foot_Copyright2')}</p>
                            
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