import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';
import { get, post } from '../../services/base'
import LoggedBanner from '../LoggedBanner/LoggedBanner'
class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment: '',
      id: ''
    }

  }


  addComment(event){
    event.preventDefault();
   
      post('http://localhost:3000/api/forums/:id?getForumComments=true', {
          comment: this.state.comment,
          id: this.state.id,

      })
      this.props.updatecomment
  }


  handleComment(value) {
    this.setState({ 
      comment: value,
});
      console.log("yes")
}


    render() {
    
        return (
          <div>
            <form>
                <label>
                <textarea id="text" placeholder="forumText"  onChange={(e) => this.handleComment(e.target.value)} />
                </label>
                <input type="submit" onClick= { (event) => {this.addComment(event)}} />
              </form> 
              
        </div>

         
        )
    }
}

export default CommentForm;