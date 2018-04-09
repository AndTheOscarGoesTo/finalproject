import React, { Fragment, Component } from "react";
import HomeNav from "../HomeNavBar/HomeNavBar";
import GameListing from "./GameList";

import { me } from "../../services/user";
import { get } from "../../services/base";

class UserGameListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            currentUserId: null,
            gameListInfo: []
        }
    }

    componentDidMount(){
        me()
        .then((response) => {

            get(`http://localhost:3000/api/gameList/${response.id}`)
            .then((gameListInfo) => {
                this.setState({ currentUserId: response.id ,gameListInfo })
            })
            .catch((err) => {
                console.log(err);
            })

        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){

        return(
            <Fragment>
                <HomeNav />
                <GameListing myGames={this.state.gameListInfo} />
            </Fragment>
        );
    }

}

export default UserGameListContainer;