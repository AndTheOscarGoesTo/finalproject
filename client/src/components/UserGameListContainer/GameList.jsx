import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function GameList(props) {

    console.log("--myGames--", props.myGames);

    return(

        props.myGames.map((item, index) => {
            const gameCompleted = item.gameCompleted === 1 ? "yes" : "no";
            return(
                <div className="media" key={`user-game-listing-${index}`}>
                    <div className="media-left">
                        <Link to={`/GameCatalogue/Game/${item.gameId}`}>
                        <img className="media-object" src={item.gameImg} alt="..."/>
                        </Link>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{item.gameTitle}</h4>
                        <span className="mr-5">Hours Logged: {item.hoursLogged}</span> <span>Completed? {gameCompleted}</span>
                    </div>
                </div>
            );
        })

    );

}

export default GameList;