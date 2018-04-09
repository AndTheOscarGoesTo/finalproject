import React, { Component } from 'react';
import { put } from '../../services/base';

class EditSocial extends Component {
    constructor(props) {
        super(props);

        this.state = {

            twitter: null,
            instagram: null,
            twitch: null,
            discord: null,
            youtube: null
        }
    }

    handleTwitterChange(twitter) {
        this.setState({ twitter });
    }

    handleInstagramChange(instagram) {
        this.setState({ instagram });
    }

    handleTwitchChange(twitch) {
        this.setState({ twitch });
    }

    handleDiscordChange(discord) {
        this.setState({ discord });
    }

    handleYoutubeChange(youtube) {
        this.setState({ youtube });
    }

    editSocialMedia(e) {

        e.preventDefault();

        put(
            `http://localhost:3000/api/social/${this.props.match.params.id}`, 
            {
                twitter: this.state.twitter,
                instagram: this.state.instagram,
                twitch: this.state.twitch,
                discord: this.state.discord,
                youtube: this.state.youtube
            }
        )
        .then(() => {
            this.props.history.push('/social');
        })
    }

    render() {
        return (
            <div>
                <input 
                    value={ this.state.twitter } 
                    onChange={ (event) => this.handleTwitterChange(event.target.value)}
                />
                <input 
                    value={ this.state.instagram } 
                    onChange={ (event) => this.handleInstagramChange(event.target.value)}
                />
                <input 
                    value={ this.state.twitch } 
                    onChange={ (event) => this.handleTwitchChange(event.target.value)}
                />
                <input 
                    value={ this.state.discord } 
                    onChange={ (event) => this.handleDiscordChange(event.target.value)}
                />
                <input 
                    value={ this.state.youtube } 
                    onChange={ (event) => this.handleYoutubeChange(event.target.value)}
                />
                <button onClick={ (e) => {this.editSocialMedia(e)} }>submit</button>
            </div>
        );
    }
}

export default EditSocial;