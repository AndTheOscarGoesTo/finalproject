import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';
import CommentBox from './CommentBox';
import ForumTop from './ForumTop';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
class Forumpage extends Component {

    render() {
        return (
            <Fragment>
                <LoggedBanner />

          <div className={ style.containment }>
              <ForumTop />
            <CommentBox />
          </div>
          </Fragment>

         
        )
    }
}

export default Forumpage;