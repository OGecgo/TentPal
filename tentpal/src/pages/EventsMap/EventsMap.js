import React from "react";
import { useState, useEffect } from "react";

import userData from "dataSet/userData";

import Map       from "components/Map/Map";
import InfoButton from "components/InfoButton/InfoButton";
import Header    from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";

import classes    from "./EventsMap.module.css";
import classesMap from "components/Map/Map.module.css";

import helpImg from "assets/info/energy_info.png"


function EventsMap() {

    const [infoOn, setInfoOn] = useState(false);
    const [infoBlocks, setInfoBlocks] = useState([]);


    useEffect(()=> {
        setInfoBlocks(returnUpperBlocks());
    }, []);


    const returnRandomEvent = () => {
        if (Math.random() >= 0.9)
            if (Math.random() >= 0.9) 
                return 0;  // place
            else return 1; // event
        else return 2;     // space
    }

    // 0 event 1 place 2 space
    const returnMapEvent = (e) => {
        if (e === 0)return (
            <div className={`${classes.event} ${classes.mapColorTriangle}`}>
                <div className={`${classes.triangle} ${classes.shapeMapWidth}`} ></div>
            </div>
        );
        else if (e === 1) return(
            <div className={`${classes.event} ${classes.mapColorCircle}`}>
                <div className={`${classes.circle} ${classes.shapeMapWidth}`} ></div>
            </div>
        );
        else return < div className={classes.shapeMapWidth}></div>;
    }


    const returnUpperBlocks = () => {
        let block = [];
        for (let row = 0; row < userData.countBlocks; row++) {
            for (let col = 0; col < userData.countBlocks; col++) {
                let e = returnRandomEvent();
                block.push(
                    <div onClick={() => { e === 0 || e === 1 ? setInfoOn(true) : setInfoOn(false)}}
                        key={`${row} ${col}`} className={`${classesMap.block} ${classes.styleBlock}`}>
                        {userData.getPosMap()[0] !== row || userData.getPosMap()[1] !== col ?
                            returnMapEvent(e)
                            :
                            <div className={`${classes.mapColorSquare} ${classes.event}`}>
                                <div className={`${classes.square} ${classes.shapeMapWidth}`}></div>
                            </div>
                        }
                    </div>
                );
            }
        }

        return block;
    };


    return (
        <>
            <div className="centerContent">
                <Map />
                
                <div className={classesMap.mapBlocks}>
                    {infoBlocks}
                </div>

                <div className={classes.blockInfoLeft}>
                    <div className={classes.left}>
                        <div className={classes.triangle}></div>
                        <p>New Event</p>
                    </div>
                    <div className={classes.left}>
                        <div className={classes.square}></div>
                        <p>Home</p>
                    </div>
                    <div className={classes.left}>
                        <div className={classes.circle}></div>
                        <p>Place for research</p>
                    </div>
                </div>

                {infoOn ?
                    <div className={classes.blockInfoRight}>
                        <InfoButton backgroundOff={true} page={null} isOpen={infoOn} setIsOpen={setInfoOn} typeColor={"transparent"}/>
                    </div>         
                :
                    <></>
                }

            </div>
            <Header helpPage={helpImg} message={"Event Map"} panel={true} colorType={"default"} userOn={true} />
            <LeftPanel mode={"userMode"} linkPrev={{ link: "/Home", bool: true }} />
        </>
    );
}

export default EventsMap;
