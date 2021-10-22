import React from "react";
import  { useState } from 'react'
import { useHistory } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Customerhome.css";

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
            <img className="home_image" src={"./img/Organic-Store.png"}/>
        </div>

        <div className="row" id="row1">
            <div className="column">
                <h1>Welcome to ORGANIC HUB</h1>
                <p>Eat Healthy Stay Healthy </p>

                <h4> Organic store for you is now here</h4>
                <h4>Hello Dear Customers Buy Pure Organic Products Online</h4>

                <input type="button"  className="start" value="Start Selling" />

            </div>
            <div className="column">
                <img className="s_image" src={"./img/15909189458184.png"}/>
            </div>
        </div>
       


        <div className="row" >
                <div className="column">
                    
                    <img className="s_image" src={"./img/s_images2.jpg"}/>

                </div>
                <div className="column">
                <h4>Organic food has higher nutritional content than chemical-rich foods. </h4><h4>They contain more vitamins and minerals.</h4><h4> The nutrients present in organic food can be beneficial in preventing dangerous diseases like heart diseases, blood pressure problems, migraine, diabetes and cancer.</h4>
                </div>
            </div>

        
        
    </div>
    );
}