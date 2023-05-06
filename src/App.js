import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'
import logo from './img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Slideshow from './Slideshow.js';
import Offers from './offers.js';
import Banner from './Banner';


function App() {

  const openSuite = () => {
    window.open('./Slideshow.js');
  };


  return (


    <div>
    <header>

    <Banner/>

    </header>

    <Slideshow/>

    <Offers/>

    <div id="showcase-container"> 

    <div id="showcase">
      <div class="container">
        <div class="showcase-content">
          <h1><span class="text-primary">Enjoy</span> Your Stay</h1>
          <p class="lead">This hotel is a perfect destination to spend your vacations and enjoy with your family and relatives.</p>
          <div class="btn"><a href="">About Our Hotel</a></div>
        </div>
      </div>
    </div>


  <section id="home-info" class="bg-dark">
    <div class="info-img"></div>
    <div class="info-content">
      <h2><span class="text-primary">The History</span> Of Our Hotel</h2>
      <p>
          The Hotel Transylvania is built in 1951 by chief Architect Khaliq-ur-Rehman,Abdul Rehman Badar and Malik Abdul Rehman.This hotel have got historical importance as the design of hotel follows the Mughal Empire architecture and legacy.This hotel is also a symbol of cultural heritage to inspire the tourist and give them a sweet aroma of history.
      </p>
      <a href="" class="btn btn-light">Read More</a>
    </div>
  </section>
  </div>
 


    

    {/* <nav id="navbar">
      <div class="container">
        <h1 class="logo"><img src={logo} alt="no image load" style={{ width: '30%', height: '30%' }} class="logoimg"></img><a href="index.html">Transylvania</a></h1>
        <ul>
          <li><a class="current" href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </nav> */}

<section id="features">
    <div class="box bg-light">
    <FontAwesomeIcon icon={faHotel} size="3x" />
      <h3>Great Location</h3>
      <p>The hotel occupied beautiful natural scenary along with sea view and hills.</p>
    </div>
    <div class="box bg-primary">
    <FontAwesomeIcon icon={faUtensils} size="3x" />
        <h3>Free Meals</h3>
        <p>The meal is free for every customer and vistors and  it is also very delicious and yummy with a lot variety includes chinees,continental,italian and desi as well.</p>
    </div>
    <div class="box bg-light">
    <FontAwesomeIcon icon={faDumbbell} size="3x" />
        <h3>Fitness Room</h3>
        <p>Th hotel also have a well maintained gym consist of modern gymnism machines along with swimming pool as well.</p>
    </div>
  </section>

   
  <div class="clr"></div>

  <footer id="main-footer" class="main-footer">
    <p>Transylvania &copy; 2023</p>
  </footer>
        
        
        {/* <section id='main'>
        <div id='contact'>
        <h2><span class="text-primary">Contact</span> Us</h2>
              <p>Please fill out the form below to contact us</p>
              <form action="#">
                      <label for="name">Name</label>
                      <input type="text" name="name" id="name" />
                      <label for="email">Email</label>
                      <input type="email" name="email" id="email" />
                      <label for="message">Message</label>
                      <textarea name="message" id="message"></textarea>
                  <button type="submit" class="btn">Submit</button>
              </form>
        </div>
        </section>
        <footer>
          <p>Copyright © 2023 Hotel Transylvania</p>
        </footer> */}
      </div> 


  );
}

export default App;