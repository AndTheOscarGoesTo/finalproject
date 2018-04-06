import React, { Fragment, Component } from "react";
import { get } from '../../services/base';

import NavComponent from "./GameListNav";

class GameListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            games: []
        }

    }

    componentDidMount(){
        console.log("Mounting");
        // get(`http://localhost:3000/api/games`)
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch((err) => {
        //     console.error(err);
        // })
    }

    onSearchNameSubmit(event){
        event.preventDefault();
        const inputElement = event.currentTarget.parentNode.parentNode.querySelector("input");
        const searchName = inputElement.value;

        // console.log("--Target--", event.target.parentNode);
        console.log("--Current Target--", searchName);

        get(`http://localhost:3000/api/games?byGameName=${searchName}`)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    render(){
        return(
            <Fragment>

                <h1>Sup world</h1>
                <NavComponent onSearchNameSubmit={this.onSearchNameSubmit}/>

            </Fragment>
        );
    }
}

export default GameListContainer;