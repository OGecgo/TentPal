import classes from './LightPanel.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";

import LeftPanel from 'components/LeftPanel/LeftPanel';
import Header from 'components/Header/Header';
import MessageBox from 'components/MessageBox/MessageBox';


import Environmental from './Environmental/Environmental';
import StickLamp from './StickLamp/StickLamp';
import FrontTent from './FrontTent/FrontTent';

function LightPanel() {
    const [SimpleLight, setSimpleLight] = useState(true);
    const [NightLight, setNightLight] = useState(false);

    const [color, setColor] = useState("#09D4DA");
    const [valueColor, setValueColor] = useState(768);
    const [intensity, setIntensity] = useState(0.75);


    const getAdjustedColor = (hex) => {
        if (intensity < 0.5 && !NightLight){ setIntensity(0.75) }
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${intensity})`;
    }


    const finalColor = getAdjustedColor(color)


    const changeLightMode = (mode) => {
        if (mode === 'simple' && !SimpleLight) {
            setSimpleLight(true);
            setNightLight(false);
            setNewColor(valueColor);
        }
        else if (mode === 'complex' && SimpleLight) {
            setSimpleLight(false);
            setColor("#FFFFFF");
        }
    }


    const setNewColor = (value) => {
        var r = 0;
        var g = 0;
        var b = 0;
        if (value < 256) {
            // Red to Magenta
            r = 255;
            g = 0;
            b = value;
        }
        else if (value < 512) {
            // Magenta to Blue
            r = 255 - (value - 256);
            g = 0;
            b = 255;
        }
        else if (value < 768) {
            // Blue to Cyan
            r = 0;
            g = value - 512;
            b = 255;    
        }
        else if (value < 1024) {
            // Cyan to Green
            r = 0;
            g = 255;
            b = 255 - (value - 768);
        }
        else if (value < 1280) {
            // Green to Yellow
            r = value - 1024;
            g = 255;
            b = 0;
        }
        else {
            // Yellow to Red
            r = 255;
            g = 255 - (value - 1280);
            b = 0;
        }
        setColor("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
        setValueColor(value);
    }







    return (
        <>

            <div className="centerContent">

                <div className={classes.leftContent}>

                    <div className={classes.upperPanel}>
                        <MessageBox message={"Παρακαλώ επιλέξτε είδος φωτισμού"} width="calc(100% - 40px)" height={"30%"} top={"10%"} left={"20px"} />
                        <div className={classes.blockData}>
                            <div className={classes.blockDataSizeUp}>
                                <MessageBox backgroundColor={"rgba(0, 0, 0, 0)"} message={"Σύνθετος Φωτισμός"} height={"50%"} width={"50%"} />
                            </div>
                            <div className={classes.blockDataSizeUp}>
                                <MessageBox backgroundColor={"rgba(0, 0, 0, 0)"} message={"Νυχτερινό Φως"} height={"50%"} width={"50%"} />
                            </div>
                            <div className={classes.blockDataSizeUp}>
                                <label className={classes.labelLeft}> on </label>
                                <input className={classes.blockCheckBox} type="checkbox" id="special-light2-toggle" checked={SimpleLight} onChange={() => changeLightMode('simple')} />
                                <label className={classes.labelRight}> off </label>
                                <input className={classes.blockCheckBox} type="checkbox" id="special-light1-toggle" checked={!SimpleLight} onChange={() => changeLightMode('complex')} />
                            </div>
                            <div className={classes.blockDataSizeUp}>
                                <label className={classes.labelLeft}> on </label>
                                <input className={SimpleLight ? ` ${classes.blockCheckBox} ${classes.blockCheckBoxOff}` : classes.blockCheckBox} type="checkbox" id="special-light2-toggle" disabled={SimpleLight} checked={!SimpleLight && NightLight} onChange={() => { setNightLight(true); setColor('#FFFFFF'); setIntensity(0.3); }} />
                                <label className={classes.labelRight}> off </label>
                                <input className={SimpleLight ? ` ${classes.blockCheckBox} ${classes.blockCheckBoxOff}` : classes.blockCheckBox} type="checkbox" id="special-light2-toggle" disabled={SimpleLight} checked={!SimpleLight && !NightLight} onChange={() => { setNightLight(false);}} />
                            </div>

                        </div>
                    </div>

                    <div className={classes.midlePanel}>
                        <MessageBox message={"Color Options"} width="calc(100% - 40px)" height={"30%"} top={"10%"} left={"20px"} />
                        <div className={classes.blockData}>
                            <div className={classes.blockDataSizeUp}>
                                <MessageBox backgroundColor={"rgba(0, 0, 0, 0)"} message={"Επιλογή χρώματος"} height={"50%"} width={"50%"} />
                            </div>
                            <div className={classes.blockDataSizeUp}>
                                <MessageBox backgroundColor={"rgba(0, 0, 0, 0)"} message={"Ένταση"} height={"50%"} width={"50%"} />
                            </div>
                            <div className={classes.blockDataSizeUp}>
                                <input className={SimpleLight ? `blockSlider ${classes.rainbowLine}` : `blockSlider ${classes.whiteLine}`} type="range" id="opacityRange" min="0" max="1535" step="1" value={valueColor} onChange={SimpleLight ? (e) => setNewColor(Number(e.target.value)) : (e) => { setColor("#FFFFFF"); setValueColor(Number(e.target.value)) }} />
                            </div>
                            <div className={classes.blockDataSizeUp}>
                                <input className={"blockSlider"} type="range" id="opacityRange" min="0.5" max="1" step="0.01" value={intensity} disabled={NightLight} onChange={(e) => setIntensity(Number(e.target.value))} />
                            </div>
                        </div>
                        <div className={`${classes.blockData} ${classes.blockBottom}`}>
                            <div className={classes.blockDataSizeDown}>
                                <MessageBox backgroundColor={"rgba(0, 0, 0, 0)"} message={"Εκδηλώσεις"} height={"50%"} width={"50%"} />
                            </div>                        
                            <div className={classes.blockDataSizeDown}>
                                <div className={SimpleLight ? `${classes.purpleBox} ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => {if (SimpleLight)setNewColor(272 );}}></div>
                                <div className={SimpleLight ? `${classes.blueBox  } ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => {if (SimpleLight)setNewColor(649 );}}></div>
                                <div className={SimpleLight ? `${classes.greenBox } ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => {if (SimpleLight)setNewColor(925 );}}></div>
                                <div className={SimpleLight ? `${classes.yellowBox} ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => {if (SimpleLight)setNewColor(1262);}}></div>
                                <div className={SimpleLight ? `${classes.orangeBox} ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => {if (SimpleLight)setNewColor(1386);}}></div>
                            </div>
                        </div>
                        <Link to = {"#"} className={`linkApply ${classes.linkApplyLight}`}>Apply</Link>
                    </div>
                </div>



                <div className={classes.rightContent}>
                    <Environmental />

                    <StickLamp width={"2%"} height={"20%"} left={"30%"} top={"60%"} lampColor={finalColor} />
                    <StickLamp width={"2%"} height={"20%"} left={"68%"} top={"60%"} lampColor={finalColor} />

                    <StickLamp width={"2%"} height={"30%"} left={"15%"} top={"55%"} lampColor={finalColor} />
                    <FrontTent width={"60%"} height={"40%"} left={"20%"} top={"44%"} color={"rgba(53, 53, 53, 0.99)"} light={finalColor} />

                    <StickLamp width={"2%"} height={"30%"} left={"83%"} top={"55%"} lampColor={finalColor} />

                </div>

            </div>









            <LeftPanel mode="userMode" levelPage={0} linkNext={{ link: "#", bool: false, lock: false }} linkPrev={{ link: "/Home", bool: true }} />
            <Header panel={"messageBox"} message={'Light Section'} helpPage={"light"} />
        </>
    );
}

export default LightPanel;
