import React from "react";
import SearchBar from "./ListSearchComponent";
import DropDownList from "./DropDownList";

const platformList= [
    {
        name: "PlayStation 4",
        id: 4919,
        alias: "sony+playstation+4"
    }, {
        name: "Nintendo Switch",
        id: 4971,
        alias: "nintendo+switch"
    }, {
        name: "Xbox One",
        id: 4920,
        alias: "microsoft+xbox+one"
    }, {
        name: "Glorious PC",
        id: 1,
        alias: "pc"
    }, {
        name: "Android",
        id: 4916,
        alias: "android"
    }, {
        name: "iOS",
        id: 4915,
        alias: "ios"
    }
];

const genreList = [
    {
        name: "Action",
        id: 0
    }, {
        name: "Strategy",
        id: 0
    }, {
        name: "Role Playing",
        id: 0,
        queryName: "Role"
    }, {
        name: "Shooters",
        id: 0
    }, {
        name: "Puzzle",
        id: 0
    }, {
        name: "Racing",
        id: 0
    }, {
        name: "Sports",
        id: 0
    }
]

function GameListNav(props) {
    return (
            <nav className="navbar navbar-default" role="navigation">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <span className="navbar-brand" href="#">Brand</span>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Platforms<b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <DropDownList listings={platformList} dropDownName={"platform"} onDropSearch={props.onDropSearch}/>
                            </ul>
                        </li>
                    </ul>
                        <SearchBar onSearchNameSubmit={props.onSearchNameSubmit} textChange={props.textChange} />
                    </div>
            </nav>
            )
}

export default GameListNav;