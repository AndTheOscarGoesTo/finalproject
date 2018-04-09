import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import MyStyle from "./UserGameListContainer.scss";

function GameList(props) {

    // console.log("--myGames--", props.myGames);

    return(
        <div className={`jumbotron ${MyStyle.transparentBackground}`}>

            <div className={`container ${MyStyle.listingContainer}`}>
                {props.myGames.map((item, index) => {
                    const gameCompleted = item.gameCompleted === 1 ? "yes" : "no";
                    return(
                        <div className={`media ${MyStyle.borderedDiv}`} key={`user-game-listing-${index}`}>
                            <div className="media-left">
                                <Link to={`/GameCatalogue/Game/${item.gameId}`}>
                                <img className="media-object img-thumbnail" src={item.gameImg} alt="..."/>
                                </Link>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{item.gameTitle}</h4>
                                <div>
                                    <span className="pr-5">Hours Logged: {item.hoursLogged}</span> <span>Completed? {gameCompleted}</span>
                                </div>
                                
                                <i 
                                    className={`glyphicon glyphicon-remove-circle ml-5 ${MyStyle.removeIcon}`}
                                    onClick={(event) => props.onDeleteHandler(event, item.gameId)}
                                ></i>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>

    );

}

export default GameList;