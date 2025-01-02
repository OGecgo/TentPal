import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Headers/Header";

// CSS
import classes from "../../styles/CreateTent/ChoosePosition.module.css";

function ChoosePosition() {
  const imgRef = useRef(null);
  const gridSize = 10;
  const [mapSizes, setMapSizes] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current) {
        setMapSizes({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight,
        });
      }
    };

    // Устанавливаем начальные размеры
    handleResize();

    // Пересчитываем размеры при изменении окна
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const blockWidth = mapSizes.width / gridSize;
  const blockHeight = mapSizes.height / gridSize;

  // Генерация сетки
  const gridBlocks = Array.from({ length: gridSize }, (_, row) =>
    Array.from({ length: gridSize }, (_, col) => (
      <div
        key={`${row}-${col}`}
        style={{
          position: "absolute",
          width: `${blockWidth}px`,
          height: `${blockHeight}px`,
          border: "1px solid rgba(0, 0, 0, 0.2)",
          left: `${col * blockWidth}px`,
          top: `${row * blockHeight}px`,
          pointerEvents: "none", // Чтобы сетка не мешала кликам
        }}
      ></div>
    ))
  );

  return (
    <>
      <div className={classes.container} style={{ position: "relative" }}>
        {/* The map */}
        <img
          ref={imgRef}
          src={require("../../assets/CampingMap.webp")}
          alt="Map"
          className={classes.image}
        />
        {/* Give */}
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
      <div className="left">
        <Link
          className="linkButton"
          style={{
            top: "80%",
            fontSize: "calc(100% + 3vh)",
            position: "relative",
          }}
        >
          Exit
        </Link>
      </div>
      <Header />
    </>
  );
}

export default ChoosePosition;
