import React from "react";
import { Link } from "react-router-dom";

import Style from "./ProfileSearchContainer.module.scss";

function ProfileSearchListing(props){

<<<<<<< HEAD
    console.log("--props--", props.listingInfo)
    let users = props.listingInfo.map((item, index) => {
        return(
        <div className={`media ${Style.postDiv}`}>
            <div className="media-left">
                <Link to={`/profile/${item.userId}`}>
                    <img className={`${Style.imgThumb}`} src={item.avatar} alt=""/>
                </Link>
            </div>
            <div className="media-body">
            <Link style={{textDecoration: 'none', color: 'white'}}to={`/profile/${item.userId}`}>
                <h3>@{item.userHandle}</h3>
            </Link>
            </div>
        </div>
        );
    })
=======
>>>>>>> 30a4ab13c2385719827549a0edd8adc139331bb3
    return(
        <div className={`${Style.panelContainer}`}>
            <div className={Style.postDiv}>
            { users }
            </div>
        </div>
    );

}

export default ProfileSearchListing;