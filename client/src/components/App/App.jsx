import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GoodbyeWorld from '../goodbye';
import PrivateRoute from '../auth/privateRoute';
import Login from '../auth/login';
import Logout from '../auth/logout';
import AuthButton from '../auth/authButton';
import styles from "./App.scss";
import Profile from '../Profile/Profile'
import Forum from '../Forum/Forum';
import Home from '../Home/Home';
import NewUser from '../NewUser/NewUser';

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
                        <Route path="/profile" component={Profile} />
<<<<<<< HEAD
                        <Route path="/forum" component={Forum} />
=======
>>>>>>> 9ddaed3f0efa04800554de9593462348881beca9
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;