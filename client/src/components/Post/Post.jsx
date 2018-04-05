import React, { Component, Fragment } from 'react';
import style from './Post.module.scss'
import { get, post } from '../../services/base'
import { Link } from 'react-router-dom';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
    }
    componentDidMount(){
        get('http://localhost:3000/api/status')
        .then(result => this.setState({posts: result}))
        .then(log => console.log(this.state.posts))
    }
    handleLike(id){
        post('http://localhost:3000/api/status', {

        })
        .then()
    }
    render(){
        let posts = this.state.posts.map((posts) => {
            return(
                    <div className={`media ${style.postDiv}`}key={posts.id}>
                        <div className="media-left">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png" className="media-object" style={{width: '50px'}} />
                        </div>
                        <div className="media-body">
                            <Link to={`/profile/${posts.userid}`} className="media-heading">UserID {posts.userid}</Link>
                            <p>{posts.status}</p>
                            <i className="glyphicon glyphicon-heart-empty" onClick={ () => { this.handleLike(posts.id) } }></i>
                        </div>
                    </div>
            )
        })
        return(
            <Fragment>
                { posts }
          </Fragment>
        )
    }
}

export default Post;