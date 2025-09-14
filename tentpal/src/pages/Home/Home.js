
import React    from "react"
import { Link } from "react-router-dom"

import classes from "./Home.module.css"

import Header    from "components/Header/Header"
import LeftPanel from "components/LeftPanel/LeftPanel"

import lightingImg from "assets/simbolsImg/lighting.webp"
import lampImg     from "assets/simbolsImg/lamp.png"
import mapPinImg   from "assets/simbolsImg/mapPin.png"

function Home (){
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
                                <img src={mapPinImg} className={classes.sizeImg}></img>
                                Events
                            </Link>
                        </div>
                    </div>
                    <div className={classes.justBlock}>
                        <div className={classes.blockButton}>
                            <Link className={classes.linkButton} to="/order">Food</Link>
                        </div>
                    </div>
                    <div className={classes.rowBlock}>
                        <div className={classes.blockButton}>
                            <Link className={classes.linkButton} to="/setTent">Set New Tent</Link>
                        </div>
                        <div className={classes.blockButton}>
                            <Link className={classes.linkButton} to="#">Sos</Link>
                        </div>
                    </div>                    
                </div>
            </div>




            <LeftPanel mode="userMode" levelPage={2} linkNext={{ link: "#", bool: false, lock: false }} linkPrev={{ link: "#", bool: false, lock: false }} /> 
            <Header panel={"messageBox"} message={'Home'} helpPage={"light"} />
        </>
    )

}

export default Home 