import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from "./ProfileCard.scss";
import ProfileNav from './ProfileNav';
import ProfileView from './ProfileView';
import ProfileViewPort from './ProfileViewPort';

class ProfilePic extends Component {

    render() {
        return (
            <figure className="snip">
            <div className="profile-image"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png" alt="sample47" /></div>
            <figcaption>
              <h3>John Cena</h3>
             <ProfileView />
              <p>Your time is up, my time is now
                You can't see me, my time is now.
                Its the franchise, Boy, I'm shining now.
                You can't see me, my time is now.
                </p>
                
              <div className="icons">
              <a href="#"><i className="ion-social-reddit"></i></a>
                <a href="#"> <i className="ion-social-twitter"></i></a>
                <a href="#"> <i className="ion-social-vimeo"></i></a>
                <a href="#"> <i className="ion-social-instagram"></i></a>
                <a href="#"> <i className="ion-social-snapchat"></i></a>
                <a href="#"> <i className="ion-social-facebook"></i></a>
                <a href="#"> <i className="ion-social-twitch-outline"></i></a>
                <a href="#"> <i className="ion-social-youtube"></i></a>
                <a href="#"> <i className="ion-social-tumblr"></i></a>
              </div>
              <ProfileNav />
            </figcaption>
            <ProfileViewPort />
          </figure>
          
            

         
        )
    }
}

export default ProfilePic;