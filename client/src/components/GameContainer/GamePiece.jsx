import React from "react";
import GameCarousel from "../CarouselContainer/CarouselContainer";
import { Link } from "react-router-dom";

function GamePiece(props) {
    const imgBaseUrl = `http://thegamesdb.net/banners/`;

    console.log("--props--", props);
    return(
        // <h1>Stuff</h1>
        <div className={`jumbotron`}>
            <div className={`container`}>
                <section  className={`gameHeadline panel`}>
                    <img src={imgBaseUrl + props.infoObj.thumbnail} alt="" className="center-block"/>

                    <div className={`panel-footer`}>
                    <h1>
                        {props.infoObj.gameTitle} 
                        <Link 
                        to={{
                                pathname: `/GameCatalogue/GameAdd/${props.infoObj.gameId}`,
                                state: { gameTitle: props.infoObj.gameTitle, gameId: props.infoObj.gameId, gameThumbnail: imgBaseUrl + props.infoObj.thumbnail, gamePlatform: props.infoObj.platform, gameDescription: props.infoObj.description }
                            }} 
                        >
                            <i className="ml-3 glyphicon glyphicon-pencil"></i>
                        </Link>
                    </h1>
                    <h2>{props.infoObj.platform}</h2>
                    <h3>Developer: <small>{props.infoObj.developer}</small></h3>
                    <h4>players: {props.infoObj.numOfPlayers}</h4>
                    </div>
                </section>

                <section className={`gameDescription`}>
                    <h4>{props.infoObj.releaseDate}</h4>
                    {/* <h5></h5> */}
                    {/* <h5></h5> for genre */}
                    <h3>Description: </h3>
                    <p>{props.infoObj.description}</p>
                    
                    {/* <GameCarousel /> */}
                </section>
            </div>
        </div>
    )
}

export default GamePiece;