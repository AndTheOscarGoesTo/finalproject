import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';
import Comment from './Comment';
import LoggedBanner from '../LoggedBanner/LoggedBanner'


class CommentList extends Component {


    render() {
          return (
            <div className="commentList">
              <Comment />            
            </div>
          );
        }
      };

export default CommentList;