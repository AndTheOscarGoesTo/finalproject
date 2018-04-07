import React, { Fragment } from "react";
import ListingStyle from "./ListingPage.scss";

function ListingPage (props){
    return (
        props.currentList.map((item, index) => {
            // console.log(item); 
            return (
                <div key={`game-listing-number-${index}`} id={item.gameId} className={`${ListingStyle.mainDiv}`}>
                    {/* <img src={`http://thegamesdb.net/banners/${item.thumbnail}`} alt=""/>
                    <h1>{item.title}</h1>
                    <h4>{item.releaseDate}</h4> */}
                    {/* <h3>{item.Platform}</h3> */}
                    {/* <p>{item.Overview}</p> */}
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
                </div>
            )
        })
    );
}

export default ListingPage;