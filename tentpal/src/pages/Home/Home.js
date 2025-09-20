
import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import classes from "./Home.module.css"

import Header from "components/Header/Header"
import LeftPanel from "components/LeftPanel/LeftPanel"

import lightingImg from "assets/simbolsImg/lighting.webp"
import lampImg from "assets/simbolsImg/lamp.png"
import mapPinImg from "assets/simbolsImg/mapPin.png"
import foodImg from "assets/simbolsImg/food.png"
import tentImg from "assets/simbolsImg/tent.svg"
import sosImg from "assets/simbolsImg/sosPin.svg"

import tentData from "dataSet/tentConfig/tentData"
import userData from "dataSet/userData"

function Home() {

    const [message, setMessage] = useState("");
    const [colorType, setColorType] = useState("default");

    useEffect(() => {
        randomWeather();
        randomIntensityWeather();
        userData.setUserMode(true);
    }, []);

    useEffect(() => {
        let n = 2;
        if (userData.getIntensityWeather() !== "good") n = 1;
        setMyMessage(n);
    }, [userData.getIntensityWeather()]);

    const randomWeather = () => {
        let w = Math.floor(Math.random() * 4);
        if (w === 0) {
            userData.setTypeWeather("normal");
        }
        else if (w === 1) {
            userData.setTypeWeather("warm");
        }
        else if (w === 2) {
            userData.setTypeWeather("cold");
        }
        else {
            userData.setTypeWeather("rain");
        }
    }

    const randomIntensityWeather = () => {
        if ( Math.random() > 0.7) userData.setIntensityWeather("warning");
        else userData.setIntensityWeather("good");
    }


    const setMyMessage = (typeM) => {
        if (typeM === 0) {
            if (!window.confirm("If you call sos you will be can not move until they save you")) {
                return;
            }
            setMessage("SOS Call Sent. Dont Move");
            setColorType("warning");
        }
        else if (typeM === 1) {
            setMessage("--->>Warning !!! Press SOS Map and follow the path<<---");
            setColorType("warning");
        }
        else if (typeM === 2) {
            if (userData.getTypeWeather() !== tentData.getTentType()){
                if (userData.getTypeWeather() !== "normal") 
                    setMessage(`Weather ${userData.getTypeWeather()}. You can change tha tent to anti-${userData.getTypeWeather()}`);
                else 
                    setMessage(`Weather ${userData.getTypeWeather()}. You can change tha tent to normal`);
            }
            else setMessage(`Weather ${userData.getTypeWeather()}`);
            setColorType("default");
        }
    }



    return (
        <>
            <div className="centerContent">
                <div className={classes.colLevels}>

                    {userData.getIntensityWeather() === "warning" ?
                        <>
                            <div className={classes.rowBlock}>
                                <div className={` ${classes.blockButton} ${classes.sos}`}>
                                    <button className={classes.linkButton}  onClick={() =>{setMyMessage(0)}}>
                                        <p className={classes.sosP}>Call SOS</p>
                                    </button>
                                </div>
                            </div>
                            <div className={classes.rowBlock}>
                                <div className={` ${classes.blockButton} ${classes.sos}`}>
                                    <Link className={classes.linkButton} to="/setTent">
                                        <img src={tentImg} className={classes.sizeImg}></img>
                                        Set New Tent
                                    </Link>
                                </div>
                                <div className={` ${classes.blockButton} ${classes.sos}`}>
                                    <Link className={classes.linkButton} to="/sosMap">
                                        <img src={sosImg} className={classes.sizeImg}></img>
                                        <p className={classes.sosP}>SOS Map</p>
                                    </Link>
                                </div>
                            </div>
                        </>
                        :
                        <></>
                    }

                    <div className={classes.rowBlock}>
                        <div className={` ${classes.blockButton} ${classes.energy}`}>
                            <Link className={classes.linkButton} to="/energyPanel">
                                <img src={lightingImg} className={classes.sizeImg}></img>
                                Energy Panel | Weather Status
                            </Link>
                        </div>
                        <div className={` ${classes.blockButton} ${classes.energy}`}>
                            <Link className={classes.linkButton} to="/lightPanel">
                                <img src={lampImg} className={classes.sizeImg}></img>
                                Linght Panel
                            </Link>
                        </div>
                    </div>
                    <div className={classes.rowBlock}>
                        <div className={` ${classes.blockButton} ${classes.events}`}>
                            <Link className={classes.linkButton} to="/eventsMap">
                                <img src={mapPinImg} className={classes.sizeImg}></img>
                                Events Map
                            </Link>
                        </div>
                        <div className={` ${classes.blockButton} ${classes.events}`}>
                            <Link className={classes.linkButton} to="/order">
                                <img src={foodImg} className={classes.sizeImg}></img>
                                Food
                            </Link>
                        </div>
                    </div>

                    {userData.getIntensityWeather() !== "warning" ?
                        <>
                            <div className={classes.rowBlock}>
                                <div className={` ${classes.blockButton} ${classes.sos}`}>
                                    <Link className={classes.linkButton} to="/setTent">
                                        <img src={tentImg} className={classes.sizeImg}></img>
                                        Set New Tent
                                    </Link>
                                </div>
                                <div className={` ${classes.blockButton} ${classes.sos}`}>
                                    <Link className={classes.linkButton} to="/sosMap">
                                        <img src={sosImg} className={classes.sizeImg}></img>
                                        SOS Map
                                    </Link>
                                </div>
                            </div>
                            <div className={classes.rowBlock}>
                                <div className={` ${classes.blockButton} ${classes.sos}`}>
                                    <button className={classes.linkButton} onClick={() =>{setMyMessage(0)}}>
                                        <p className={classes.sosP}>Call SOS</p>
                                    </button>
                                </div>
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </div>




            <LeftPanel mode="userMode" levelPage={2} linkNext={{ link: "#", bool: false, lock: false }} linkPrev={{ link: "#", bool: false, lock: false }} />
            <Header panel={true} message={message} colorType={colorType} helpPage={"light"} userOn={true} />
        </>
    )

}

export default Home;