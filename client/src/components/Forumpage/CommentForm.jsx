import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';

import LoggedBanner from '../LoggedBanner/LoggedBanner'
class CommentForm extends Component {

    render() {
        return (
          <div>
       
        {/* <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" /> */}
        <textarea 
        type="text" 
        placeholder="words" />
        <input class="btn btn-lg btn-success" type="submit" value="send" />
        </div>

         
        )
    }
}

export default CommentForm;