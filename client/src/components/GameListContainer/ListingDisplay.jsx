import React, { Fragment } from "react";

function ListingDisplay(props){

    return (
            <div className="media">
                <div className="media-left">
                    <a
                        
                    >
                    <img src={`http://thegamesdb.net/banners/${item.thumbnail}`} alt=""/>
                    </a>
                </div>
                <div className="media-body">
                    <h1 className="media-heading">{item.title}</h1>
                    <h4>Release Date: {item.releaseDate}</h4>
                </div>
            </div>
    );
}

export default ListingDisplay;