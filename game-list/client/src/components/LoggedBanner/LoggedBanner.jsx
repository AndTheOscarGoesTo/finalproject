import React, { Component } from 'react';
import { render } from 'react-dom';
import style from './LoggedBanner.module.scss';
import { Link } from 'react-router-dom';

import AuthButton from '../auth/authButton';

class LoggedBanner extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={style.logged_out_banner}>
                <div className={style.logged_out_content}>
                    <nav className={`navbar navbar-expand-sm`}>
                        <div class="navbar-header">
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/" className={`navbar-brand ${style.logo}`}> vidya </Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="yeet">
                            <AuthButton />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default LoggedBanner;