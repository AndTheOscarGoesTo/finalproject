import React from "react";
import Style from "./Paginator.module.scss";

function Paginator(props) {
    return (
        <div className={`${Style.paginatorContianer}`}>
            <span 
                className={`glyphicon glyphicon-backward ${Style.arrow}`}
                onClick={ (event) => props.getPreviosGames(event) }
            >
                </span> 
                    <span className="glyphicon glyphicon-option-vertical"></span> 
            <span 
                className={`glyphicon glyphicon-forward ${Style.arrow}`}
                onClick={ (event) => props.getNextGames(event) }
            ></span>
        </div>
    );
}

export default Paginator;