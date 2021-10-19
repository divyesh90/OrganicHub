import React from "react";
import './FarmerHome.css'
import  { useState } from 'react'
import { useHistory } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function FarmerHome( ) {

    const history = useHistory();
  
    return ( 
        <div>
        <main>

        <div className="home-image">
            <div className="slideshow-container">

                <div className="mySlides fade">
                    {/* <!-- <div className="numbertext">1 / 3</div> --> */}
                    <img className="center" src={"./img/farmer1.jpg"}/>
                    {/* <!-- <div className="text">Caption Text</div> --> */}
                </div>

                <div className="mySlides fade">
                    {/* <!-- <div className="numbertext">2 / 3</div> --> */}
                    <img className="center" src={"./img/farmer2.jpg"}/>
                    {/* <!-- <div className="text">Caption Two</div> --> */}
                </div>

                <div className="mySlides fade">
                    {/* <div className="numbertext">2 / 3</div>  */}
                    <img className="center" src={"./img/farmer3.jpg}"}/>
                    {/* <!-- <div className="text">Caption Two</div> --> */}
                </div>

                <div className="mySlides fade">
                    {/* <!-- <div className="numbertext">2 / 3</div> --> */}
                    <img className="center" src={"./img/farmer1.jpg"}/>
                    {/* <!-- <div className="text">Caption Two</div> --> */}
                </div>



                

            </div>
            
            <br/>

            
        </div>
        


       



        <div className="row" id="row1">
            <div className="column">
                <h1>Start Your Own <a>Business</a></h1>
                <p> Sell More | Earn More </p>

                <h4> Many Farmer Sell their crops with us from all Over the india you can Sell your Product from all
                    over the india.</h4>

                <input type="button"  className="start" value="Start Selling" onClick={()=> history.push("products")} />

            </div>
            <div className="column">
                <img className="round_image" src={"./img/all.png"}/>
            </div>
        </div>









        <div className="products" id="products11">

            <h1 align="center">Types Of <a>Products</a></h1>
                    
            
            <div className="row" >
                <div className="column">
                    <h1> <a>Grains</a></h1>
                    <h4> Overall the study's results point to organic grains having higher nutritional contents then their conventional counterparts and then breads made with those grains are also more nutrient dense with fewer additives. defenses, which can help increase their antioxidant content.</h4>

                    {/* <!-- <input type="button"  className="start" value="Start Selling"> --> */}

                </div>
                <div className="column">
                    <img className="round_image" src={'./img/grains.png'}/>
                </div>
            </div>


            <div className="row" >
                <div className="column">
                    
                    <img className="round_image" src={"./img/beans12.png"}/>

                </div>
                <div className="column">
                    <h1> <a>Beans</a></h1>
                    <h4> Beans and legumes are rich in plant protein, fiber, B-vitamins, iron, folate, calcium, potassium, phosphorus, and zinc. Most beans are also low in fat. Legumes are similar to meat in nutrients, but with lower iron levels and no saturated fats.</h4>

                    {/* <!-- <input type="button"  className="start" value="Start Selling"> --> */}
                    
                </div>
            </div>


            <div className="row" >
                <div className="column">
                    <h1> <a>Dry Fruits</a></h1>
                    <h4> These dry fruits are rich in vitamins and proteins,they also boost immunity and prevent lifestyle diseases such as cholesterol and diabetes. Most dry fruits are rich in minerals, proteins, fibre and vitamins add to that they are tasty and delicious too. Dry fruits are excellent and healthy substitute for daily snacks.</h4>

                    {/* <!-- <input type="button"  className="start" value="Start Selling"> --> */}

                </div>
                <div className="column">
                <img className="round_image" src={"./img/dry_fruits.png"}/>
                </div>
            </div>


            <div className="row" >
                <div className="column">
                    
                    <img className="round_image" src={"./img/spices.png"}/>

                </div>
                <div className="column">
                    <h1> <a>Spices</a></h1>
                    <h4> 
                        Organic herbs and spices are not irradiated, are not grown with pesticides, genetically engineered ingredients (GMOs), and do not contain synthetic caking agents and chemical additives. You can rest assured that they are held to the highest standards from seed to plate.</h4>

                    {/* <!-- <input type="button"  className="start" value="Start Selling"> --> */}
                    
                </div>
            </div>

            <h1 align="center">Many <a>More...</a></h1><br/>
            

        </div>







        {/* <div className="benefits" id="benefits">
            <br/>
            <h1 align="center"> Benefits With <a>Organic Hub </a></h1>
                    
            <div className="row" >
                <div className="column_ic">
                    
                    <img className="icone_image" src={"./img/low-price.png"}/>

                </div>
                <div className="column_text">
                    <h1>LOWER <a> SET UP & RUNNING COSTS </a> THAN AN OFFLINE BUSINESSES </h1>
                    <h4> The comparatively low cost of online business makes it an attractive option for start-ups. Overall, online business is much simpler and less expensive, and you'll have a lot less to lose with an online business that fails compared with running the same business as an offline venture.</h4>

                    
                    
                </div>
            </div>



            <div className="row" >
                <div className="column_text">
                    <h1> THE BUSINESS CAN BE OPERATED FROM <a> ANYWHERE </a></h1>
                    <h4> The comparatively low cost of online business makes it an attractive option for start-ups. Overall, online business is much simpler and less expensive, and you'll have a lot less to lose with an online business that fails compared with running the same business as an offline venture.</h4>

                    

                </div>
                <div className="column_ic">
                    <img className="icone_image" src={"./img/world.png"}/>
                </div>
            </div>


            <div className="row" >
                <div className="column_ic">
                    
                    <img className="icone_image" src={"./img/timesheet.jpg"}/>

                </div>
                <div className="column_text">
                    <h1> <a> LESS </a> TIME INTENSIVE</h1>
                    <h4> The comparatively low cost of online business makes it an attractive option for start-ups. Overall, online business is much simpler and less expensive, and you'll have a lot less to lose with an online business that fails compared with running the same business as an offline venture.</h4>

                    
                </div>
            </div>



            <div className="row" >
                <div className="column_text">
                    <h1> <a> MORE MEASURABLE </a> THAN OTHER SALES APPROACHES ANYWHERE </h1>
                    <h4> The comparatively low cost of online business makes it an attractive option for start-ups. Overall, online business is much simpler and less expensive, and you'll have a lot less to lose with an online business that fails compared with running the same business as an offline venture.</h4>

                    

                </div>
                <div className="column_ic">
                    <img className="icone_image" src={"./img/analysis_ic.png"}/>
                </div>
            </div>


        </div>  */}








        <div class="benefits" id="benefits">
            <br/>
            <h1 align="center"> Benefits With <a>Organic Hub </a></h1>
                    
            <div class="row" >
                <div className="column_ic">
                    
                    <img class="icone_image" src={"./img/low-price.png"}/>
    
                </div>
                <div class="column_text">
                    <h1>LOWER <a> SET UP & RUNNING COSTS </a> THAN AN OFFLINE BUSINESSES </h1>
                    <h4> The comparatively low cost of online business makes it an attractive option for start-ups. Overall, online business is much simpler and less expensive, and you'll have a lot less to lose with an online business that fails compared with running the same business as an offline venture.</h4>
    
                    
                    
                </div>
            </div>



            <div className="row" >
                <div className="column_text">
                    <h1> THE BUSINESS CAN BE OPERATED FROM <a> ANYWHERE </a></h1>
                    <h4> The comparatively low cost of online business makes it an attractive option for start-ups. Overall, online business is much simpler and less expensive, and you'll have a lot less to lose with an online business that fails compared with running the same business as an offline venture.</h4>

    
                </div>
                <div class="column_ic">
                    <img class="icone_image" src={"./img/world.png"}/>
                </div>
            </div>


            <div className="row" >
                <div className="column_ic">
                    
                    <img class="icone_image" src={"./img/timesheet.jpg"}/>
    
                </div>
                <div class="column_text">
                    <h1> <a> LESS </a> TIME INTENSIVE</h1>
                    <h4> The comparatively low cost of online business makes it an attractive option for start-ups. Overall, online business is much simpler and less expensive, and you'll have a lot less to lose with an online business that fails compared with running the same business as an offline venture.</h4>
    
                    
                    
                </div>
            </div>



            <div className="row" >
                <div className="column_text">
                    <h1> <a> MORE MEASURABLE </a> THAN OTHER SALES APPROACHES ANYWHERE </h1>
                    <h4> The comparatively low cost of online business makes it an attractive option for start-ups. Overall, online business is much simpler and less expensive, and you'll have a lot less to lose with an online business that fails compared with running the same business as an offline venture.</h4>
    
                    
    
                </div>
                <div className="column_ic">
                    <img className="icone_image" src={"./img/analysis_ic.png"}/>
                </div>
            </div> 
            </div>

       





        </main>
        </div>
);
            var slideIndex = 1;
            showSlides(slideIndex);

            function plusSlides(n) {
                showSlides(slideIndex += n)
            }

            function currentSlide(n) {
                showSlides(slideIndex = n)
            }

            function showSlides(n)
            {

                var i
                var slides = document.getElementsByclassNameName("mySlides");
                var dots = document.getElementsByclassNameName("dot");

                if (n > slides.length) 
                    { slideIndex = 1 }
                if (n < 1) 
                    { slideIndex = slides.length }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].classNameName = dots[i].classNameName.replace(" active", "")

                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].classNameName += " active";
            } 


             window.onscroll = function () { myFunction() };

            var navbar = document.getElementById("navbar");
            var sticky = navbar.offsetTop;

            function myFunction() 
            {
                if(window.pageYOffset >= sticky) {
                    navbar.classNameList.add("sticky")
                } else {
                    navbar.classNameList.remove("sticky");
                }
            } 


}
  