import React, { Component } from 'react';
import { render } from 'react-dom';
import style from './UnloggedBanner.module.scss';
import { Link } from 'react-router-dom';

import AuthButton from '../auth/authButton';

class UnloggedBanner extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={style.logged_out_banner}>
                <div className={style.logged_out_content}>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/" className={style.logo}> vidya </Link>
                    <AuthButton />
                </div>
            </div>
        );
    }
}

export default UnloggedBanner;