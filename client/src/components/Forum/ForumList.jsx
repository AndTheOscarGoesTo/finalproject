import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { get, post } from '../../services/base'
import style from './Forum.module.scss'
import {Accordion, PanelGroup, Panel} from 'react-bootstrap';
import CommentBox from '../Forumpage/CommentBox'

class ForumList extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: '',
      forumz: [],
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }
  

    componentDidMount(){
      get('http://localhost:3000/api/forums')
      .then(result => this.setState({forumz: result}))
      .then(log => console.log(this.state.forumz))
    }

    

    render() {
      let forumz = this.state.forumz.map((forumz) => {
        return(
/* <div id="accordion">
<div class="card" onClick= { (event) => {this.handleselect(event)}}>
    <div class="card-header" >
      <h5 class="mb-0">
        <h1 class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">
        {forumz.title}
        </h1>
      </h5>
    </div>
    <div id="collapse" class="collapse" aria-labelledby="heading" data-parent="#accordion">
      <div class="card-body">
      { forumz.forumText }
      </div>
    </div>
  
  </div>
  
</div> */
<Fragment >
<PanelGroup
        accordion
        id="accordion-controlled-example"
        activeKey={this.state.activeKey}
        onSelect={this.handleSelect}
      >
        <Panel eventKey={forumz.id}
        key={forumz.id}
       
        >
          <Panel.Heading >
            <Panel.Title  className={style.holder} toggle>{forumz.title} </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>{forumz.forumText}</Panel.Body>
          
        </Panel>
        
      </PanelGroup>
</Fragment>




        )
      })
        return (
          <Fragment >
              { forumz }
            </Fragment>

         
        )
    }
}

export default ForumList;