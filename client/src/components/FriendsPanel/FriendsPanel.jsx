import React, { Component, Fragment } from 'react';
import style from './FriendsPanel.module.scss';
import { post } from '../../services/base';
import { isLoggedIn, me } from '../../services/user';

class FriendsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedId: '',
            friends: [],
        }
    }
    componentDidMount(){
        me()
        .then(res => { 
            this.setState({ id: res.id});
            return post('http://localhost:3000/api/relationships/friends', {
                id: res.id
            })
            .then(res => this.setState({friends: res}))
        })
    }
    render(){
        let friends = this.state.friends.map((friend) => {
            if(friend.user_one_id === this.state.loggedId){
            return(
            <li><a href="#">{friend.user_two_id}</a></li>
            )
        } else{
            return(
                <li><a href="#">{friend.user_one_id}</a></li>
            )
        }
        })
        return(
            <div className={`dropup ${style.position}`}>
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Friends
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    { friends }
                </ul>
            </div>
        )
    }
}

export default FriendsPanel;