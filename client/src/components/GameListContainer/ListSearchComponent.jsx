import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListSearchComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchString: ""
        }
    }

    onInputChange(event){
        // console.log("target", event.currentTarget.value);
        this.setState({searchString: event.currentTarget.value})
    }

    render(){
        return (
            <div className="col-sm-3 col-md-3">
                <form className="navbar-form" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter Game Name here" name="q"
                            onChange={event => this.onInputChange(event)}
                        />
                            <div className="input-group-btn">
                                {/* <button 
                                    className="btn btn-default" 
                                    type="submit"
                                    onClick={(event) => {props.onSearchNameSubmit(event)}}
                                >
                                    <i className="glyphicon glyphicon-search"></i>
                                </button> */}
                                <Link 
                                    className="btn btn-default"
                                    to={{
                                        pathname: "/GameCatalogue/gameSearch",
                                        state: { searchString: this.state.searchString}
                                    }} 
                                ><i className="glyphicon glyphicon-search"></i></Link>
                                {/* {console.log("--function--", props.textChange)} */}
                                {console.log("--text--", this.state.searchString)}
                            </div>
                    </div>
                </form>
            </div>

            );
        }
}
        
export default ListSearchComponent;