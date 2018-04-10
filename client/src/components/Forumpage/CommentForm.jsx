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
      updatez: [],
      inputText: ""
    }

  }

  componentDidMount(){
    get('http://localhost:3000/api/forums/51?getForumComments=true')
    .then(result => this.setState({updatez: result}))
    .then(log => console.log(this.state.updatez))
  }

  addComment(commet){
      post('http://localhost:3000/api/forums/51?getForumComments=true', {
          
      })
  }

  textChange(event) {
    console.log("--text--", event.target.value)
    this.setState({ inputText: event.target.value })
  }


    render() {
      let updatez = this.state.updatez.map((updatez) => {
        return(

              <form onClick={ () => { this.addComment(updatez.id) } }>
                      <label>
                        <input type="text" value={this.state.value} onChange={this.textChange} />
                      </label>
                      <input type="submit" value="Submit" />
                    </form>  

              )
            })
        return (
          <div>
            {/* <form onSubmit={this.updatez}>
                <label>
                  <input type="text" value="stuff" onChange={this.addComment} />
                </label>
                <input type="submit" value="Submit" />
              </form>  */}
       { updatez }
        </div>

         
        )
    }
}

export default CommentForm;