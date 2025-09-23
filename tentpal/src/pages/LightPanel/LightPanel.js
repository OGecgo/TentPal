import classes from './LightPanel.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";

import LeftPanel from 'components/LeftPanel/LeftPanel';
import Header from 'components/Header/Header';
import Environmental from 'components/Environmental/Environmental';
import FrontTent from 'components/FrontTent/FrontTent';

import tentData from 'dataSet/tentConfig/tentData';
import lightData from 'dataSet/setings/lightData';

import StickLamp from './StickLamp/StickLamp';

import help from "assets/info/Page7.png"

function LightPanel() {
    const [SimpleLight, setSimpleLight] = useState(lightData.getSimpleLight());
    const [NightLight, setNightLight] = useState(lightData.getNightLight());

    const [color, setColor] = useState(lightData.getColor());
    const [valueColor, setValueColor] = useState(lightData.getValueColor());
    const [intensity, setIntensity] = useState(lightData.getIntensity());


    const getAdjustedColor = (hex) => {
        if (intensity < 0.5 && !NightLight) { setIntensity(0.75) }
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



    const setValues = () => {
        lightData.setSimpleLight(SimpleLight);
        lightData.setNightLight(NightLight);
        lightData.setColor(color);
        lightData.setValueColor(valueColor);
        lightData.setIntensity(intensity);
    }



    return (
        <>

            <div className="centerContent">
                <div className={classes.flexBlocks}>
                    <div className={classes.leftContent}>

                        <p>Choose a lighting mode</p>
                        <div className={classes.blockData}>
                            <p>Advanced Lighting</p>
                            <p>Night Light      </p>
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
                                <input className={SimpleLight ? ` ${classes.blockCheckBox} ${classes.blockCheckBoxOff}` : classes.blockCheckBox} type="checkbox" id="special-light2-toggle" disabled={SimpleLight} checked={!SimpleLight && !NightLight} onChange={() => { setNightLight(false); }} />
                            </div>
                        </div>

                        <p>Color Options</p>
                        <div className={classes.blockData}>
                            <p>Color Picker</p>
                            <p>Intensity</p>
                            <div className={classes.blockDataSizeUp}>
                                <input className={SimpleLight ? `blockSlider ${classes.rainbowLine}` : `blockSlider ${classes.whiteLine}`} type="range" id="opacityRange" min="0" max="1535" step="1" value={valueColor} onChange={SimpleLight ? (e) => setNewColor(Number(e.target.value)) : (e) => { setColor("#FFFFFF"); setValueColor(Number(e.target.value)) }} />
                            </div>
                            <div className={classes.blockDataSizeUp}>
                                <input className={"blockSlider"} type="range" id="opacityRange" min="0.5" max="1" step="0.01" value={intensity} disabled={NightLight} onChange={(e) => setIntensity(Number(e.target.value))} />
                            </div>
                        </div>


                        <div className={`${classes.blockData} ${classes.blockBottom}`}>
                            <p>Preset Light</p>
                            <div className={classes.blockDataSizeDown}>
                                <div className={SimpleLight ? `${classes.purpleBox} ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => { if (SimpleLight) setNewColor(272 ); }}></div>
                                <div className={SimpleLight ? `${classes.blueBox  } ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => { if (SimpleLight) setNewColor(649 ); }}></div>
                                <div className={SimpleLight ? `${classes.greenBox } ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => { if (SimpleLight) setNewColor(925 ); }}></div>
                                <div className={SimpleLight ? `${classes.yellowBox} ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => { if (SimpleLight) setNewColor(1262); }}></div>
                                <div className={SimpleLight ? `${classes.orangeBox} ${classes.colorBox}` : `${classes.colorBox}`} onClick={() => { if (SimpleLight) setNewColor(1386); }}></div>
                            </div>
                        </div>
                        <Link to={"/Home"} onClick={()=>{setValues()}} className={`linkApply ${classes.linkApplyLight}`}>Apply</Link>
                    </div>


                    <div className={classes.rightContent}>
                        <div className={classes.naturBlock}>
                            <Environmental time={"night"}/>
                        </div>
                        <div className={classes.blockRightHiden}>
                            <div className={classes.tentStyling}>
                                <FrontTent colorType={tentData.getTentType()} lightColor={finalColor} lightOn={1}/>
                            </div>
                            <div className={classes.nightMode}></div>
                            <div className={classes.stickStyling}>
                                <StickLamp lampColor={finalColor} />
                            </div>
                            <div className={`${classes.stickStyling} ${classes.rightStick}`}>
                                <StickLamp lampColor={finalColor} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <LeftPanel mode="userMode" levelPage={0} linkNext={{ link: "#", bool: false, lock: false }} linkPrev={{ link: "/Home", bool: true }} />
            <Header panel={true} message={'Light Section'} helpPage={help} />
        </>
    );
}

export default LightPanel;
