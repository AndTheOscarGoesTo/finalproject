import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
import EditComment from './EditComment';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import { get, post } from '../../services/base';
class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentz: [],
        }
    }
    
    componentDidMount(){
        get('http://localhost:3000/api/forums/51?getForumComments=true')
        .then(result => this.setState({commentz: result}))
        .then(log => console.log(this.state.commentz))
      }

      addComment(){
          post('http://localhost:3000/api/forums/51?getForumComments=true', {
              
          })
      }

    render() {
        let commentz = this.state.commentz.map((commentz) => {
            return(
            <div className="card-body">
                <h5 className="card-title" className={style.comment}>{commentz.handle}</h5>
  <p className="card-text" className={style.comment}>{commentz.comment}</p>
            </div>
            )
          })
        return (
  

<div className="card w-75" >
<div className="card-body">
  
  { commentz }

  <i onClick={(event) => {
                            event.preventDefault()

                            this.setState({
                                edit: <EditComment />
                            })
                            }} className="ion-wrench"></i>
</div>
</div>


         
        )
    }
}

export default Comment;