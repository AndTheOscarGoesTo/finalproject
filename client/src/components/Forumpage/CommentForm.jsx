import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';
import { get, post } from '../../services/base'
import LoggedBanner from '../LoggedBanner/LoggedBanner'

import { me } from "../../services/user";
class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      commentText: '',
      userId: '',
      forumId: ''
    }

  }

  componentDidMount(){
    me()
    .then((response) => {
      this.setState({userId: response.id});
    })
  }


  addComment(event){

    event.preventDefault();
   
      post('http://localhost:3000/api/forums/comment', {
          commentText: this.state.commentText,
          userId: this.state.userId,
          forumId: this.state.forumId,
      })
      
      this.props.updatecomment
  }


  handleComment(value) {
    this.setState({ 

      commentText: value,
});
      console.log("yes")
}


    render() {
    
        return (
          <div>
            <form>
                <label>
                <textarea className={style.text}  id="text" placeholder="forumText"  onChange={(e) => this.handleComment(e.target.value)} />
                </label>
                <input className={style.btnn} type="submit" onClick= { (event) => {this.addComment(event)}} />
              </form> 
              
        </div>

         
        )
    }
}

export default CommentForm;