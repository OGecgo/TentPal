
import React from 'react';

import userData from 'dataSet/userData';

// 2000 x 1500
import imageMap from 'assets/nature.png'

import classes from './Map.module.css'

function Map(){
    const countBlocks = 20;


    const blockGrids = () => {
        let block = []
        for (let row = 0; row < countBlocks; row ++){
            for (let col = 0; col < countBlocks; col ++){
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