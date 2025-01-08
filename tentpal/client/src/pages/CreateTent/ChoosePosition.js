import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Headers/Header";
import classes from "../../styles/CreateTent/ChoosePosition.module.css";

function ChoosePosition() {
  const imgRef = useRef(null);
  const gridSize = 10;
  const [mapSizes, setMapSizes] = useState({ width: 0, height: 0 });

  const blockWidth = mapSizes.width > 0 ? mapSizes.width / gridSize : 0;
  const blockHeight = mapSizes.height > 0 ? mapSizes.height / gridSize : 0;

  const [gridBlocksColor, setGridBlocksColor] = useState(
    Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => ({
        color: "rgba(0, 0, 0, 0)",
      }))
    )
  );

  const [takePosition,  changePosition] = useState({ row: -1, col: -1 });
  const changeColor = (row, col, color) => {
    changePosition({row, col});
    console.log(takePosition);
    console.log(row, col);
    setGridBlocksColor((prevGrid) =>
      prevGrid.map((gridRow, rIndex) =>
        gridRow.map((block, cIndex) => {
          if (rIndex === row && cIndex === col && block.color !== "rgba(225, 22, 22, 0.5)") {
            return { ...block, color: `${color}` };
          }
          return block;
        })
      )
    );
  }

  const handleClick = (row, col) => {
    console.log(`Block clicked at row: ${row}, col: ${col}`);

    changeColor(takePosition.row, takePosition.col, "rgba(0, 0, 0, 0)");
    changeColor(row, col, "rgba(22, 225, 63, 0.5)");

  };


  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current) {
        setMapSizes({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight,
        });
      }
    };

    changeColor(0, 0, "rgba(225, 22, 22, 0.5)");
    changeColor(1, 8, "rgba(225, 22, 22, 0.5)");
    changeColor(3, 4, "rgba(225, 22, 22, 0.5)");
    changeColor(6, 0, "rgba(225, 22, 22, 0.5)");
    changeColor(7, 0, "rgba(225, 22, 22, 0.5)");
    changeColor(8, 0, "rgba(225, 22, 22, 0.5)");
    changeColor(9, 0, "rgba(225, 22, 22, 0.5)");
    changeColor(9, 2, "rgba(225, 22, 22, 0.5)");

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gridBlocks = Array.from({ length: gridSize }, (_, row) =>
    Array.from({ length: gridSize }, (_, col) => (
      <div
        key={`${row}-${col}`}
        style={{
          backgroundColor: `${gridBlocksColor[row][col].color}`,
          position: "absolute",
          width: `${blockWidth}px`,
          height: `${blockHeight}px`,
          border: "1px solid rgba(0, 0, 0, 0.2)",
          left: `${col * blockWidth}px`,
          top: `${row * blockHeight}px`,
          pointerEvents: "auto",
        }}
        onClick={() => handleClick(row, col)}
      ></div>
    ))
  );

  return (
    <>
      <div className={classes.container} style={{ position: "relative" }}>
        <img
          ref={imgRef}
          src={require("../../assets/CampingMap.webp")}
          alt="Map"
          className={classes.image}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${mapSizes.width}px`,
            height: `${mapSizes.height}px`,
          }}
        >
          {gridBlocks}
        </div>
      </div>

      {/* left panel and header */}
      <div className="left">
        <Link to = "/Home" className="linkButton" style={{ top: "80%", fontSize: "calc(100% + 3vh)", position: "relative", }}> Exit </Link>
      </div>
      <Header />
    </>
  );
}

export default ChoosePosition;
