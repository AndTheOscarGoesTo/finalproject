import React, { Fragment, Component } from "react";
import CarousleIndicators from "./CarouselIndicators";
import CarouselControls from "./CarouselControls";

class CarouselContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: []
        }
    }

    render(){
        return (
            <div id="myCarousel" className={`carousel slide`} dataRide="carousel">

                <CarousleIndicators />
                
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="https://thenextdoor.org/wp-content/uploads/2016/11/placeholder-815x458.png" alt="Los Angeles" />
                    </div>

                    <div class="item">
                        <img src="https://www.crownplumbing.co/wp-content/uploads/2015/07/placeholder.gif" alt="Chicago" />
                    </div>

                    <div class="item">
                        <img src="https://www.placebear.com/g/200/300" alt="New York" />
                    </div>
                </div>

                <CarouselControls />

            </div>
        )
    }
}

export default CarouselContainer;