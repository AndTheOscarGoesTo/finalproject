import React, { Component } from 'react';
import { put } from '../../services/base';
import style from './social.module.scss';
import Particles from 'react-particles-js';

class EditSocial extends Component {
    constructor(props) {
        super(props);

        this.state = {

            twitter: null,
            instagram: null,
            twitch: null,
            youtube: null,
            avatar: null,
            handle: null
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

    handleYoutubeChange(youtube) {
        this.setState({ youtube });
    }

    handleAvatarChange(avatar) {
        this.setState({ avatar });
    }

    handleNameChange(handle) {
        this.setState({ handle });
    }

    editUserInfo(e) {

        e.preventDefault();

        put(
            `http://localhost:3000/api/users/${this.props.match.params.id}`,
            {
                avatar: this.state.avatar,
                handle: this.state.handle
            }
        )
        .then(() => {
            this.props.history.push('/')
        })
    }

    editSocialMedia(e) {

        e.preventDefault();

        put(
            `http://localhost:3000/api/social/${this.props.match.params.id}`, 
            {
                twitter: this.state.twitter,
                instagram: this.state.instagram,
                twitch: this.state.twitch,
                youtube: this.state.youtube
            }
        )
        .then(() => {
            this.props.history.push('/');
        })
    }

    render() {
        return (
            <div className={ style.bodyTwo }>
                <div className={ style.sm }>
                    <div>
                        <input 
                            className={ style.twitterTwo }
                            placeholder="twitter"
                            value={ this.state.twitter } 
                            onChange={ (event) => this.handleTwitterChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                            className={ style.instagramTwo }
                            placeholder="instagram"
                            value={ this.state.instagram } 
                            onChange={ (event) => this.handleInstagramChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                            className={ style.twitchTwo }
                            placeholder="twitch" 
                            value={ this.state.twitch } 
                            onChange={ (event) => this.handleTwitchChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                            className={ style.youtubeTwo }
                            placeholder="youtube"
                            value={ this.state.youtube } 
                            onChange={ (event) => this.handleYoutubeChange(event.target.value)}
                        />
                    </div>
                    <button onClick={ (e) => {this.editSocialMedia(e)} }>update social media</button>
                </div>
                <div>
                    <input 
                        className={ style.avatar }
                        placeholder="avatar" 
                        value={ this.state.avatar } 
                        onChange={ (event) => this.handleAvatarChange(event.target.value)}
                    />
                    <input
                        className={ style.handle } 
                        placeholder="handle" 
                        value={ this.state.handle } 
                        onChange={ (event) => this.handleNameChange(event.target.value)}
                    />
                    <button onClick={ (e) => {this.editUserInfo(e)} }>update user info</button>
                </div>
                <Particles 
                    className={style.bg} 
                    width="100%" height="100%" 
                    params={ {
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "whitesmoke",
                                    blur: 5,
                                }
                            },
                            number: {
                                value: 100,
                                density: {
                                    enable: true,
                                    value_area: 1200
                                }
                            }
                        }
                    } } 
                />
            </div>
        );
    }
}

export default EditSocial;