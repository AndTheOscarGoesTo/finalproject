import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from '../auth/privateRoute';
import styles from "./ProfileCard.scss";
import ProfilePic from './ProfilePic';
import ProfileNav from './ProfileNav';
import ProfileViewPort from './ProfileViewPort'
import LoggedBanner from '../LoggedBanner/LoggedBanner';
<<<<<<< HEAD
=======
import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import { isLoggedIn, me } from '../../services/user';

>>>>>>> 9ddaed3f0efa04800554de9593462348881beca9
class Profile extends Component {

    render() {
        if(isLoggedIn()){
            return (
                <Fragment>
                    <LoggedBanner />
                        <div className={styles.linkContainer}>
                            <ProfilePic />
                        </div>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <UnloggedBanner />
                    <div className={styles.linkContainer}>
<<<<<<< HEAD
                        
                        
                        
                        <LoggedBanner />
=======
>>>>>>> 9ddaed3f0efa04800554de9593462348881beca9
                        <ProfilePic />
                    </div>
            </Fragment>
        )
    }
}

export default Profile;