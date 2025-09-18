
import React from 'react';

// 2000 x 1500
import imageMap from 'assets/map/nature.png'

import userData from 'dataSet/userData';

import classes from './Map.module.css'

function Map(){
    userData.countBlocks = 20;


    const blockGrids = () => {
        let block = []
        for (let row = 0; row < userData.countBlocks; row ++){
            for (let col = 0; col < userData.countBlocks; col ++){
                block.push(<div key = {`${row} ${col}`} className={classes.block}></div>)
            }
        }
        return block;
    }



    return(
        <>
            <img className={classes.image} src={imageMap}></img>
            <div className={classes.mapBlocks}>
                {blockGrids()}
            </div>
        </>
    );
}

export default Map;