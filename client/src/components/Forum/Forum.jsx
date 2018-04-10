import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { get, post } from '../../services/base'
import style from './Forum.scss'
import ForumHead from './ForumHead';
import Scroll from './scroll';
import LoggedBanner from '../LoggedBanner/LoggedBanner'
import ForumList from './ForumList'
class Forum extends Component {

    // constructor(props){
    //   super(props);
    //   this.state = {
    //     forumz: [],
    //   }
    // }

    // componentDidMount(){
    //   get('http://localhost:3000/api/forums')
    //   .then(result => this.setState({forumz: result}))
    //   .then(log => console.log(this.state.forumz))
    // }
    

    render() {
//       let forumz = this.state.forumz.map((forumz) => {
//         return(
// <div id="accordion">
// <div class="card">
//     <div class="card-header" >
//       <h5 class="mb-0">
//         <h1 class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">
//         {forumz.title}
//         </h1>
//       </h5>
//     </div>
//     <div id="collapse" class="collapse" aria-labelledby="heading" data-parent="#accordion">
//       <div class="card-body">
//       { forumz.forumText }
//       </div>
//     </div>
  
//   </div>
  
// </div>
//         )
//       })
        return (
          <Fragment>
            <LoggedBanner />
            <ForumHead />
            
              <ForumList />
          <Scroll />
        

          
            </Fragment>

         
        )
    }
}

export default Forum;