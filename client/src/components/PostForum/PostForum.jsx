import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './PostForum.module.scss'
import imageUploader from './imageUploaderBox'
import LoggedBanner from '../LoggedBanner/LoggedBanner';
class PostForum extends Component {

   
    render() {
        return (
           <Fragment>
            <LoggedBanner />
            <div className={style.formDiv}>
            
            {/* <imageUploader /> */}
              <form>
              <p className={style.title}>
                  <input name="title" type="text"placeholder="Title"  />
                </p>

                

                <p class="text">
                  <textarea name="text" className={style.comment} placeholder="Comment"></textarea>
                </p>

                  <input type="submit" value="POST" className="btn btn-primary"/>
                
              </form>
            </div>
          </Fragment>
        )
    }
}

export default PostForum;