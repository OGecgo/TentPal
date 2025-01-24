



import React, {useRef, useState, useEffect, useMemo} from "react";

import classes from "./Map.module.css";

const gridPlethera = 10 ;

function Map() {
    const refImg = useRef(null);

    const [gridSizes, setGridSize] = useState({ width: "0", height: "0" });

    const updateGridSize = () => {
        if (!refImg.current) return;
        setGridSize({
            width: refImg.current.offsetWidth / gridPlethera,
            height: refImg.current.offsetHeight / gridPlethera
        });
    };

    useEffect(() => {
        updateGridSize();
        window.addEventListener("resize", updateGridSize);

        //set block rede
        // changeColor(0, 0, "rgba(225, 22, 22, 0.5)");
        // changeColor(1, 8, "rgba(225, 22, 22, 0.5)");
        // changeColor(3, 4, "rgba(225, 22, 22, 0.5)");
        // changeColor(6, 0, "rgba(225, 22, 22, 0.5)");
        // changeColor(7, 0, "rgba(225, 22, 22, 0.5)");
        // changeColor(8, 0, "rgba(225, 22, 22, 0.5)");
        // changeColor(9, 0, "rgba(225, 22, 22, 0.5)");
        // changeColor(9, 2, "rgba(225, 22, 22, 0.5)");   
        }, []);




    const handleClick = (row, col) => {
        //changeColor(takePosition.row, takePosition.col, "rgba(0, 0, 0, 0)");
        // changeColor(row, col, "rgba(22, 225, 63, 0.5)");
    }

    const gridBlocks = useMemo(() => {
        let blocks = [];
        for (let row = 0; row < gridPlethera; row++){
            for (let col = 0; col < gridPlethera; col++){
                console.log(row, col);
                blocks.push(
                    <div
                        key = {`${row} ${col}`}
                        className = {`${classes.block}`}
                        style = 
                        {
                            {
                            cursor: "pointer",
                            pointerEvents: "auto",
                            position: "absolute",

                            width: `${gridSizes.width}px`,
                            height: `${gridSizes.height}px`,
                            marginLeft: `${col * gridSizes.width}px`,
                            marginTop: `${row * gridSizes.height}px`,
                            }
                        }
                        onClick = {() => handleClick(row, col)}
                    ></div>
                );
            }
        }
        return blocks;
    }, [handleClick]);

    



    return (
        <>
            <img onLoad = {updateGridSize} ref = {refImg}  src={require("../../assets/CampingMap.webp")} alt="Map" className={`${classes.image}`} />
            {gridBlocks}
        </>
    );
}

export default Map;







