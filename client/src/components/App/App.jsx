import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GoodbyeWorld from '../goodbye';
import PrivateRoute from '../auth/privateRoute';
import Login from '../auth/login';
import Logout from '../auth/logout';
import AuthButton from '../auth/authButton';
import styles from "./App.scss";
import Profile from '../Profile/Profile';
import Forum from '../Forum/Forum';
import Home from '../Home/Home';
import NewUser from '../NewUser/NewUser';
import Forumpage from '../Forumpage/Forumpage';
import PostForum from '../PostForum/PostForum';
import Social from '../socials/Social';
import EditSocial from '../socials/EditSocial';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/newuser" component={NewUser} />
                        <Route exact path="/profile/:id" render={routeProps => <Profile {...routeProps} yeet={'yeet'} />} />
                        {/* <Route exact path="/profile/:id" component={Profile} /> */}
                        <Route path="/forum" component={Forum} />
                        
                        <Route path="/forumpage" component={Forumpage} />
                        <Route path="/postforum" component={PostForum} />
                        <Route path="/social/:id" component={ Social } />
                        <Route path="/edit/:id" component={ EditSocial } />
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;