import React, { Component, Fragment } from 'react';
import { Carousel } from 'react-bootstrap'; 
import style from './ForumCarousel.module.scss'

class ForumCarousel extends Component{
    super(props){
        this.state
    }
    render(){
        return(
        // <Fragment>
        //     <Carousel>
        //         <Carousel.Item>
        //         <div className="card text-center">
        //             <img className="card-img-top" src="https://www.ssbwiki.com/images/b/b6/Super_Smash_Bros._for_Nintendo_Switch.svg" alt="Card image cap" style={{height: '22.5em', width: '100%'}} />
        //             <div className={`card-body ${style.cardBody}`} style={{height: '22.5em'}}>
        //                 <h5 className="card-title">Forum Name</h5>
        //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                 <a href="#" className="btn btn-primary">Go somewhere</a>
        //             </div>
        //         </div>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //         <div className="card text-center bg-light mb-3">
        //             <img className="card-img-top" src="http://nintendoenthusiast.com/wp-content/uploads/2018/02/smash-bros-coming-to-switch.jpg" alt="Card image cap" style={{height: '22.5em', width: '100%'}} />
        //             <div className={`card-body ${style.cardBody}`} style={{height: '22.5em'}}>
        //                 <h5 className="card-title">Forum Name</h5>
        //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                 <a href="#" className="btn btn-primary">Go somewhere</a>
        //             </div>
        //         </div>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //         <div className="card text-center">
        //             <img className="card-img-top" src="https://www.ssbwiki.com/images/b/b6/Super_Smash_Bros._for_Nintendo_Switch.svg" alt="Card image cap" style={{height: '22.5em', width: '100%'}} />
        //             <div className={`card-body ${style.cardBody}`} style={{height: '22.5em'}}>
        //                 <h5 className="card-title">Forum Name</h5>
        //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                 <a href="#" className="btn btn-primary">Go somewhere</a>
        //             </div>
        //         </div>
        //         </Carousel.Item>
        //     </Carousel>
        // </Fragment>

<<<<<<< HEAD
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" className={style.containment}>
<ol className="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
=======
<div class id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" className={style.containment}>
<ol class="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
>>>>>>> 25bcce7932c9831ce0e320c25051a2d756f942cd
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div className="carousel-inner">
  <div className="carousel-item active">
    <img className={`d-block w-100 ${style.images}`} src="https://www.ssbwiki.com/images/b/b6/Super_Smash_Bros._for_Nintendo_Switch.svg" alt="First slide" />
    <div className="carousel-caption d-none d-md-block" className={style.cardBody}>
    <h5 className="card-title">Forum Name</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
<<<<<<< HEAD
  <div className="carousel-item">
    <img className={`d-block w-100 ${style.images}`} src="http://nintendoenthusiast.com/wp-content/uploads/2018/02/smash-bros-coming-to-switch.jpg" alt="Second slide" />
    <div className="carousel-caption d-none d-md-block" className={style.cardBody}>
=======
  <div class="carousel-item">
    <img className={`d-block w-100 ${style.images}`}  src="http://nintendoenthusiast.com/wp-content/uploads/2018/02/smash-bros-coming-to-switch.jpg" alt="Second slide" />
    <div class="carousel-caption d-none d-md-block" className={style.cardBody}>
>>>>>>> 25bcce7932c9831ce0e320c25051a2d756f942cd
    <h5 className="card-title">Forum Name</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  <div className="carousel-item">
    <img className={`d-block w-100 ${style.images}`} src="https://www.ssbwiki.com/images/b/b6/Super_Smash_Bros._for_Nintendo_Switch.svg" alt="Third slide" />
    <div className="carousel-caption d-none d-md-block" className={style.cardBody}>
    <h5 className="card-title">Forum Name</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" className= { style.arrow }>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" className= { style.arrow }>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="sr-only">Next</span>
</a>
</div>
        )
    }
}

export default ForumCarousel;