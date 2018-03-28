import React, { Component, Fragment } from 'react';
import { Carousel } from 'react-bootstrap'; 
import style from './ForumCarousel.module.scss'

class ForumCarousel extends Component{
    super(props){
        this.state
    }
    render(){
        return(
        <Fragment>
            <Carousel>
                <Carousel.Item>
                <div className="card text-center">
                    <img className="card-img-top" src="https://www.ssbwiki.com/images/b/b6/Super_Smash_Bros._for_Nintendo_Switch.svg" alt="Card image cap" style={{height: '22.5em', width: '100%'}} />
                    <div className={`card-body ${style.cardBody}`} style={{height: '22.5em'}}>
                        <h5 className="card-title">Forum Name</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="card text-center bg-light mb-3">
                    <img className="card-img-top" src="http://nintendoenthusiast.com/wp-content/uploads/2018/02/smash-bros-coming-to-switch.jpg" alt="Card image cap" style={{height: '22.5em', width: '100%'}} />
                    <div className={`card-body ${style.cardBody}`} style={{height: '22.5em'}}>
                        <h5 className="card-title">Forum Name</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="card text-center">
                    <img className="card-img-top" src="https://www.ssbwiki.com/images/b/b6/Super_Smash_Bros._for_Nintendo_Switch.svg" alt="Card image cap" style={{height: '22.5em', width: '100%'}} />
                    <div className={`card-body ${style.cardBody}`} style={{height: '22.5em'}}>
                        <h5 className="card-title">Forum Name</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </Carousel.Item>
            </Carousel>
        </Fragment>
        )
    }
}

export default ForumCarousel;