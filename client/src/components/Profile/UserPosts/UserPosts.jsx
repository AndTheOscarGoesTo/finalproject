import React, { Component, Fragment } from 'react';
import style from './UserPosts.module.scss'
import { get, post } from '../../../services/base'
import { Link } from 'react-router-dom';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loggedId: this.props.loggedId,
        }
    }
    componentDidMount(){
        console.log("--props--", this.props);
        get(`http://localhost:3000/api/status/${this.props.profileid}`)
        .then(result => this.setState({posts: result}))
        .then(log => console.log(this.state.posts))
    }
    handleLike(id){
        post('http://localhost:3000/api/status/like', {
            
        })
        .then()
    }
    render(){
        let posts = this.state.posts.map((posts) => {
            return(
                    <div className={`media ${style.postDiv}`}key={posts.id}>
                        <div className="media-left">
                            <img src={posts.a} className={`media-object ${style.avatar}`} style={{width: '50px'}} />
                        </div>
                        <div className="media-body">
                            <Link to={`/profile/${posts.userid}`} className="media-heading">{posts.h}</Link>
                            <p>{posts.s}</p>
                            <i className="glyphicon glyphicon-heart-empty" onMouseOver={() => this.setState({ likes: posts.likes + 1 })} onClick={ () => { this.handleLike(posts.id, this.state.loggedId) }}></i>
                        </div>
                    </div>
            )
        }).reverse()
        return(
            <div className={style.allpost}>
                { posts }
            </div>
        )
    }
}

export default Post;