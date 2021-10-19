import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './shopping.css'
import axios from "axios"



export default function Shopping({setCartItems}) {




    const history = useHistory();

    const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:5000/cproducts" )
    .then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;


 




  const renderProduct= () => {
      var num=0;
    return post.map(user => {

        num++;
        var path="http://localhost:5000/uploads/"+user.pimg;
        
      return (
          <>
        
        <div className="col-lg-4 col-md-6">
              <div className="product-top">
                <img src={path}  />
              </div>
              {/* <button key={user._id} onClick={()=> addtocart(user._id,user.pname,user.price, user.sellprice)} ><h5>add to cart </h5></button> */}
              
              <div className="icon_cart">
                        <button type="button" className="icon" title="Quick Shop"><i className="fa fa-eye"></i></button>
                        <button type="button"  className="icon" title="Add to WIsh-List"><i className="fa fa-heart-o"></i></button>
                        <button type="button"  className="icon" title="Add to Cart"  key={user._id} onClick={()=> addtocart(user._id,user.pname,user.price, user.sellprice,user.pimg)} ><i className="fa fa-shopping-cart"></i></button>
                    </div>


              <div className="product-bottom ext-center">
                
                <h3>{user.pname}</h3>
                <h5>{user.sellprice}/kg</h5>
              </div>
          </div>
            </>
      )
    })


  }

    
    function addtocart(pid, pname,price,sprice,pimg)
    {
      console.log(pimg)
      var productsNum = localStorage.getItem('cartNumber');
      var pNum = parseInt(productsNum);
    
      if(pNum ){
        localStorage.setItem('cartNumber' , pNum+1 );
  
      }
      else{
        localStorage.setItem('cartNumber', 1)
  
      }

      var CartProduct={
          id: pid,
          pname: pname,
          price: price,
          sprice: sprice,
          incart: 0,
          pimg: pimg,
        }
      
      post.map( product =>{

        if(product._id == pid)
        {
          console.log(CartProduct.incart)
          setCartItems(pname)
         
          setItem(CartProduct)
          totalprice(CartProduct)
        }
      })
    

    }

    function setItem(cartproduct){

      let cartItems = localStorage.getItem('productincart');
      cartItems = JSON.parse(cartItems);
      
      console.log(cartItems);

      if(cartItems != null ){


        if(cartItems[cartproduct.id] == undefined)
        {
          cartItems={
            ...cartItems,
            [cartproduct.id]: cartproduct,
          }
        }

        cartItems[cartproduct.id].incart+= 1;
        console.log(cartItems[cartproduct.id].incart)
        localStorage.setItem('productincart' , JSON.stringify(cartItems))  
      }
      else{
        cartproduct.incart = 1;
        cartItems={
          [cartproduct.id]: cartproduct
        }
       
      }

      localStorage.setItem('productincart' , JSON.stringify(cartItems))


    }

    function totalprice( cartproduct){

      var tprice = localStorage.getItem('totalprice');
      var tprice = parseInt(tprice);
    
      if(tprice >= 0){
        
        localStorage.setItem('totalprice' , tprice + cartproduct.sprice );
  
      }
      else{
        localStorage.setItem('totalprice', cartproduct.sprice)
  
      }



    }


 


  return (
    <div>
      <link href="img/favicon.png" rel="icon" />
      <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="product" id="product">
        <div className="container" data-aos="fade-up">
          <h2>Our Products</h2>
          <div className="row">
            
            {renderProduct()}

            </div>
          <div className="button">
            <a className="shopping">More Products</a>
          </div>
        </div>
      </div>
    </div>
  );
}
