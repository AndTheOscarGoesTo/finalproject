import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import style from './LoggedBanner.module.scss';
import { Link } from 'react-router-dom';
import { isLoggedIn, me } from '../../services/user';
import { post } from '../../services/base'

import AuthButton from '../auth/authButton';

class LoggedBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            requests: []
        }
    }
    componentDidMount(){
        me()
        .then(res => { 
            this.setState({ id: res.id});
            return post('http://localhost:3000/api/relationships/requests', {
                id: res.id
            });
        })
        .then(results => {
            console.log('this is the results from posting: ', results);
            this.setState( {requests: results} )
        });
    }
    onAccept(requestid){
        post('http://localhost:3000/api/relationships/requests/accept', {
            id: requestid,
        })
    }
    onBlock(requestid){
        post('http://localhost:3000/api/relationships/requests/block', {
            id: requestid,
        })
    }
    render() {
        let requests = this.state.requests.map((request) => {
                return(
                <li key={request.id}>
                    <p>{request.user_one_id} wants to be your friend!</p>
                    <button onClick= { (event) => this.onAccept(request.id)}> ACCEPT </button>
                    <button onClick={ (event) => this.onBlock(request.id)}> DECLINE </button>
                </li>
                )
        })
        console.log('yeet')
        return (
            <div className={`${style.logged_out_banner}`}>
                <div className={`${style.logged_out_logo}`}>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/" className={`navbar-brand ${style.logo}`}> vidya </Link>
                </div>
                <nav className={`navbar navbar-expand-sm ${style.logged_out_content}`}>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="yeet">
                        <AuthButton />
                        </li>
                        <li>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={`/profile/${this.state.id}`} className={style.register}> My Profile </Link>
                        </li>
                        <li className='btn-group'>
                        {/* boos */}
                            {/* <button type="button" className="btn btn-danger"> <span style={{backgroundColor: 'red' }}className="badge">{this.state.requests.length}</span><span className="caret"></span></button>
                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a className="dropdown-item" href="#">{ requests }</a>
                               
                            </div> */}

                                          <div className={style.holder}>
                                            <div className={style.hovorHolder}>
                                            {/* <i className="ion-chevron-down"></i> */}
                                              <span style={{backgroundColor: 'red' }}className="badge">{this.state.requests.length}</span>
                                            <div className={style.holds}>
                                                <a href="#">{ requests }</a>
                                                
                                            </div>

                                            </div>
                                        
                                        </div>
                                
                                {/* nana */}

                            {/* <a type="button" style={{textDecoration: 'none', color: 'white'}} className={`dropdown-toggle ${style.space}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span style={{backgroundColor: 'red' }}className="badge">{this.state.requests.length}</span>grhgrh<span className="caret"></span></a> */}
                            {/* <ul className="dropdown-menu">
                                { requests }
                            </ul> */}
                            
                            {/* nana */}

                            {/* boos */}
                        </li>
                        
                    </ul>
                </nav>
            </div>
        );
    }
}

export default LoggedBanner;