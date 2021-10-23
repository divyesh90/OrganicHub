import React from "react";
import "./MyCart.css";
import { ReactDOM } from "react";

export default function MyCart(props) {
  var totalprice = localStorage.getItem("totalprice");
  totalprice = parseInt(totalprice);

  const productplus = (id, sprice) => {
    let productItem = localStorage.getItem("productincart");
    productItem = JSON.parse(productItem);

    productItem[id].incart += 1;
    localStorage.setItem("productincart", JSON.stringify(productItem));

    totalprice += sprice;
    localStorage.setItem("totalprice", totalprice);
    var priceid = id + "price";
    document.getElementById(id).innerHTML = productItem[id].incart;
    document.getElementById(priceid).innerHTML =
      productItem[id].incart * sprice;
    document.getElementById("totalprice").innerHTML = totalprice;
    document.getElementById("finalprice").innerHTML = totalprice + 50;
  };

  const productminus = (id, sprice) => {
    let productItem = localStorage.getItem("productincart");
    productItem = JSON.parse(productItem);

    if (productItem[id].incart > 0) totalprice -= sprice;

    if (productItem[id].incart > 0) productItem[id].incart -= 1;

    localStorage.setItem("productincart", JSON.stringify(productItem));

    localStorage.setItem("totalprice", totalprice);
    var priceid = id + "price";
    document.getElementById(id).innerHTML = productItem[id].incart;
    document.getElementById(priceid).innerHTML =
      productItem[id].incart * sprice;
    document.getElementById("totalprice").innerHTML = totalprice;
    document.getElementById("finalprice").innerHTML = totalprice + 50;
  };

  const removeItem = (id, sprice) => {
    let productItem = localStorage.getItem("productincart");
    productItem = JSON.parse(productItem);

    totalprice -= sprice * productItem[id].incart;
    productItem[id].incart = 0;

    localStorage.setItem("productincart", JSON.stringify(productItem));
    localStorage.setItem("totalprice", totalprice);

    var productid = id + "product";

    var product = document.getElementById(productid);
    product.remove();
    document.getElementById("totalprice").innerHTML = totalprice;
    document.getElementById("finalprice").innerHTML = totalprice + 50;
  };

  const cartdata = () => {
    let cartItems = localStorage.getItem("productincart");
    cartItems = JSON.parse(cartItems);

    var num = 1000;

    if (cartItems != null) {
      return Object.values(cartItems).map((item) => {
        num++;
        var priceid = item.id + "price";
        var productid = item.id + "product";
        var path = "http://localhost:5000/uploads/" + item.pimg;
        return (
          <article id={productid} className="product">
            <header>
              <a className="remove">
                <img src={path} />

                <h3 onClick={() => removeItem(item.id, item.sprice)}>
                  Remove product
                </h3>
              </a>
            </header>

            <div className="content">
              <h1>{item.pname}</h1>

              <h1> ₹ {item.sprice} /Kg</h1>
            </div>

            <footer className="content">
              <span
                className="qt-minus"
                onClick={() => productminus(item.id, item.sprice)}
              >
                -
              </span>
              <span className="qt" id={item.id}>
                {" "}
                {item.incart}
              </span>
              <span
                className="qt-plus"
                onClick={() => productplus(item.id, item.sprice)}
              >
                +
              </span>
              <h2 className="full-price" id={priceid}>
                {" "}
                ₹{item.sprice}
              </h2>
            </footer>
          </article>
        );
      });
    } else {
      return <h1>Cart Empty</h1>;
    }
  };

  return (
    <div>
      <h1> {props.pname}</h1>

      <div className="container">
        <section id="cart">{cartdata()}</section>
      </div>

      <footer id="site-footer">
        <div className="container clearfix">
          <div className="left">
            <h2 className="subtotal">
              Subtotal: <span id="totalprice">₹{totalprice}</span>
            </h2>
            <h3 className="shipping">
              Shipping: <span>₹50</span>
            </h3>
          </div>

          <div className="right">
            <h1 className="total">
              Total: <span id="finalprice">₹{totalprice}</span>
            </h1>
            <a className="btn">Checkout</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
