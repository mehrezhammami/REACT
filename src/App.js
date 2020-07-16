import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
      <>
      <nav class="navbar navbar-expand-sm   navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown dmenu">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Our Service
          </a>
          <div class="dropdown-menu sm-menu">
            <a class="dropdown-item" href="#">service2</a>
            <a class="dropdown-item" href="#">service 2</a>
            <a class="dropdown-item" href="#">service 3</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Call</a>
        </li>
          {/* <li class="nav-item dropdown dmenu">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Dropdown link
          </a>
          <div class="dropdown-menu sm-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
            <a class="dropdown-item" href="#">Link 4</a>
            <a class="dropdown-item" href="#">Link 5</a>
            <a class="dropdown-item" href="#">Link 6</a>
          </div>
        </li> */}
        </ul>
        <div class="social-part">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
      <div class="container">
        <h1 class="my-4">Welcome to our Website</h1>
        <div class="row">
      
          <div class="col-md-8">
            <img class="img-fluid" src="image/logo lego.png" widht="750px" height="500px" alt=""/>
          </div>
      
          <div class="col-md-4">
            <h3 class="my-3">Fondateur :</h3>
            <p>Ole Kirk Christiansen</p>
            <h3 class="my-3">Création :</h3>
            <p>10 août 1932, Billund, Danemark </p>
            <h3 class="my-3">Siège social :</h3>
            <p>Billund, Danemark</p>
            <h3 class="my-3">PDG :</h3>
            <p>Niels Christiansen (1 oct. 2017–)</p>
            <h3 class="my-3">Organisation mère :</h3>
            <p>Kirkbi </p>
          </div>
      
        </div>
        <h3 class="my-4">Related Projects</h3>
      
        <div class="row">
      
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
                  <img class="img-fluid" src="image/project 1.png" alt=""/>
                </a>
          </div>
      
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
                  <img class="img-fluid" src="image/project 2.png" alt=""/>
                </a>
          </div>
      
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
                  <img class="img-fluid" src="image/project 3.png" alt=""/>
                </a>
          </div>
      
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
                  <img class="img-fluid" src="image/project 4.png" alt=""/>
                </a>
          </div>
      
        </div>
        
      
      </div>
      </>)

}

export default App;