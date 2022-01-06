import React from 'react';
import './Price.css'

const Price = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className='text-center'>
                <h5 className='text-secondary'>PRICING PLAN</h5>
                <h2>Choose plan the right for you</h2>
                <div className="underline"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 pt-5">
                <div className="col col-lg-4 col-md-6" data-aos="fade-left"
                    data-aos-duration="1000">
                    <div className="card">
                        <div className="card-body">
                            <h5 className='fw-bold  text-secondary'>BASIC</h5>
                            <h3 className='fw-bold'><sup>$</sup>39</h3>
                            <h5>Per Month</h5>
                            <div className="border mb-4"></div>
                            <p>25 Analytics <span className='text-secondary'>Campaign</span></p>
                            <p>1,300 Change <span className='text-secondary'>Keywords</span></p>
                            <p>Social Media <span className='text-secondary'>Reviews</span></p>
                            <p>1 Free <span className='text-secondary'>Optimization</span></p>
                            <p>24/7  <span className='text-secondary'>Support</span></p>
                            <div className="border mb-4"></div>
                            <button type="button" className="btn buttoncolor text-light w-75">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="fade-left"
                    data-aos-duration="2000">
                    <div className="card text-light" style={{ backgroundColor: "rgb(97, 97, 238)" }}>
                        <div className="card-body">
                            <h5 className='fw-bold  text-light'>STANDARD</h5>
                            <h3 className='fw-bold'><sup>$</sup>59</h3>
                            <h5>Per Month</h5>
                            <div className="border mb-4"></div>
                            <p>30 Analytics <span className='text-light'>Campaign</span></p>
                            <p>1,500 Change <span className='text-light'>Keywords</span></p>
                            <p>Social Media <span className='text-secondary'>Reviews</span></p>
                            <p>3 Free <span className='text-secondary'>Optimization</span></p>
                            <p>24/7  <span className='text-secondary'>Support</span></p>
                            <div className="border mb-4"></div>
                            <button type="button" className="btn buttoncolor subscribebtn text-light w-75">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="fade-left"
                    data-aos-duration="2500">
                    <div className="card">
                        <div className="card-body">
                            <h5 className='fw-bold  text-secondary'>PROFESSIONAL</h5>
                            <h3 className='fw-bold'><sup>$</sup>100</h3>
                            <h5>Per Month</h5>
                            <div className="border mb-4"></div>
                            <p>40 Analytics <span className='text-secondary'>Campaign</span></p>
                            <p>2,000 Change <span className='text-secondary'>Keywords</span></p>
                            <p>Social Media <span className='text-secondary'>Reviews</span></p>
                            <p>10 Free <span className='text-secondary'>Optimization</span></p>
                            <p>24/7  <span className='text-secondary'>Support</span></p>
                            <div className="border mb-4"></div>
                            <button type="button" className="btn buttoncolor text-light w-75">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;