import React from "react";
import { Link } from "react-router-dom";

import Style from "./ProfileSearchContainer.module.scss";

function ProfileSearchListing(props){

    return(
        <div className={`jumbotron ${Style.panelContainer}`}>

            <div className="container">
            {
                props.listingInfo.map((item, index) => {
                    return(
                        <div className={`panel ${Style.panelParent}`} key={`user-search-index-${index}-user-${item.userId}`}>

                            <Link to={`/profile/${item.userId}`}>
                                <img className={`img-thumbnail ${Style.imgThumb}`} src={item.avatar} alt=""/>
                            </Link>
                            <h1>@{item.userHandle}</h1>
            
                        </div>
                    );
                })
            }
                {/* <div className="panel">
                    <Link to={`/profile/${props.listingInfo.userId}`}>
                        <img src={props.listingInfo.avatar} alt=""/>
                    </Link>
                    
                    <h1>{props.listingInfo.userHandle}</h1>
                </div> */}
            
            </div>

        </div>
    );

}

export default ProfileSearchListing;