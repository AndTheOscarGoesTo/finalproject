import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import style from './Home.module.scss';
import { isLoggedIn, me } from '../../services/user';
import { get } from '../../services/base';

import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import LoggedBanner from '../LoggedBanner/LoggedBanner'


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
                this.setState({id: res.id, handle: res.handle, firstname: res.firstname})
            })
        }
    }
    render() {
        if(isLoggedIn()) {
            return (
                <Fragment>
                <LoggedBanner id={this.state.id} handle={this.state.handle} firstname={this.state.firstname} />
                <div>
                    <h1> double yeet </h1>
                </div>
                </Fragment>
            )
        } 
        return (
            <Fragment>
            <UnloggedBanner />
            <div className={style.leftsquare}>
                <h1> yeet </h1>
            </div>
            </Fragment>
        )
    }
}

export default Home;