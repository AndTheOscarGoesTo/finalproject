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
                    <div>
                        <h1>Louiji </h1>
                        
                        <Link to="/goodbye">Goodbye</Link>
                       
                    </div>
                    
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/newuser" component={NewUser} />
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;