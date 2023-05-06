import React from 'react';
import './Banner.css';




function Banner() {


  return (

<div>
    <div class="container-fluid banner" id="home">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-md">
            <div class="navbar-brand  Logo">Transylvania</div>
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#home" >Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Suites</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >Offers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >Dining & Drinks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >Amenities</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-8 offset-md-2 info">
          <h1 class="text-center">Hotel Transylvania</h1>
          <p class="text-center">
            Make The Moments you Never Foget. !
          </p>
          <a href="https:\\samsung.com" class="btn btn-md text-center"
            >BOOK NOW</a>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Banner;
