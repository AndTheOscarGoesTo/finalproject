import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './PostForum.module.scss'
import imageUploader from './imageUploaderBox'
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import { get, post } from '../../services/base';
class PostForum extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        forumText: '',
        id: '',
        forumImg: null
    };

}

onButtonClick(event) {
  event.preventDefault();

  console.log('--on click--', this.state.id, this.state.title, this.state.forumText);

    post('http://localhost:3000/api/forums/forum', {
        forumTitle: this.state.title,
        forumImg: this.state.forumImg,
        forumText: this.state.forumText,
        creatorId: 0
    })
    this.props.updateforums;
    console.log("yes")
}

handleTextChange(value) {
    this.setState({ 
      title: value,
});
      console.log("yes")
}

handleTextChangeTwo(value) {
  this.setState({ 
    forumText: value});
    console.log("yes")
}

  render() {
    return (
      // <form>
      //   <input type="text" placeholder="title"  onChange={(e) => this.handleTextChange(e.target.value)}/>
      //   <textarea id="text" placeholder="forumText"  onChange={(e) => this.handleTextChangeTwo(e.target.value)} />
      //   <input type="submit" onClick= { (event) => {this.onButtonClick(event)}} />
      // </form>

     <Fragment>
       <LoggedBanner />
<div  id="formwrap">
    <form  method="post" className={style.holdsPost} >
      
        <p>

     
          <span className={style.flat}>
            
            <input type="text" placeholder="Title" className={style.indent} onChange={(e) => this.handleTextChange(e.target.value)}  />
      
              
           
          </span>
          <span className={ style.Message }>
            <textarea onChange={(e) => this.handleTextChangeTwo(e.target.value)}  className={ style.posting } placeholder="..."></textarea>
          </span>
          <Link to={"/Forum"}><input type="submit"  className={style.btnn} onClick= { (event) => {this.onButtonClick(event)}} /></Link>
       
      </p>
      <div className=" wpcf7-display-none">
      </div>
  </form>
</div>
</Fragment>
    );
  }
        
    
}

export default PostForum;