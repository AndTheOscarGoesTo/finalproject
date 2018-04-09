import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from "./ProfileCard.scss";
import ProfileNav from './ProfileNav';
import ProfileView from './ProfileView';
import ProfileViewPort from './ProfileViewPort';


class profilePanel extends Component {
    
    render() {
        return (
          <div className={`${styles.profilePanel}`}>
            <div className="profile-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png" alt="sample47" style={{width: '13em', height: '13em', borderRadius: '50%'}} />
            <h3>{this.props.firstname} {this.props.lastname} </h3>
            <h4> {this.props.handle} </h4>
            <Link to = "/add/social"><button>add</button></Link>
          </div>
        )
    }
}

export default profilePanel;