import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './PostForum.module.scss'
import imageUploader from './imageUploaderBox'
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import { get, post } from '../../services/base';
class PostForum extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        forumText: '',
        id: '',
        forumImg: null
    };

}

onButtonClick(event) {
  event.preventDefault();

  console.log('--on click--', this.state.id, this.state.title, this.state.forumText);

    post('http://localhost:3000/api/forums/forum', {
        id: this.state.id,
        title: this.state.title,
        forumText: this.state.forumText,
    })
    this.props.updateforums;
    console.log("yes")
}

handleTextChange(value) {
    this.setState({ 
      title: value,
});
      console.log("yes")
}

handleTextChangeTwo(value) {
  this.setState({ 
    forumText: value});
    console.log("yes")
}

  render() {
    return (
      <form>
        <input type="text" placeholder="title"  onChange={(e) => this.handleTextChange(e.target.value)}/>
        <input id="text" placeholder="forumText"  onChange={(e) => this.handleTextChangeTwo(e.target.value)} />
        <input type="submit" onClick= { (event) => {this.onButtonClick(event)}} />
      </form>
    );
  }
        
    
}

export default PostForum;