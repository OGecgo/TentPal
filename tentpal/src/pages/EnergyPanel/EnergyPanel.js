
import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBatteryFull, faCloud, faTemperatureHalf, faDroplet } from "@fortawesome/free-solid-svg-icons";


import classes from './EnergyPanel.module.css';

import LeftPanel from 'components/LeftPanel/LeftPanel';
import Header from 'components/Header/Header';

import userData from 'dataSet/userData'
import energyData from "dataSet/setings/energyData";

function EnergyPanel() {


    const [isAirCondition, setIsAirCondition] = useState(energyData.getIsAirCondition());
    const [airConditionTemperature, setAirConditionTemperature] = useState(energyData.getAirConditionTemperature());
    const [isElecticBlanket, setIsElectricBlanket] = useState(energyData.getIsElecticBlanket())


    let temperature = 23;
    let moisture = 43;

    if (userData.getTypeWeather() === "cloud"){
        temperature = 25;
        moisture = 50;
    }
    else if (userData.getTypeWeather() === "rain"){
        temperature = 20;
        moisture = 70;
    }
    else if (userData.getTypeWeather() === "sunny"){
        temperature = 35;
        moisture = 30;
    }
    else if (userData.getTypeWeather() === "snow"){
        temperature = 1;
        moisture = 35;
    }



    const generateEnergyConsumption = () => {
        if (!isAirCondition && !isElecticBlanket)
            return (Math.random()).toFixed(2);

        else if (!isAirCondition && isElecticBlanket)
            return (2 + Math.random() * 5).toFixed(2);

        else if (isAirCondition && !isElecticBlanket)
            return (15 + Math.random() * 10).toFixed(2);
        
        else
            return (25 + Math.random() * 15).toFixed(2);

    }

    const [energyConsumption, setEnergyConsumption] = useState(generateEnergyConsumption());

    useEffect(() =>{
        setEnergyConsumption(generateEnergyConsumption());
    }, [isAirCondition, isElecticBlanket])

    const setValue = () => {
        energyData.setIsAirCondition(isAirCondition);
        energyData.setAirConditionTemperature(airConditionTemperature);
        energyData.setIsElecticBlanket(isElecticBlanket);
    }

    return (
        <>

            <div className="centerContent" >
                <div className={` ${classes.itemBox} ${classes.topLeft}`}>
                    <p className={`${classes.title} ${classes.titleGreen}`}>Weather Status</p>
                    <div className={classes.textBox}>
                        <p className={classes.textP}><FontAwesomeIcon icon={faCloud} /> Weather: {userData.getTypeWeather()}</p>
                        <p className={classes.textP}><FontAwesomeIcon icon={faTemperatureHalf} /> Temperature: {temperature}°C</p>
                        <p className={classes.textP}><FontAwesomeIcon icon={faDroplet} /> Moisture: {moisture}%  </p>
                    </div>
                </div>


                <div className={`${classes.itemBox} ${classes.topRight}`}>
                    <p className={`${classes.title} ${classes.titleYellow}`}>Energy Production</p>
                    <div className={classes.textBox}>
                        <p className={classes.textP}><FontAwesomeIcon icon={faBolt} /> Current energy generation: 15.2 Wh</p>
                        <p className={classes.textP}><FontAwesomeIcon icon={faBatteryFull} /> Stored energy level: 15%</p>
                        <p className={`${classes.textWarning} ${classes.textP}`} style={{ color: "red", fontWeight: "bold" }}>⚠️ Warning: Energy is below 20%. <br/> Please conserve the remaining power</p>
                    </div>
                </div>

                <div className={`${classes.itemBox} ${classes.bottomLeft}`}>
                    <p className={`${classes.title} ${classes.titleYellow}`}>Energy Usage</p>
                    <p className={`${classes.textBox} ${classes.textP}`}><FontAwesomeIcon icon={faBolt} /> Current Energy Use: {energyConsumption}Wh</p>
                </div>

                <div className={`${classes.itemBox} ${classes.bottomRight}`}>
                    <p className={classes.title}>Options</p>

                    <div className={classes.options}>
                        <div className={classes.leftOption}>
                            <div className={classes.sliterTopBlock}>
                                <p className={classes.textP}>Electric Blanket:</p>
                                <input className={classes.slider} type="checkbox" checked={isElecticBlanket} onChange={() => {isElecticBlanket ? setIsElectricBlanket(false) : setIsElectricBlanket(true);}} />
                            </div>
                            <div className={classes.sliterTopBlock}>
                                <p className={classes.textP}>Air Conditioning:</p>
                                <input className={classes.slider} type="checkbox" checked={isAirCondition} onChange={() => {isAirCondition ? setIsAirCondition(false) : setIsAirCondition(true);}} />
                            </div>

                        </div>
                        <div className={classes.rightOption} >
                            <p className={classes.textP}>AC Temperature: {isAirCondition ? airConditionTemperature + '°C' : '-'}</p>
                            {isAirCondition ? 
                                <>
                                    <button className={classes.buttonTemp} onClick={() => { if (airConditionTemperature < 30) { setAirConditionTemperature((e) => e + 1); } }} variant="outline"> + </button>
                                    <button className={classes.buttonTemp} onClick={() => { if (airConditionTemperature > 18) { setAirConditionTemperature((e) => e - 1); } }} variant="outline"> - </button>
                                </>
                                : 
                                <></>
                            }
                        </div>

                    </div>
                </div>
                                        
                <Link to = {"/Home"} onClick={()=>{setValue()}} className={`linkApply ${classes.linkApplyEnergy}`}>Apply</Link>

            </div>



            <LeftPanel mode="userMode" levelPage={0} linkNext={{ link: "#", bool: false, lock: false }} linkPrev={{ link: "/Home", bool: true }} />
            <Header userOn={true} panel={true} message={"Weather & Energy Panel"} helpPage={"energy"} />
        </>
    );
}
export default EnergyPanel;