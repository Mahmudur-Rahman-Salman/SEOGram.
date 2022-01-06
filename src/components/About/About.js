import React from 'react';
import aboutframe from "../../img/about_frame.png"
import './About.css'
import { Typewriter } from 'react-simple-typewriter'



const About = () => {
    return (
        <div className='container mt-5 pt-5'>

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className='m-3'>
                        <h5 className='text-center text-secondary'>About Us</h5>
                        <h2 className='fw-bold text-center '>
                            <span style={{ color: 'secondary', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={["The number #1 SEO Service Company"]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h2>
                        <div className="underline"></div>
                        <p className='text-center lh-lg pt-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <p className='text-center lh-lg'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                        <button type="button" className="btn buttoncolor text-light rounded-pill m-2 p-2 " data-aos="zoom-in" data-aos-duration="1500">Read More</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src={aboutframe} alt="frame" className='w-75' />
                </div>
            </div>

        </div>
    );
};

export default About;