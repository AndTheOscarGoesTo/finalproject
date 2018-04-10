import React, { Fragment } from "react";

import { PacmanLoader } from "react-spinners";
import Styles from "./LoadingViewContainer.module.scss";

function LoadingViewContainer(props){

    // let loadingText = props.loading ? <h1>Loading...</h1> : null;
    let loadingModal = props.loading ? (
        <div className={`${Styles.loadingPanel}`}>
            <div className={`sweet-loading ${Styles.ringLoader}`}>

                <PacmanLoader
                color={'#123abc'} 
                loading={props.loading} 
                />

                <h1>Loading...</h1>

            </div>
        </div>
    ) : null;

    return(
        // <div className="modal">
        //     <div className='sweet-loading'>

        //         <PacmanLoader
        //         color={'#123abc'} 
        //         loading={props.loading} 
        //         />

        //         {loadingText}

        //     </div>
        // </div>
        loadingModal
    );
}

export default LoadingViewContainer;