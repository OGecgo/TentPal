import React, {useState, useEffect} from "react";

import ImageBlock from "../ImageBlock/ImageBlock";
import MessageBox from "../MessageBox/MessageBox";

import classes from "./DragPanelsTent.module.css";

import NomalWebp from "../../assets/Normal.webp";
import RainWebp from "../../assets/Rain.webp";

function DragPanelsTent({returnTent}) {

    const [imageSrc, setImageSrc] = useState('');
    const [imageSrcWait, setImageSrcWait] = useState('');

    useEffect(() => {
        returnTent(imageSrc);
    },[imageSrc]);
    return (
    <div className={classes.panels}>
        <div className={classes.leftPanel}>
            <div 
                className={classes.inputContaner} 
                onDrop={(e) => {setImageSrc(imageSrcWait)}} //is droped
                onDragOver={(e) => {e.preventDefault()}} // valid drop (allow drop)
            >
                <ImageBlock  width = {"100%"} height = {"100%"} link = {imageSrc} alt = {`Dropped ${imageSrc}`} drag = {false} returnLink = {setImageSrc}/>
            </div>
        </div>
        <div className={classes.rightPanel}>
            <MessageBox message={"Normal"} left = {"10%"} top = {"5%"} width = {"35%"} height={"8%"} />
            <ImageBlock cursor = "pointer" backgroundColor = "#bbbaca" top = {"15%"} left = {"10%"} width = {"35%"} height = {"30%"} link = {NomalWebp} alt = "normal tent" drag = {true} returnLink = {setImageSrcWait}/>
            
            <MessageBox message={"Cold"} left = {"55%"} top = {"5%"} width = {"35%"} height={"8%"} />
            <ImageBlock cursor = "pointer" backgroundColor = "#bbbaca" top = {"15%"} right = {"10%"} width = {"35%"} height = {"30%"} link = {""} alt = "cold tent" drag = {true} returnLink = {setImageSrcWait}/>
            
            <MessageBox message={"Hot"} left = {"10%"} top = {"55%"} width = {"35%"} height={"8%"} />
            <ImageBlock cursor = "pointer" backgroundColor = "#bbbaca" bottom = {"5%"} left = {"10%"} width = {"35%"} height = {"30%"} link = "" alt = "hot tent" drag = {true} returnLink = {setImageSrcWait}/>
            
            <MessageBox message={"Rain"} left = {"55%"} top = {"55%"} width = {"35%"} height={"8%"} />
            <ImageBlock cursor = "pointer" backgroundColor = "#bbbaca" bottom = {"5%"} right = {"10%"} width = {"35%"} height = {"30%"} link = {RainWebp} alt = "rain tent" drag = {true} returnLink = {setImageSrcWait}/>
        </div>
    </div>
    );
}

export default DragPanelsTent;