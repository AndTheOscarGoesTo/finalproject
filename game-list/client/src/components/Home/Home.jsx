import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import style from './Home.module.scss';

import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';

class Home extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Fragment>
            <UnloggedBanner />
            <div>
                <h1> yeet </h1>
            </div>
            </Fragment>
        )
    }
}

export default Home;