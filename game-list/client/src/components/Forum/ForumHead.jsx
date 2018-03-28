import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './Forum.scss'

class Forum extends Component {

    render() {
        return (
    
            
        
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Siemens-PC-D.jpg/1200px-Siemens-PC-D.jpg" alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
                <h5>PC Catagory</h5>
                <p>Check what the master race is up to</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://i.ytimg.com/vi/_0elt4qOnEI/maxresdefault.jpg" alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                <h5>XBOX/PS4 Catagory</h5>
                <p>These games are probably really good or bad</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://cdn.makeuseof.com/wp-content/uploads/2017/12/nintendo-switch-3ds-670x335.jpg" alt="Third slide" />
                <div class="carousel-caption d-none d-md-block">
                <h5>nintendo Catagory</h5>
                <p>smash bros and zelda</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
       
         
        )
    }
}

export default Forum;