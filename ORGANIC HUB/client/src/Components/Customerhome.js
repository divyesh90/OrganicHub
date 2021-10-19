import React from "react";
import  { useState } from 'react'
import { useHistory } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";



export default function Customerhome( ) {
  
    return ( 
        
        <div>

        
        <link href="img/favicon.png" rel="icon"/>
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
       
    
        <div id="preloader" classNameName="preloader"></div>
        
        <div className="hero" id="hero" >
            <div className="hero-text">
              <h1>Welcome to ORGANIC HUB<span>.</span></h1>
              <h2>Eat Healthy Stay Healthy</h2>
            </div>
        </div>
        <div className="about" id="about">
            <div className="container">
                
                <div className="row">
                    <div className="content-section" data-aos="fade-up" data-aos-delay="100">
                        <div className="title">
                            <h1>About Us</h1>
                        </div>
                        <div className="content">
        
                                <h3>Organic store for you is now here</h3>
                                <p>Hello dear customer please support this website.</p>
                    
                                <p>This is just a basic organic store you can buy and sell your products here.
                                </p>
                            
                            <p>This is refrernce project</p>
                            <p>Our services are good and if there is any problm you can contact us</p>
                            
                            <div className="button">
                            <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="social">
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    
                    <div className="image-section" data-aos="fade-right" data-aos-delay="100">
                        <img src="img/about.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="product" id="product">
            <div className="container" data-aos="fade-up">
            <h2>Our Products</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="product-top">
                        <img src="img/p1.png" alt=""/>
                    </div>
                    <div className="overlay">
                        <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="fa fa-eye"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to WIsh-List"><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <div className="product-bottom ext-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o" ></i>
                         <i className="fa fa-star-o"></i>
                        <h3>Tomatoes</h3>
                        <h5>₹40/kg</h5>
                    </div>
                </div>
                
                
                <div className="col-lg-4 col-md-6">
             
                    <div className="product-top">
                        <img src="img/p4.png" alt=""/>
                    </div>
                    
                    <div className="overlay">
                        <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="fa fa-eye"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to WIsh-List"><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <div className="product-bottom ext-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star" ></i>
                         <i className="fa fa-star"></i>
                        <h3>Potatoes</h3>
                        <h5>₹20/kg</h5>
                    </div>
                
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="product-top">
                        <img src="img/p5.png" alt=""/>
                    </div>
                    <div className="overlay">
                        <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="fa fa-eye"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to WIsh-List"><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <div className="product-bottom ext-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star" ></i>
                         <i className="fa fa-star-o"></i>
                        <h3>Red Pepper</h3>
                        <h5>₹60/kg</h5>
                    </div>
                </div>
                
                
            </div>
            <div className="button">
                <a href="product_page.html">More Products</a>
            </div>
            </div>
        </div>
        
    </div>
    );
}