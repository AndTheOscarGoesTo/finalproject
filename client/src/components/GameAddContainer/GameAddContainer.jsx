import React, { Fragment, Component } from "react";

class GameAddContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentGameId: this.props.location.state.gameId
        }
    }

    render(){
        console.log(`Your game id is: ${this.state.currentGameId}`)
        return(
            <h1>Your game id is: {this.state.currentGameId}</h1>
        )
    }

}

export default GameAddContainer;