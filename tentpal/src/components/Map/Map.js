



import React, {useRef, useState, useEffect, useMemo} from "react";

import classes from "./Map.module.css";

const gridPlethera = 16 ; // only for /2

function Map({colorChanged}) {
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
        window.addEventListener("resize", updateGridSize);

        //make array without colors
        let array = [];
        for (let row = 0; row < gridPlethera / 2; row++){
            for (let col = 0; col < gridPlethera; col++){
                array.push("rgba(0, 0, 0, 0)");
            }
        }
        setArrayColors(array);

        //set block rede
        changeColor(0, 0, "rgba(173, 56, 56, 0.62)");
        changeColor(0, 1, "rgba(173, 56, 56, 0.62)");
        changeColor(5, 6, "rgba(184, 142, 35, 0.52)");
    }, []);


    const [arrayColors, setArrayColors] = useState([]);

    const changeColor = (row, col, color) => {
        let pos = (row * gridPlethera) + col;

        //setArrayColors giv to parametrs without changing the colorArray and whatever i want without changing from asichronus
        setArrayColors((oldArray) => {
            let newArray = [...oldArray]; //easy and clean copy array
            newArray[pos] = color;
            return newArray;
        });
    }

    const [selectedPosition, setSelectedPosition] = useState({ row: -1, col: -1 });

    const handleClick = (row, col) => {
        setSelectedPosition({ row, col });

        //change color from SelectLocation
        let color = arrayColors[(row * gridPlethera) + col];
        if (color !== 'rgba(173, 56, 56, 0.62)' && color !== 'rgba(184, 142, 35, 0.52)') color = 'rgba(82, 194, 84, 0.52)'; 
        colorChanged(color);
    }

    const gridBlocks = useMemo(() => {
        let blocks = [];
        for (let row = 0; row < gridPlethera / 2; row++){
            for (let col = 0; col < gridPlethera; col++){
                let color = arrayColors[(row * gridPlethera) + col];
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

                            backgroundColor: `${ 
                                (selectedPosition.row === row && selectedPosition.col === col) 
                                && (color !== 'rgba(173, 56, 56, 0.62)' && color !== 'rgba(184, 142, 35, 0.52)')
                                ? 'rgba(82, 194, 84, 0.52)' 
                                :  color}`,

                            width: `${gridSizes.width}px`,
                            height: `${gridSizes.height * 2}px`,
                            marginLeft: `${col * gridSizes.width}px`,
                            marginTop: `${row * gridSizes.height * 2}px`,
                            }
                        }
                        onClick = {() => handleClick(row, col)}
                    ></div>
                );
            }
        }
        return blocks;
    }, [gridSizes, selectedPosition, arrayColors]);

    



    return (
        <>
            <img onLoad = {updateGridSize} ref = {refImg}  src={require("assets/CampingMap.webp")} alt="Map" className={`${classes.image}`} />
            {gridBlocks}
        </>
    );
}

export default Map;







