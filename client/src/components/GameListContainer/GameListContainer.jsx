import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { get } from '../../services/base';


import NavComponent from "./GameListNav";
// import GameListings from "./ListingPage";
import ListingComponent from "./ListingComponent";
import GameContainer from "../GameContainer/GameContainer";
import GameAddContainer from "../GameAddContainer/GameAddContainer";

class GameListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            games: []
        }
        this.onSearchNameSubmit = this.onSearchNameSubmit.bind(this);
    }

    onSearchNameSubmit(event){
        event.preventDefault();
        const inputElement = event.currentTarget.parentNode.parentNode.querySelector("input");
        const searchName = inputElement.value;

        // console.log("--Target--", event.target.parentNode);
        // console.log("--Current Target--", searchName);

        get(`http://localhost:3000/api/games?byGameName=${searchName}`)
        .then((response) => {
            // console.log(response);

            let games = [];

            response.map((item) => {
                // console.log("--item--", item);
                // console.log("--item--", item);
                // console.dir(item.Images.boxart.thumb);
                if(item.Images && item.Images.boxart.hasOwnProperty("thumb")){
                    games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.Images.boxart.thumb});
                }
                
            })

            // console.log("--games here--", games);

            this.setState({ games });
        })
        .catch((err) => {
            console.error(err);
        })
    }

    render(){
        // console.log("--Game List--", this.state.games);
        return(
            <div className={`container`}>

                <h1>Sup world</h1>
                <NavComponent onSearchNameSubmit={this.onSearchNameSubmit} textChange={this.onInputChange} onDropSearch={this.onDropSearch}/>

                <Route exact path="/GameCatalogue/gameSearch" component={ListingComponent} />
                <Route exact path="/GameCatalogue/Game/:id" component={GameContainer} />
                <Route exact path="/GameCatalogue/GameAdd/:id" component={GameAddContainer} />

            </div>
        );
    }
}

export default GameListContainer;