import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
import CommentList from './CommentList';
import CommentForm from './CommentForm'

import LoggedBanner from '../LoggedBanner/LoggedBanner'

var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
    {id: 3, author: "Tham Kench", text: "Water Water Water"}
  ];
class CommentBox extends Component {

    render() {
        return (
          <div className={ style.space }>
              <h2>Discuss </h2>
              <hr />
              <CommentForm />
              <CommentList data={ data } />
              
        </div>

         
        )
    }
}

export default CommentBox;