import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import style from './social.module.scss';
import Particles from 'react-particles-js';

function SocialLayout(props) {
    return (
        <ListGroup className={ style.socialTable }>
        <h1 className={ style.headingSocial }>follow me</h1>
            <ListGroupItem className={ style.spacingTwitter }><i className="ion-social-twitter"></i> { props.social.twitter }</ListGroupItem>
            <ListGroupItem className={ style.spacingInsta }><i className="ion-social-instagram-outline"></i> { props.social.instagram }</ListGroupItem>
            <ListGroupItem className={ style.spacingTwitch }><i className="ion-social-twitch"></i> { props.social.twitch }</ListGroupItem>
            <ListGroupItem className={ style.spacingTube }><i className="ion-social-youtube"></i> { props.social.youtube }</ListGroupItem>
            <Particles 
                className={style.bgtwo} 
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
        </ListGroup>
        );
}


export default SocialLayout;