



import React, {useState, useEffect, useMemo} from "react";

import classes from "./Map.module.css";

const gridSize = 10;

function Map() {

    const [mapSizes, setMapSize] = useState({ width: 0, height: 0 });

    const blockWidth = mapSizes.width > 0
        ? mapSizes.width / gridSize
        : 0;
    const blockHeight = mapSizes.height > 0 
        ? mapSizes.height / gridSize
        : 0;

    const changeColor = (row, col, color) => {
        setBackgroundColor(color);
    }

    useEffect(() => {

            //set block rede
            // changeColor(0, 0, "rgba(225, 22, 22, 0.5)");
            // changeColor(1, 8, "rgba(225, 22, 22, 0.5)");
            // changeColor(3, 4, "rgba(225, 22, 22, 0.5)");
            // changeColor(6, 0, "rgba(225, 22, 22, 0.5)");
            // changeColor(7, 0, "rgba(225, 22, 22, 0.5)");
            // changeColor(8, 0, "rgba(225, 22, 22, 0.5)");
            // changeColor(9, 0, "rgba(225, 22, 22, 0.5)");
            // changeColor(9, 2, "rgba(225, 22, 22, 0.5)");
        }
    , []);

    const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0)");

    const [takePosition, changePosition] = useState({ row: -1, col: -1 });

    const handleClick = (row, col) => {
        changeColor(takePosition.row, takePosition.col, "rgba(0, 0, 0, 0)");
        changeColor(row, col, "rgba(22, 225, 63, 0.5)");
    }

    const gridBlocks = useMemo(() => {
        let blocks = [];
        for (let row = 0; row < gridSize; row++){
            for (let col = 0; col < gridSize; col++){
                blocks.push(
                    <div
                        key = {`${row}-${col}`}
                        style = 
                        {
                            {
                            cursor: "pointer",
                            backgroundColor: `${backgroundColor}`,
                            position: "absolute",
                            width: `${blockWidth}px`,
                            height: `${blockHeight}px`,
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                            left: `${col * blockWidth}px`,
                            top: `${row * blockHeight}px`,
                            pointerEvents: "auto",
                            }
                        }
                        onClick = {() => handleClick(row, col)}
                    ></div>
                );
            }
        }
        return blocks;
    }, [handleClick, blockWidth, blockHeight, backgroundColor]);




    return (
        <>
            <img
            src={require("../../assets/CampingMap.webp")}
            alt="Map"
            className={classes.image}
            style={{ width: `${mapSizes.width}px`, height: `${mapSizes.height}px` }}
            />
            <div
            style =
            {
                {
                position: "absolute",
                top: 0,
                left: 0,
                width: `${mapSizes.width}px`,
                height: `${mapSizes.height}px`,
            }
            }
            > {gridBlocks} </div>
        </>
    );
}

export default Map;







