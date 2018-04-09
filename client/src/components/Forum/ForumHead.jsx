import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './Forum.scss'

class Forum extends Component {

    render() {
        return (
    
            
        
            <div className={ style.spaceCards } id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" className={ style.forumhead } src="http://cdn.makeuseof.com/wp-content/uploads/2017/06/xbox-one-x-s-670x335.jpg?x59455" alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
                <h5>This is one of the top 3 post</h5>
                <p>Top post content</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTYvMTAvcGRwX2ZlYXR1cmVfMDZfMTI4MC02NzB4MzM1XzI5OTYyNTE0NzY5NjgzNjQuanBn" alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                <h5>This is one of the top 3 post</h5>
                <p>Top post content</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://cdn.makeuseof.com/wp-content/uploads/2017/12/nintendo-switch-3ds-670x335.jpg" alt="Third slide" />
                <div class="carousel-caption d-none d-md-block">
                <h5>This is one of the top 3 post</h5>
                <p>Top post content</p>
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