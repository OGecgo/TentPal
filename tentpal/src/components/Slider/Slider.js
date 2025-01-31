import React, { useState, useEffect, useCallback } from "react";
import classes from "./Slider.module.css";

function Slider({precent, width, Left, Top, setNewPercent}) {
  const [percent, setPercent] = useState(20);
  
  const handleMouseMove = useCallback((e) => {
    const slider = document.querySelector(`.${classes.mySlider}`);
    if (slider) {
      const rect = slider.getBoundingClientRect();
      let pos = ((e.clientX - rect.left) / rect.width) * 100;
      const newPercent = Math.min(Math.max(pos, 0), 100);
      precent(newPercent);
      setPercent(newPercent);
    }
  }, [precent]);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);// use handeleMouseMove
    document.addEventListener("mouseup", handleMouseUp);// removeEventListener
  };

  useEffect(() => {
    if (setNewPercent !== undefined) setPercent(setNewPercent);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [setNewPercent, handleMouseMove, handleMouseUp]);

  return (
    <>
      <div className={classes.mySlider}
      style={{ width: width, left: Left, top: Top }}
      onMouseDown={handleMouseDown}
      onClick={handleMouseMove}
      >
        <div
          className={classes.sliderContent}
          onMouseDown={handleMouseDown}
          style={{ marginLeft: `calc(${percent}% - 8px)` }}
        ></div>
      </div>
    </>
  );
}

export default Slider;