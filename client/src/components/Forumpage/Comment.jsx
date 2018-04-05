import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
import EditComment from './EditComment';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
class Comment extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
  

<div class="card w-75" >
<div class="card-body">
  <h5 class="card-title" className={style.comment}>{this.props.author}</h5>
  <p class="card-text" className={style.comment}>{this.props.children}</p>
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