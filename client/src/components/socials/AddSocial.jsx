import React, { Component, Fragment } from 'react';
import { post } from '../../services/base';

import HomeNav from "../HomeNavBar/HomeNavBar";

class AddSocial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            twitter: '',
            instagram: '', 
            twitch: '',
            youtube: ''
        }
    }

    handleTwitterInsert(twitter) {
        this.setState({ twitter });
    }

    handleInstagramInsert(instagram) {
        this.setState({ instagram });
    }

    handleTwitchInsert(twitch) {
        this.setState({ twitch });
    }

    handleYoutubeInsert(youtube) {
        this.setState({ youtube });
    }

    addSocialMedia(e) {

        e.preventDefault();
        console.log(this.props.match.params.id);
        post(
            `http://localhost:3000/api/social/${this.props.match.params.id}`,
            {
                twitter: this.state.twitter,
                instagram: this.state.instagram,
                twitch: this.state.twitch,
                youtube: this.state.youtube
            }
        )

        .then(() => {
            alert('social media added');
            this.props.history.push('/');
        })
    }


    render() {
        return (
            <Fragment>
                <HomeNav />
                
                <input
                    placeholder="twitter" 
                    value={this.state.twitter} 
                    onChange={ (event) => {this.handleTwitterInsert(event.target.value)}}
                />
                <input
                    placeholder="instagram" 
                    value={this.state.instagram} 
                    onChange={ (event) => {this.handleInstagramInsert(event.target.value)}}
                />
                <input
                    placeholder="twitch" 
                    value={this.state.twitch} 
                    onChange={ (event) => {this.handleTwitchInsert(event.target.value)}}
                />
                <input
                    placeholder="youtube" 
                    value={this.state.youtube} 
                    onChange={ (event) => {this.handleYoutubeInsert(event.target.value)}}
                />
                <button onClick={ (e) => {this.addSocialMedia(e)} }>add</button>
            </Fragment>
        );
    }
}

export default AddSocial;