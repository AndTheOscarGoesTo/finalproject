import React, { Component, Fragment } from "react"
import GameSingle from "./GamePiece";

import { get } from '../../services/base';

class GameContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            game: {}
        }

    }

    componentDidMount() {
        const imgBaseUrl = `http://thegamesdb.net/banners/`;
        get(`http://localhost:3000/api/games?byGameId=${this.props.match.params.id}`)
        .then((response) => {
            
            this.setState({
                game: {
                    gameId: response.id,
                    gameTitle: response.GameTitle,
                    releaseDate: response.ReleaseDate,
                    numOfPlayers: response.Players,
                    platform: response.Platform,
                    thumbnail: response.Images.boxart.thumb,
                    images: {boxart: response.Images.boxart, banners: response.Images.banner, screens: response.Images.screenshot},
                    developer: response.Developer,
                    genres: response.Genres,
                    description: response.Overview ? response.Overview : `Sorry, this game lacks a description :(`
                }
            })
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
    }

    render(){
        
        return(
            <Fragment>
                <GameSingle infoObj={this.state.game} />
            </Fragment>
            
        );
    }

}

export default GameContainer;