import React, { Component } from 'react';

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