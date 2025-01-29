import React, { useState, useEffect } from "react";
import classes from "./Slider.module.css";

function Slider({precent, width, marginLeft, marginTop, setNewPercent}) {
  const [percent, setPercent] = useState(20);
  
  const handleMouseMove = (e) => {
    const slider = document.querySelector(`.${classes.slider}`);
    if (slider) {
      const rect = slider.getBoundingClientRect();
      let pos = ((e.clientX - rect.left) / rect.width) * 100;
      const newPercent = Math.min(Math.max(pos, 0), 100);
      precent(newPercent);
      setPercent(newPercent);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

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
  }, [setNewPercent]);

  return (
    <>
      <div className={classes.slider}
      style={{ width: width, marginLeft: marginLeft, marginTop: marginTop }}
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