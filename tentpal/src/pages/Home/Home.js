
import React    from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import classes from "./Home.module.css"

import Header    from "components/Header/Header"
import LeftPanel from "components/LeftPanel/LeftPanel"

import lightingImg from "assets/simbolsImg/lighting.webp"
import lampImg     from "assets/simbolsImg/lamp.png"
import mapPinImg   from "assets/simbolsImg/mapPin.png"
import eventImg    from "assets/simbolsImg/event.png"
import foodImg     from "assets/simbolsImg/food.png"
import tentImg     from "assets/simbolsImg/tent.svg"
import sosImg      from "assets/simbolsImg/sosPin.svg"

import userData from "dataSet/userData"

function Home (){

    useEffect(() => {
        randomWeather();
        randomIntensityWeather();
    }, []);

    const randomWeather = () => {
        let w = Math.floor(Math.random()*4);
        if (w === 0){
            userData.setTypeWeather("norma");
        }
        else if (w === 1){
            userData.setTypeWeather("warm");
        }
        else if (w === 2){
            userData.setTypeWeather("cold");
        }
        else{
            userData.setTypeWeather("rain");
        }
    }

    const randomIntensityWeather = () => {
        let i = Math.floor(Math.random()*2);
        if (i === 0){
            i = Math.floor(Math.random()*2);
            if (i == 0){
                userData.setIntensityWeather("warning");
            }
        }
        else{
            userData.setIntensityWeather("good");
        }

    }



    return(
        <>
            <div className="centerContent">
                <div className={classes.colLevels}>
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
                            <Link className={classes.linkButton} to="#">
                                <img src={mapPinImg} className={classes.sizeImg}></img>
                                Places For Research
                            </Link>
                        </div>
                        <div className={` ${classes.blockButton} ${classes.events}`}>
                            <Link className={classes.linkButton} to="#">
                                <img src={eventImg} className={classes.sizeImg}></img>
                                Events
                            </Link>
                        </div>
                    </div>
                    <div className={classes.justBlock}>
                        <div className={` ${classes.blockButton} ${classes.events}`}>
                            <Link className={classes.linkButton} to="/order">
                                <img src={foodImg} className={classes.sizeImg}></img>
                                Food
                            </Link>
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
                            <Link className={classes.linkButton} to="#">
                                <img src={sosImg} className={classes.sizeImg}></img>
                                SOS Map
                            </Link>
                        </div>
                    </div>                    
                </div>
            </div>




            <LeftPanel mode="userMode" levelPage={2} linkNext={{ link: "#", bool: false, lock: false }} linkPrev={{ link: "#", bool: false, lock: false }} /> 
            {userData.getIntensityWeather() === "good" ?
                <Header panel={true} message={`Weather ${userData.getTypeWeather()}`} helpPage={"light"} userOn={true}/>
                :
                <Header panel={true} message={"--->>Warning !!! Press SOS Map and follow the path<<---"} colorType={"warning"} helpPage={"light"} userOn={true}/>
            }
        </>
    )

}

export default Home 