import React from 'react';
import banner1 from "../../img/banner_image_1.svg"
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
    return (
        <div className='container bg-light mt-5 pt-5 border rounded-3'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className='fw-bold'>
                        <span style={{ color: 'secondary', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={["Let's Check and Optimize your website!"]}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='pt-2'>Ignite the most powerfull growth engine you have ever<br />built for your company</p>
                    <button type="button" class="btn buttoncolor text-light rounded-pill">Watch Video<i className="fas fa-play m-2"></i></button>

                </div>
                <div className="col-md-6" data-aos="fade-down" data-aos-duration="2000">
                    <img src={banner1} alt="banner" className='w-75 p-3' />
                </div>
            </div>
        </div>
    );
};

export default Banner;