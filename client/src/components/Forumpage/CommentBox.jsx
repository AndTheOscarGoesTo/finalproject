import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
import CommentList from './CommentList';
import CommentForm from './CommentForm'

import LoggedBanner from '../LoggedBanner/LoggedBanner'


class CommentBox extends Component {

    render() {
        return (
          <div className={ style.space }>
              <h2>Discuss </h2>
              <hr />
              <CommentForm />
              <CommentList />
              
        </div>

         
        )
    }
}

export default CommentBox;