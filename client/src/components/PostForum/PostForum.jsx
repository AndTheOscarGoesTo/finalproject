import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './PostForum.scss'
import imageUploader from './imageUploaderBox'
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import { get, post } from '../../services/base';
class PostForum extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      forum: {},
      title: "",
      forumText: ""
 };
    this.onSubmit = this.handleSubmit.bind(this);
    this.handleChange.bind(this);
    this.handleTextChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    post('/forums', {title: this.state.title, forumText: this.state.forumText})
      .then(function(response) {
        console.log(response)
        alert("posted")
        
      })
  }

  handleChange(title){
    this.setState=(
      title
    )
  }

  handleTextChange(forumText){
    this.setState=(
      forumText
    )
  }

    render() {
      
        return (
           <Fragment>
            <LoggedBanner />
            <div className={style.formDiv}>
            
            
              <form onSubmit={ (e) => this.onSubmit(e)}>
              <p className={style.title}>
                  <input onChange={ (event) => {this.handleChange(event.target.value)} } value={this.state.title}  name="title" type="text"placeholder="Title"  />
                </p>

                

                <p className="text">
                  <textarea onChange={ (event) => {this.handleTextChange(event.target.value)} } value={this.state.forumText}  name="text" className={style.comment} placeholder="Comment"></textarea>
                </p>

                  <input type="submit" className="btn btn-primary"/>
                  
                
              </form>
            </div>
          </Fragment>
        )
    }
}

export default PostForum;