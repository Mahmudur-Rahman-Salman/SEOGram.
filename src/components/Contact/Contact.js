import React from 'react';

const Contact = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className='text-center'>
                <h2 className='text-secondary'>Contact Us</h2>
                <div className="underline"></div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6">
                    <div><i className="fas fa-map-pin fa-3x m-3"></i></div>
                    <h5>Address</h5>
                    <address>
                        203 Fake St. Mountain View, San Francisco, <br /> California, USA
                    </address>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div><i className="fas fa-phone fa-3x m-3"></i></div>
                    <h5>Phone</h5>
                    <p>+1 232 3235 324</p>
                    <p>+00 1122 3344 5566</p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div><i className="fas fa-envelope-open fa-3x m-3"></i></div>
                    <h5>Email Address</h5>
                    <p>support@seogram.com</p>
                    <p>hello@seogram.com</p>
                </div>
            </div>
            <div className='container mt-5'>
                <h2 className='text-secondary'>Get In Touch</h2>
                <div className="pt-5">
                    <input type="text" className="form-control w-50 m-auto" placeholder="First name" aria-label="First name" />
                    <br />
                    <input type="text" className="form-control w-50 m-auto" placeholder="Last name" aria-label="Last name" />
                    <br />
                    <input type="email" className="form-control w-50 m-auto" placeholder='Email'></input>
                    <br />
                    <textarea className="form-control w-50 m-auto" placeholder='Subject' rows="2"></textarea>
                    <br />
                    <textarea className="form-control w-50 m-auto" placeholder='Message' rows="4"></textarea>
                    <br />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;