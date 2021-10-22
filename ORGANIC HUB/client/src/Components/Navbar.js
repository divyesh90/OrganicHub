import React from "react";
import  { useState } from 'react'
import { useHistory } from "react-router";
import "./Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Navbar( props) {

  const history = useHistory();

  return ( 

    <>

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            src="./logo.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          <span className="navbar-brand mb-0 h1">Organic Hub</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-3  mb-lg-1">
            <li className="nav-item ">
              <a className="nav-link"  aria-current="page" onClick={()=> history.push("/farmer")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=> history.push("products")}>
                Selling
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#benefits">
                  Benefits
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div class="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={()=> history.push("login")}>
                {props.login}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={ () => history.push("signup")}>
                  {props.logout}
                </a>
              </li>
            </div>
        </div>
      </div>
    </nav>
    </>
  );
}
