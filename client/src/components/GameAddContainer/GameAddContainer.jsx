import React, { Fragment, Component } from "react";
import GameAddPiece from "./GameAddPiece";

import { me } from "../../services/user";

class GameAddContainer extends Component {

    constructor(props){
        super(props);

        console.log("--props in game container--", this.props.location.state);

        this.state = {
            gameInfo: this.props.location.state,
            currentGameId: this.props.match.params.id,
            userId: 0
        }

        this.handleSubmission = this.handleSubmission.bind(this);
    }

    componentDidMount(){
        me()
        .then((response) => {
            // console.log("--me response--", response);
            this.setState({ userId: response.id })
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
    }

    handleSubmission(event, gameInfoObj) {
        event.preventDefault();
        
        const currentParent = event.currentTarget.parentNode;
        const inputText = currentParent.querySelector("#hoursLoggedInput").value;
        const completedBool = currentParent.querySelector("#completedCheck").checked ? 1 : 0;
        let platformId = null;

        switch(gameInfoObj.gamePlatform){
            case "PC":
                    platformId = 1
                break;

            case "Sony Playstation 4":
                    platformId = 4919
                break;
            
            case "Microsoft Xbox One":
                    platformId = 4920
                break;

            case "iOS":
                    platformId = 4915
                break;

            case "Android":
                    platformId = 4916
                break;

            case "Nintendo Switch":
                    platformId = 4971
                break;
        }

        console.log("--Clicked event--", currentParent, "--info--", gameInfoObj, "--input text--", inputText, "completed?", completedBool);
        const requestObj = Object.assign({},
             { 
                 userId: this.state.userId, 
                 gameId: gameInfoObj.gameId, 
                 systemId: platformId, 
                 gameTitle: gameInfoObj.gameTitle, 
                 gameImg: gameInfoObj.gameThumbnail, 
                 hoursLogged: inputText,
                 gameCompleted: completedBool
                } )
    }

    render(){
        console.log(`Your game id is: ${this.state.currentGameId}`)
        // console.log("--new obj--", Object.assign({}, { currentGameId: this.state.currentGameId }, this.state.gameInfo) );

        return(
            // <h1>Your game id is: {this.state.currentGameId}</h1>
            <GameAddPiece infoObj={ Object.assign({}, { currentGameId: this.state.currentGameId }, this.state.gameInfo) } handleSubmission={this.handleSubmission} />
        )
    }

}

export default GameAddContainer;