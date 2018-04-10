import React, { Fragment, Component } from "react";
import GameListing from "../ListingPage/ListingPage";
import { get } from "../../services/base";

import LoadingComponent from "../LoadingViewContainer/LoadingViewContainer";
import Paginator from "../Paginator/Paginator";

class ListingComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            games: [],
            loading: false,
            working: false,
            limit: 10,
            offset: 0,
            listLimit: 0
        }

        this.onGetNextGames = this.onGetNextGames.bind(this);
        this.onGetPreviosGames = this.onGetPreviosGames.bind(this);

    }

    componentDidMount(){

        this.requestGames();
    }

    requestGames(){

        console.log("--requesting--");

        const alias = (this.props.location.state.alias) ? this.props.location.state.alias : null;
        const searchString = (this.props.location.state.searchString) ? this.props.location.state.searchString : null;

        this.setState({
            games: [],
            loading: !this.state.loading,
            working: !this.state.working
        })

        if(alias){
            // console.log("--alias--", alias);
            // get(`http://localhost:3000/api/games?byPlatformName=${alias}`)
            get(`http://localhost:3000/api/games?byPlatformName=${alias}&limit=${this.state.limit}&offset=${this.state.offset}`)
            .then((response) => {

                let games = [];

                response.gamesList.map((item, index) => {
                    games.push({ 
                        gameId: item.id,
                        title: item.GameTitle, 
                        releaseDate: item.ReleaseDate, 
                        thumbnail: item.thumb});
                })

                this.setState({ 
                    games,
                    listLimit: response.listSize,
                    loading: !this.state.loading,
                    working: !this.state.working
                 });
            })
            .catch((err) => {
                console.error(err);
            })
        } else {
            get(`http://localhost:3000/api/games?byGameName=${searchString}&limit=${this.state.limit}&offset=${this.state.offset}`)
            .then((response) => {

                let games = [];

                response.gamesList.map((item) => {
                    games.push({ 
                        gameId: item.id, 
                        title: item.GameTitle, 
                        releaseDate: item.ReleaseDate, 
                        thumbnail: item.Images.boxart.thumb});
                })

                this.setState({ 
                    games,
                    listLimit: response.listSize,
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

    onGetPreviosGames(event){
        
        if(this.state.offset - this.state.limit >= 0){
            console.log("--previous--");
            this.setState({
                offset: this.state.offset - 10
            })

            this.requestGames();
        }
    }

    onGetNextGames(event){
        
        if(this.state.offset + this.state.limit <= this.state.listLimit){
            console.log("--next--");
            this.setState({
                offset: this.state.offset + 10
            })

            this.requestGames();
        }
    }

    render(){

        console.log("--rendering--");

        return(
            <Fragment>

                {/* <div className='sweet-loading'>
                    <PacmanLoader
                    color={'#123abc'} 
                    loading={this.state.loading} 
                    />
                </div> */}
                <LoadingComponent loading={this.state.loading} />

                <GameListing currentList={this.state.games}/>

                <Paginator getNextGames={this.onGetNextGames} getPreviosGames={this.onGetPreviosGames} />

            </Fragment>
        );
    }
}

export default ListingComponent;