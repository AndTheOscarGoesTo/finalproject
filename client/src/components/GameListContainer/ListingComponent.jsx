import React, { Fragment, Component } from "react";
import GameListing from "../ListingPage/ListingPage";
import { get } from "../../services/base";

import { PacmanLoader } from "react-spinners";

class ListingComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            games: [],
            loading: false,
            working: false
        }
    }

    componentDidMount(){

        const alias = (this.props.location.state.alias) ? this.props.location.state.alias : null;
        const searchString = (this.props.location.state.searchString) ? this.props.location.state.searchString : null;

        this.setState({
            loading: !this.state.loading,
            working: !this.state.working
        })

        if(alias){
            console.log("--alias--", alias);
            get(`http://localhost:3000/api/games?byPlatformName=${alias}`)
            .then((response) => {

                let games = [];

                response.map((item, index) => {

                    if(item.hasOwnProperty("thumb") && item.hasOwnProperty("ReleaseDate")){

                        games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.thumb});
                    }
                    
                })

                this.setState({ 
                    games,
                    loading: !this.state.loading,
                    working: !this.state.working
                 });
            })
            .catch((err) => {
                console.error(err);
            })
        } else {
            get(`http://localhost:3000/api/games?byGameName=${searchString}`)
            .then((response) => {

                let games = [];

                response.map((item) => {

                    if(item.Images && item.Images.boxart.hasOwnProperty("thumb")){
                        games.push({ gameId: item.id, title: item.GameTitle, releaseDate: item.ReleaseDate, thumbnail: item.Images.boxart.thumb});
                    }
                    
                })

                this.setState({ 
                        games,
                        loading: !this.state.loading,
                        working: !this.state.working
                    });
            })
            .catch((err) => {
                console.error(err);

                this.setState({
                    loading: !this.state.loading,
                    working: !this.state.working
                })
            })

        }
    }

    render(){

        console.log("--Rendering--");

        return(
            <Fragment>

                <div className='sweet-loading'>
                    <PacmanLoader
                    color={'#123abc'} 
                    loading={this.state.loading} 
                    />
                </div>

                <GameListing currentList={this.state.games}/>

            </Fragment>
        );
    }
}

export default ListingComponent;