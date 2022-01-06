import React from 'react';
import blog1 from '../../img/blog/blog-1.jpg';
import blog2 from '../../img/blog/blog-2.jpg';
import blog3 from '../../img/blog/blog-3.jpg';
import blog4 from '../../img/blog/blog-4.jpg';
import blog5 from '../../img/blog/blog-5.jpg';
import blog6 from '../../img/blog/blog-6.jpg';

const Blog = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className='text-center'>
                <h5 className='text-secondary'>OUR BLOG</h5>
                <h2>Read Latest News</h2>
                <div className="underline"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 pt-5" >
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="1000">
                    <div className="card">
                        <img src={blog1} className="card-img-top" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start">What Is SEO?</h5>
                            <p className="card-text text-start text-secondary">Posted on 5 January 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="1250">
                    <div className="card">
                        <img src={blog2} className="card-img-top" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start">Search Engine Positioning</h5>
                            <p className="card-text text-start text-secondary">Posted on 1 January 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="1500">
                    <div className="card">
                        <img src={blog3} className="card-img-top" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start">SEO and SEM</h5>
                            <p className="card-text text-start text-secondary">Posted on 1 January 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="1000">
                    <div className="card">
                        <img src={blog4} className="card-img-top" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start">Search Engine Ranking</h5>
                            <p className="card-text text-start text-secondary">Posted on 2 January 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="1250">
                    <div className="card">
                        <img src={blog5} className="card-img-top" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start ">SEO Best Practices</h5>
                            <p className="card-text text-start text-secondary">Posted on 3 January 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="1500">
                    <div className="card">
                        <img src={blog6} className="card-img-top" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start">SEO Friendly Web Design</h5>
                            <p className="card-text text-start text-secondary">Posted on 4 January 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;