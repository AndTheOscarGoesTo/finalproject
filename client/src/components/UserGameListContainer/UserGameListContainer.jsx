import React, { Fragment, Component } from "react";
import HomeNav from "../HomeNavBar/HomeNavBar";
import GameListing from "./GameList";

import { me } from "../../services/user";
import { get } from "../../services/base";
import { destroy } from "../../services/base";

import MyStyle from "./UserGameListContainer.module.scss";

class UserGameListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            currentUserId: null,
            gameListInfo: []
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
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

    onDeleteHandler(event, gameId) {
        console.log("--ids to delete--", this.state.currentUserId, gameId);

        destroy("http://localhost:3000/api/gameList/", {userId: this.state.currentUserId, gameId})
        .then((response) => {
            console.log(response);

            this.props.history.push("/MyGameList");

        })
        .catch((err) => {
            console.log(err);
        })
        // this.props.history.push("/MyGameList");
    }

    render(){

        return(
            <div className={`${MyStyle.mainPiece}`}>
                <HomeNav />
                <GameListing myGames={this.state.gameListInfo} onDeleteHandler={this.onDeleteHandler} />
            </div>
        );
    }

}

export default UserGameListContainer;