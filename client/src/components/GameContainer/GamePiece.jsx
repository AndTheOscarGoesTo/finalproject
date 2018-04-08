import React from "react";

function GamePiece(props) {
    const imgBaseUrl = `http://thegamesdb.net/banners/`;

    console.log("--props--", props);
    return(
        // <h1>Stuff</h1>
        <div className={`jumbotron`}>
            <div className={`container`}>
                <section  className={`gameHeadline panel`}>
                    <img src={imgBaseUrl + props.infoObj.thumbnail} alt="" className="mx-auto"/>

                    <div className={`panel-footer`}>
                    <h1>{props.infoObj.gameTitle}</h1>
                    <h2>{props.infoObj.platform}</h2>
                    <h3>Developer: {props.infoObj.developer}</h3>
                    <h4>players: {props.infoObj.numOfPlayers}</h4>
                    </div>
                </section>

                <section className={`gameDescription`}>
                    <h4>{props.infoObj.releaseDate}</h4>
                    {/* <h5></h5> */}
                    {/* <h5></h5> for genre */}
                    <h3>Description: </h3>
                    <p>{props.infoObj.description}</p>
                </section>
            </div>
        </div>
    )
}

export default GamePiece;