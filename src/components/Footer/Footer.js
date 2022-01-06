import React from 'react';
import './Footer.css'
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <div className='mt-5 pt-5  text-white footer'>
            <ScrollToTop smooth  top="500"/>
            <footer class="container">
                <div class="row g-5 text-center">
                    <div class="col-12 col-md-6 col-lg-3">
                        <h4 className=' fw-bold brandcolor'>SEOGram</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, repellendus eius blanditiis in iusto eligendi iure.</p>
                        <i class="fab fa-google fa-2x"></i>
                        <i class="fab fa-facebook fa-2x ms-2"></i>
                        <i class="fab fa-twitter fa-2x ms-2"></i>
                        <i class="fab fa-instagram fa-2x ms-2"></i>
                        <i class="fab fa-youtube fa-2x ms-2"></i>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <h4 className='text-info fw-bold'>Company</h4>
                        <p>About Us</p>
                        <p>Career</p>
                        <p>Advertise</p>
                        <p>Terms of Service</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <h4 className='text-primary fw-bold'>Contact Us</h4>
                        <address>
                            203 Fake St. Mountain View, San Francisco, California, USA
                            <br />
                            +00 1122 3344 5566
                            <br />
                            seogram@temporary.com
                        </address>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <h4 className='text-danger fw-bold'>NewsLetter</h4>
                        <p>Get updates, news or events on your mail.</p>
                        <input type="email" class="form-control" placeholder="Enter your email" />
                        <br />
                        <button type="button" class="btn buttoncolor text-light w-100">Subscribe</button>
                        <div>

                        </div>
                    </div>
                </div>
                <p class="text-center text-primary p-4">© copyrights 2022. All rights reserved by Salman</p>
            </footer>

        </div>
    );
};

export default Footer;