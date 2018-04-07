import React, { Fragment, Component } from "react";
import GameListing from "../ListingPage/ListingPage";
import { get } from "../../services/base";

class ListingComponent extends Component{
    constructor(props){
        super(props);
        console.log("--State in route--", props.location.state);

        this.state = {
            games: []
        }
    }

    componentDidMount(){

        const alias = (this.props.location.state.alias) ? this.props.location.state.alias : null;
        const searchString = (this.props.location.state.searchString) ? this.props.location.state.searchString : null;

        // console.log("--alias--", alias);

        if(alias){
            console.log("--alias--", alias);
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
            console.log("--search string--", searchString)
            // get(`http://localhost:3000/api/games?byGenre=${searchString}`)
            // .then((response) => {
            //     console.log("--response--", response);
            //     // this.setState({ games: response });
            //     let games = [];

            //     response.map((item, index) => {
            //         // console.log("item", index, ": ", item);
            //         if(item.hasOwnProperty("thumb") && item.hasOwnProperty("ReleaseDate")){
            //             // console.log("--Checked--");
            //             games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.thumb});
            //         }
                    
            //     })

            //     console.log("--games here--", games);

            //     this.setState({ games });
            // })
            // console.log("--Search String--", searchString);

        }
    }

    render(){
        return(
            // <h1>Hi Again {this.props.location.state.searchQuery}</h1>
            <GameListing currentList={this.state.games}/>
        );
    }
}

export default ListingComponent;