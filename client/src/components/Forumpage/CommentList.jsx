import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';
import Comment from './Comment';
import LoggedBanner from '../LoggedBanner/LoggedBanner'


class CommentList extends Component {

    render() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
              <Comment author={comment.author} key={comment.id}>
                {comment.text}
              </Comment>
            );
          });
          return (
            <div className="commentList">
              {commentNodes}
            </div>
          );
        }
      };

export default CommentList;