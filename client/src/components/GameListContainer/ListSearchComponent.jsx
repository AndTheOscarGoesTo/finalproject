import React from "react";

function ListSearchComponent(props) {
    return (
            <div className="col-sm-3 col-md-3">
                <form className="navbar-form" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter Game Name here" name="q"/>
                            <div className="input-group-btn">
                                <button 
                                    className="btn btn-default" 
                                    type="submit"
                                    onClick={(event) => {props.onSearchNameSubmit(event)}}
                                >
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                    </div>
                </form>
            </div>

            );
        }
        
export default ListSearchComponent;