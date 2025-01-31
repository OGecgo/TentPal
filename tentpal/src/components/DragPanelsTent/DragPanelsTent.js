import React, {useState, useEffect} from "react";

import ImageBlock from "../ImageBlock/ImageBlock";
import MessageBox from "../MessageBox/MessageBox";

import classes from "./DragPanelsTent.module.css";

import NomalWebp from "../../assets/Normal.webp";
import RainWebp from "../../assets/Rain.webp";

function DragPanelsTent({returnTent}) {

    const [imageSrc, setImageSrc] = useState('');
    const [imageSrcWait, setImageSrcWait] = useState('');
    const [keyTent, setKeyTent] = useState("Drop Here");

    useEffect(() => {
        returnTent(imageSrc);
    },[imageSrc]);

    const setTent = () => {
        console.log(imageSrcWait);
        switch(imageSrcWait) {
            case "http://localhost:3000/static/media/Normal.618a79bb3d5aaddfcfa0.webp":
                setKeyTent("Normal");
                break;
            case "http://localhost:3000/static/media/Rain.8b04245781f66cfcf9da.webp":
                setKeyTent("Rain");
                break;
            case "Cold":
                setKeyTent("Cold");
                break;
            case "Hot":
                setKeyTent("Hot");
                break;
            default:
                break;
        }
        setImageSrc(imageSrcWait); 

    }
    
    return (
    <div className={classes.panels}>

        <div className={classes.leftPanel}>
            <MessageBox backgroundColor = "#bbbaca" message={keyTent} left = {"25%"} top = {"0%"} width = {"50%"} height={"8%"} />
            <div 
                className={classes.inputContaner} 
                onDrop={() => {setTent()}} //is droped
                onDragOver={(e) => {e.preventDefault()}} // valid drop (allow drop)
            >
                <ImageBlock  width = {"100%"} height = {"100%"} link = {imageSrc} alt = {`${imageSrc}`} drag = {false} returnLink = {setImageSrc}/>
            </div>
        </div>


        <div className={classes.rightPanel}>
            <MessageBox backgroundColor = "#bbbaca" message={"Normal"} left = {"10%"} top = {"5%"} width = {"35%"} height={"8%"} />
            <ImageBlock cursor = "pointer" backgroundColor = "#bbbaca" top = {"15%"} left = {"10%"} width = {"35%"} height = {"30%"} link = {NomalWebp} alt = "normal tent" drag = {true} returnLink = {setImageSrcWait}/>
            
            <MessageBox backgroundColor = "#bbbaca" message={"Cold"} left = {"55%"} top = {"5%"} width = {"35%"} height={"8%"} />
            <ImageBlock cursor = "pointer" backgroundColor = "#bbbaca" top = {"15%"} right = {"10%"} width = {"35%"} height = {"30%"} link = {""} alt = "cold tent" drag = {true} returnLink = {setImageSrcWait}/>
            
            <MessageBox backgroundColor = "#bbbaca" message={"Hot"} left = {"10%"} top = {"55%"} width = {"35%"} height={"8%"} />
            <ImageBlock cursor = "pointer" backgroundColor = "#bbbaca" bottom = {"5%"} left = {"10%"} width = {"35%"} height = {"30%"} link = "" alt = "hot tent" drag = {true} returnLink = {setImageSrcWait}/>
            
            <MessageBox  backgroundColor = "#bbbaca" message={"Rain"} left = {"55%"} top = {"55%"} width = {"35%"} height={"8%"} />
            <ImageBlock cursor = "pointer" backgroundColor = "#bbbaca" bottom = {"5%"} right = {"10%"} width = {"35%"} height = {"30%"} link = {RainWebp} alt = "rain tent" drag = {true} returnLink = {setImageSrcWait}/>
        </div>
    </div>
    );
}

export default DragPanelsTent;