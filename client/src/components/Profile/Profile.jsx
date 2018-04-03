import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from '../auth/privateRoute';
import styles from "./ProfileCard.scss";
import ProfilePic from './ProfilePic';
import ProfileNav from './ProfileNav';
import ProfileViewPort from './ProfileViewPort'
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import { isLoggedIn, me } from '../../services/user';
import { get } from '../../services/base';


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            loggedId: '',
            handle: '',
            firstname: '',
            lastname: '',
        }
    }
    componentDidMount(){
        get(`http://localhost:3000/api/users/${this.props.match.params.id}`)
        .then(res => this.setState( {id: res.id, firstname: res.firstname, lastname: res.lastname, handle: res.handle} ))
        
    }
    addFriend(){
        post('http://localhost:3000/api/relationships', {
            user_one_id: this.state.loggedId,
            user_two_id: this.state.id,
            status_interaction: 0,
        })
    }
    render() {
        if(isLoggedIn()){
            me()
            .then(res => this.setState( {loggedId: res.id} ))
            if(this.state.loggedId === this.state.id) {
                return (
                    <Fragment>
                        <LoggedBanner />
                            <div className={styles.linkContainer}>
                                <ProfilePic id={this.state.id} firstname={this.state.firstname} lastname={this.state.lastname}/>
                            </div>
                    </Fragment>
                )
            }else{
                return(
                    <Fragment>
                        <LoggedBanner />
                            <button onClick={ () => { this.addFriend(posts.id) } }>ADD FRIEND</button>
                            <div className={styles.linkContainer}>
                                <ProfilePic id={this.state.id} firstname={this.state.firstname} lastname={this.state.lastname}/>
                            </div>
                    </Fragment>
                )
            }
        } else {
            return (
                <Fragment>
                    <UnloggedBanner />
                        <div className={styles.linkContainer}>
                            <ProfilePic />
                        </div>
                </Fragment>
            )
        }
    }
}

export default Profile;