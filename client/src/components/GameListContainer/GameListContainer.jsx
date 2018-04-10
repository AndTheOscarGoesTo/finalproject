import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { get } from '../../services/base';

import NavComponent from "./GameListNav";
import ListingComponent from "./ListingComponent";
import GameContainer from "../GameContainer/GameContainer";
import GameAddContainer from "../GameAddContainer/GameAddContainer";
import HomeNav from "../HomeNavBar/HomeNavBar";

class GameListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            games: []
        }

    }

    render(){

        return(
            <Fragment>

                <HomeNav />

                <div className={`container`}>

                    <NavComponent textChange={this.onInputChange} onDropSearch={this.onDropSearch}/>

                    <Route exact path="/GameCatalogue/gameSearch/search/:searchString" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/sony+playstation+4" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/nintendo+switch" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/microsoft+xbox+one" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/pc" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/android" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/ios" component={ListingComponent} />
                    {/* <Route exact path="/GameCatalogue/gameSearch/:searchString" component={ListingComponent} /> */}

                    <Route exact path="/GameCatalogue/Game/:id" component={GameContainer} />
                    <Route exact path="/GameCatalogue/GameAdd/:id" component={GameAddContainer} />

                </div>

            </Fragment>
            
        );
    }
}

export default GameListContainer;