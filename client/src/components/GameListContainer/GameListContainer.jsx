import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { get } from '../../services/base';

import NavComponent from "./GameListNav";
import ListingComponent from "./ListingComponent";
import GameContainer from "../GameContainer/GameContainer";
import GameAddContainer from "../GameAddContainer/GameAddContainer";
import HomeNav from "../HomeNavBar/HomeNavBar";

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

        get(`http://localhost:3000/api/games?byGameName=${searchName}`)
        .then((response) => {

            let games = [];

            response.map((item) => {

                if(item.Images && item.Images.boxart.hasOwnProperty("thumb")){
                    games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.Images.boxart.thumb});
                }
                
            })

            this.setState({ games });
        })
        .catch((err) => {
            console.error(err);
        })
    }

    render(){

        return(
            <Fragment>

                <HomeNav />
                <div className={`container`}>

                    <NavComponent onSearchNameSubmit={this.onSearchNameSubmit} textChange={this.onInputChange} onDropSearch={this.onDropSearch}/>

                    <Route exact path="/GameCatalogue/gameSearch" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/Game/:id" component={GameContainer} />
                    <Route exact path="/GameCatalogue/GameAdd/:id" component={GameAddContainer} />

                </div>

            </Fragment>
            
        );
    }
}

export default GameListContainer;