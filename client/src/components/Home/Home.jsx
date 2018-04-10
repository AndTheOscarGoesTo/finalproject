import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import style from './Home.module.scss';
import { isLoggedIn, me } from '../../services/user';
import { get } from '../../services/base';

import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import ForumCarousel from '../ForumCarousel/ForumCarousel';
import NewUserForm from '../NewUser/NewUserForm';
import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import FriendsPanel from '../FriendsPanel/FriendsPanel';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            handle: '',
            firstname: '',
        }
    }
    componentDidMount(){
        if(isLoggedIn()){
            me()
            .then((res) => {
                this.setState({id: res.id, handle: res.handle, firstname: res.firstname});
            })
        }
    }
    render() {
        if(isLoggedIn()) {
            return (
                <Fragment>
                <LoggedBanner id={this.state.id} handle={this.state.handle} firstname={this.state.firstname} />
                <Post loggedId={this.state.id}/>
                <FriendsPanel loggedId={this.state.id} />
                </Fragment>
            )
        } 
        return (
            <Fragment>
            <UnloggedBanner />
                <div className={style.homeBody}>
                <div className={style.homeBanner}>
                </div>
                    <div className="col-sm-12" className={style.rightsquare}>
                        <h1>Join us.</h1>
                        <NewUserForm />
                    </div>
                </div>  
            </Fragment>
        )
    }
}

export default Home;