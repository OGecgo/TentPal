import React from "react";
import { useEffect, useState } from "react";

import classes from "./SetTent.module.css";


import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import Environmental from "components/Environmental/Environmental";
import FrontTent from "components/FrontTent/FrontTent";

import tentData from "dataSet/tentConfig/tentData";
import userData from "dataSet/userData";

// import normalTentImg from "assets/tent/Normal.webp"
import warmTentImg   from "assets/tent/Warm.webp"
import rainTentImg   from "assets/tent/Rain.webp"
import coldTentImg   from "assets/tent/Cold.webp"

function SetTent(){
    
    const [message, setMessage] = useState("Drag and Drop tent you want to right block");
    // change useData
    const [keyTent, setKeyTent] = useState(tentData.getTentType());
    const [buttonNext, setButtonNext] = useState(tentData.getTentType() === "none");


    useEffect(() => {
        if (keyTent === "none") return;
        tentData.setTentType(keyTent);
    },[keyTent]);


    const setTent = (e) => {
        console.log(e);
        switch(e) {
            case "":
                setKeyTent("normal");
                setMessage("Now you can continue to Home page");
                setButtonNext(false);
                break;
            case "http://localhost:3000/static/media/Rain.8b04245781f66cfcf9da.webp":
                setKeyTent("rain");
                setMessage("Now you can continue to Home page");
                setButtonNext(false);
                break;
            case "http://localhost:3000/static/media/Cold.9920d10373921d497ce5.webp":
                setKeyTent("cold");
                setMessage("Now you can continue to Home page");
                setButtonNext(false);
                break;
            case "http://localhost:3000/static/media/Warm.618a79bb3d5aaddfcfa0.webp":
                setKeyTent("warm");
                setMessage("Now you can continue to Home page");
                setButtonNext(false);
                break;
            default:
                break;
        }
    }


    return(
        <>
            <div className="centerContent">
                <div className={classes.mainPanel}>
                    <div className={classes.panel}>

                        <div className={classes.tentBlock}>
                            <div className={classes.blockItem}>
                                <p className={classes.nameTent}>AntiWarm</p>
                                <div className={classes.backImg}>
                                    <img src={warmTentImg} alt="WarmImg"></img>
                                </div>
                            </div>
                            <div className={classes.blockItem}>
                                <p className={classes.nameTent}>Normal</p>
                                <div className={classes.backImg}>
                                    <img src={null} alt="NormalImg"></img>
                                </div>                            
                            </div>
                            <div className={classes.blockItem}>
                                <p className={classes.nameTent}>AntiCold</p>
                                <div className={classes.backImg}>
                                    <img src={coldTentImg} alt="ColdImg"></img>
                                </div>                            </div>
                            <div className={classes.blockItem}>
                                <p className={classes.nameTent}>AntiRain</p>
                                <div className={classes.backImg}>
                                    <img src={rainTentImg} alt="RainImg"></img>
                                </div>                            </div>

                        </div>
                    </div>


                    <div className={classes.panel}>
                        <div className={classes.tentBlock} onDrop={(e)=>setTent(e.dataTransfer.getData("text/plain"))} onDragOver={(e) => {e.preventDefault()}}>
                            <div className={classes.natureSize}>
                                <Environmental place={"top"} time={"day"}/>
                            </div>
                            <div className={classes.tentSize}>
                                <FrontTent colorType={keyTent}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>



            {userData.getUserMode() ? 
                <>
                    <Header panel={true} message={"Now you can change Tent"} colorType={"default"} userOn={true}/>
                    <LeftPanel mode="userMode"   levelPage={0} linkNext={{ link: "/Home", bool: false, lock: false      }} linkPrev={{ link: "/Home"     , bool: true }} />
                </>
                :
                <>
                    <Header panel={true} message={message} colorType={keyTent === "none" ? "default" : "success"} userOn={false}/>
                    <LeftPanel mode="createTent" levelPage={3} linkNext={{ link: "/Home", bool: true , lock: buttonNext }} linkPrev={{ link: "/setStakes", bool: true }} />
                </>
            }
        </>
    );

}

export default SetTent;