import React, { Fragment, Component } from "react";
import { get } from "../../services/base";

import ProfileSearchListing from "./ProfileSearchListing";
import MainNav from "../HomeNavBar/HomeNavBar";

class ProfileSearchContainer extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            profiles: []
        }

    }

    componentDidMount(){

        let profiles = []

        get(`http://localhost:3000/api/users/handle/${this.props.match.params.searchString}`)
        .then((response) => {
            // console.log(response);
            response.forEach((item) => {
                profiles.push({
                    avatar: item.avatar,
                    userId: item.id,
                    userHandle: item.handle
                })
            })

            this.setState({ profiles })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        // console.log("--profiles--", this.state.profiles);
        return(
            <Fragment>
                {/* <h1>String you gave {this.props.match.params.searchString}</h1> */}
                <MainNav />
                <ProfileSearchListing listingInfo={this.state.profiles} />
            </Fragment>
        )
    }
}

export default ProfileSearchContainer;