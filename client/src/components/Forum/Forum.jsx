import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { get, post } from '../../services/base'
import style from './Forum.module.scss'
import ForumHead from './ForumHead';
import Scroll from './scroll';
import LoggedBanner from '../LoggedBanner/LoggedBanner'
import ForumList from './ForumList'
import CommentBox from '../Forumpage/CommentBox';
class Forum extends Component {


    

    render() {

        return (
          <Fragment>
            <LoggedBanner />
            <div className={style.commentStyle}>
            <CommentBox />
            </div>
            <div className={style.forumStyle}>
              <ForumList />
            </div>
          <Scroll />
        

          
            </Fragment>

         
        )
    }
}

export default Forum;