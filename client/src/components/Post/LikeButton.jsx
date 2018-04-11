import React, { Component } from 'react';
import { get, post } from '../../services/base'

class LikeButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        liked: this.props.liked,
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
      post('http://localhost:3000/api/likes', {
                status: this.props.statusid,
                userid: this.props.userid,
            });
    }
    
    render() {
      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? 'Unlike' : 'Like'
        if(this.state.liked === false) {
            return (
                <div className="customContainer">
                <button className="btn btn-primary" onClick={this.handleClick}>{label}</button>
                </div>
            );
        } else {
            return (
                <div className="customContainer">
                <button className="btn btn-primary" onClick={this.handleClick}>{label}</button>
                </div>
            );
        }
    }

}

export default LikeButton;