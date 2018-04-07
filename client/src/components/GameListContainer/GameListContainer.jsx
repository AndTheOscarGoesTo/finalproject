import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { get } from '../../services/base';


import NavComponent from "./GameListNav";
// import GameListings from "./ListingPage";
import ListingComponent from "./ListingComponent";

class GameListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            games: [],
            currentRoute: null
        }
        this.onSearchNameSubmit = this.onSearchNameSubmit.bind(this);
        this.onDropSearch = this.onDropSearch.bind(this);
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

                //     console.log("--item--", item);
                //     console.dir(item.Images.boxart.thumb);
                //  && item.ReleaseDate && (new Date(item.ReleaseDate) >= new Date("11/15/13"))
                if(item.Images && item.Images.boxart.hasOwnProperty("thumb")){
                    games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.Images.boxart.thumb});
                } 
                // else if (item.thumbnail){
                //     games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.thumbnail.thumb});
                // }
                
            })

            // console.log("--games here--", games);

            this.setState({ games });
        })
        .catch((err) => {
            console.error(err);
        })
    }

    onDropSearch(event, searchString, alias=null){
        event.preventDefault();

        // console.log("--on Search--", alias);

        // console.log("--target--", event.currentTarget.text);
        if(alias){
            // console.log("alias", alias);
            get(`http://localhost:3000/api/games?byPlatformName=${alias}`)
            .then((response) => {
                // console.log(response);
                // this.setState({ games: response });
                let games = [];

                response.map((item, index) => {
                    // console.log("item", index, ": ", item);
                    if(item.hasOwnProperty("thumb") && item.hasOwnProperty("ReleaseDate")){
                        // console.log("--Checked--");
                        games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.thumb});
                    }
                    
                })

                // console.log("--games here--", games);

                this.setState({ games });
            })
            .catch((err) => {
                console.error(err);
            })
        } else {
            get(`http://localhost:3000/api/games?byGenre=${searchString}`)
            .then((response) => {
                console.log("--response--", response);
                // this.setState({ games: response });
                let games = [];

                response.map((item, index) => {
                    // console.log("item", index, ": ", item);
                    if(item.hasOwnProperty("thumb") && item.hasOwnProperty("ReleaseDate")){
                        // console.log("--Checked--");
                        games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.thumb});
                    }
                    
                })

                console.log("--games here--", games);

                this.setState({ games });
            })
            // console.log("--Search String--", searchString);

        }
    }

    render(){
        // console.log("--Game List--", this.state.games);
        return(
            <div className={`container`}>

                <h1>Sup world</h1>
                <NavComponent onSearchNameSubmit={this.onSearchNameSubmit} onDropSearch={this.onDropSearch}/>
                {/* <Route path="/DisplayList" currentList={this.state.games}/> */}
                {/* <GameListings currentList={this.state.games}/> */}

                <Route exact path="/GameCatalogue/gameSearch" component={ListingComponent} />

                {/* <ListingComponent/> */}
            </div>
        );
    }
}

export default GameListContainer;