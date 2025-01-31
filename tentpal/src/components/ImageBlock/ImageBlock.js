import React from "react";
import classes from "./ImageBlock.module.css";

function ImageBlock({
    top, left, right, bottom,
    width, height, backgroundColor,
    cursor = "default", link = "" , alt = "",
    drag = false, returnLink = () => {}}) {
    
    const handleDragStart = (e) => {
        returnLink(e.target.src);
    }

    return (
        <div className={`${classes.block}`} style={{top: top, left: left, right: right, bottom: bottom, width: width, height: height, backgroundColor: backgroundColor}}>
        <img 
            style={{ cursor: cursor }} 
            className={classes.img} 
            src={link} alt={alt} draggable={drag} 
            onDragStart={handleDragStart} 
        />
        </div>
    );
}

export default ImageBlock;