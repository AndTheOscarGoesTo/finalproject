import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from '../auth/privateRoute';
import styles from "./ProfileCard.scss";
import ProfilePanel from './ProfileTop';
import UserPosts from './UserPosts/UserPosts';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import { isLoggedIn, me } from '../../services/user';
import { get, post } from '../../services/base';



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            loggedId: '',
            handle: '',
            firstname: '',
            lastname: '',
            avatar: '',
        }
    }
    componentDidMount(){
        get(`http://localhost:3000/api/users/${this.props.match.params.id}`)
        .then(res => this.setState( {id: res.id, firstname: res.firstname, lastname: res.lastname, handle: res.handle, avatar: res.avatar} ))
        this.defaultAvi();
        me()
            .then(res => this.setState( {loggedId: res.id} ))
    }
    addFriend(){
        post('http://localhost:3000/api/relationships', {
            user_one_id: this.state.loggedId,
            user_two_id: this.state.id,
            status_interaction: 0,
        })
    }
    defaultAvi(){
        if(this.state.avatar === null) {
            this.setState({avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png'})
        }
    }
    render() {
        if(isLoggedIn()){
            if(this.state.loggedId === this.state.id) {
                console.log('this is ur acc')
                return (
                    <Fragment>
                        <LoggedBanner />
                            <div className={`${styles.banner}`} style={{width: '100%', height: '30em'}}></div>
                            <div className={styles.wrapper}>
                                <ProfilePanel id={this.state.id} firstname={this.state.firstname} lastname={this.state.lastname} handle={this.state.handle} loggedAccount={true} avatar={this.state.avatar}/>
                                <UserPosts />
                            </div>
                    </Fragment>
                )
            }else{
                return(
                    <Fragment>
                        <LoggedBanner />
                        <div className={styles.banner} style={{width: '100%', height: '30em'}}></div>
                            <button onClick={ () => { this.addFriend() } }>ADD FRIEND</button>
                            <div className={styles.wrapper}>
                                <ProfilePanel id={this.state.id} firstname={this.state.firstname} lastname={this.state.lastname}/>
                                <UserPosts />
                            </div>
                    </Fragment>
                )
            }
        } else {
            return (
                <Fragment>
                    <UnloggedBanner />
                        <div className={styles.banner} style={{width: '100%', height: '30em'}}></div>
                        <div className={styles.wrapper}>
                            <ProfilePanel />
                            <UserPosts />
                        </div>
                </Fragment>
            )
        }
    }
}

export default Profile;