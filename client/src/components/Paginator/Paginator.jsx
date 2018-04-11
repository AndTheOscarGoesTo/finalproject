import React from "react";
import Style from "./Paginator.module.scss";

function Paginator(props) {
    return (
        <div className={`${Style.paginatorContianer}`}>
        {/*glyphicon glyphicon-backward ion-ios-arrow-left far fa-hand-point-left glyphicon glyphicon-hand-left*/}
            <span 
                className={`glyphicon glyphicon-hand-left ${Style.arrow}`}
                onClick={ (event) => props.getPreviosGames(event) }
            >
                </span> 
                    <span className="glyphicon glyphicon-option-vertical"></span> 
                    {/* ion-ios-arrow-right glyphicon glyphicon-forward hand-point-right far fa-hand-point-right glyphicon glyphicon-hand-right*/}
            <span 
                className={`glyphicon glyphicon-hand-right ${Style.arrow}`}
                onClick={ (event) => props.getNextGames(event) }
            ></span>
        </div>
    );
}

export default Paginator;