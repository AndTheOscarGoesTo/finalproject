import React, { Component } from "react";

class ProfileSearchContainer extends Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <h1>String you gave {this.props.match.params.searchString}</h1>
        )
    }
}

export default ProfileSearchContainer;