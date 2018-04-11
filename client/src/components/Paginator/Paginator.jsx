import React from "react";
import Style from "./Paginator.module.scss";

function Paginator(props) {
    return (
        <div className={`${Style.paginatorContianer}`}>
        {/*glyphicon glyphicon-backward ion-ios-arrow-left */}
            <span 
                className={`ion-ios-arrow-left ${Style.arrow}`}
                onClick={ (event) => props.getPreviosGames(event) }
            >
                </span> 
                    <span className="glyphicon glyphicon-option-vertical"></span> 
                    {/* ion-ios-arrow-right glyphicon glyphicon-forward*/}
            <span 
                className={`ion-ios-arrow-right ${Style.arrow}`}
                onClick={ (event) => props.getNextGames(event) }
            ></span>
        </div>
    );
}

export default Paginator;