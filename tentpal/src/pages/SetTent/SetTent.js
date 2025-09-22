import React from "react";
import { useEffect, useState } from "react";

import classes from "./SetTent.module.css";


import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import Environmental from "components/Environmental/Environmental";
import FrontTent from "components/FrontTent/FrontTent";

import tentData from "dataSet/tentConfig/tentData";
import userData from "dataSet/userData";

import standardImg  from "assets/tent/standart.webp"
import sunnyTentImg from "assets/tent/sunny.webp"
import rainTentImg  from "assets/tent/rain.webp"
import snowTentImg  from "assets/tent/snow.webp"

function SetTent(){
    
    const [message, setMessage] = useState("Drag the tent you want into the right block.");
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
            case "http://localhost:3000/static/media/standart.1d5827649ef32e79c7ab.webp":
                setKeyTent("cloud");
                break;
            case "http://localhost:3000/static/media/rain.8b04245781f66cfcf9da.webp":
                setKeyTent("rain");
                break;
            case "http://localhost:3000/static/media/snow.9920d10373921d497ce5.webp":
                setKeyTent("snow");
                break;
            case "http://localhost:3000/static/media/sunny.618a79bb3d5aaddfcfa0.webp":
                setKeyTent("sunny");
                break;
            default:
                return;
        }
        setMessage("You can now go to the Home page");
        setButtonNext(false);
    }


    return(
        <>
            <div className="centerContent">
                <div className={classes.mainPanel}>
                    <div className={classes.panel}>

                        <div className={classes.tentBlock}>
                            <div className={classes.blockItem}>
                                <p className={classes.nameTent}>anti Sun Tent</p>
                                <div className={classes.backImg}>
                                    <img src={sunnyTentImg} alt="anti Sun Tent"></img>
                                </div>
                            </div>
                            <div className={classes.blockItem}>
                                <p className={classes.nameTent}>standart Tent</p>
                                <div className={classes.backImg}>
                                    <img src={standardImg} alt="standart Tent"></img>
                                </div>                            
                            </div>
                            <div className={classes.blockItem}>
                                <p className={classes.nameTent}>anti Snow Tent</p>
                                <div className={classes.backImg}>
                                    <img src={snowTentImg} alt="anti Snow Tent"></img>
                                </div>                            </div>
                            <div className={classes.blockItem}>
                                <p className={classes.nameTent}>anit Rain Tent</p>
                                <div className={classes.backImg}>
                                    <img src={rainTentImg} alt="anit Rain Tent"></img>
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