import React from "react";
import { useState, useEffect } from "react";

import mapData from "dataSet/mapData";

import Map       from "components/Map/Map";
import InfoButton from "components/InfoButton/InfoButton";
import Header    from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";

import classes    from "./EventsMap.module.css";
import classesMap from "components/Map/Map.module.css";

import help from "assets/info/Page5.png";

import event1 from "assets/events/event/consert_1.png";
import event2 from "assets/events/event/consert_2.png";
import event3 from "assets/events/event/gledi.png";
import event4 from "assets/events/event/party.png";
import place1 from "assets/events/places/cave.png";
import place2 from "assets/events/places/monastir.png";
import place3 from "assets/events/places/mount.png";


function EventsMap() {

    const [infoOn, setInfoOn] = useState(false);
    const [infoBlocks, setInfoBlocks] = useState([]);
    const [infoEvent, setInfoEvent] = useState(null);


    useEffect(()=> {
        if (mapData.getEventsMap() == null)
            mapData.setEventsMap(returnUpperBlocks());
        setInfoBlocks(mapData.getEventsMap());
    }, []);

    // type <=  0=events, 1=places
    const setInfoEventOnMap = (type) => {
        setInfoOn(true);
        if (type === 0){
            let e = Math.floor(Math.random() * 4);
            switch (e){
                case 0: setInfoEvent(event1); break;
                case 1: setInfoEvent(event2); break;
                case 2: setInfoEvent(event3); break;
                case 3: setInfoEvent(event4); break;
                default: setInfoEvent(null); break;
            }
        }
        else if (type === 1){
            let e = Math.floor(Math.random() * 3);
            switch (e){
                case 0: setInfoEvent(place1); break;
                case 1: setInfoEvent(place2); break;
                case 2: setInfoEvent(place3); break;
                default: setInfoEvent(null); break;
            }
        }
    }

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
        for (let row = 0; row < mapData.getCountBlocks(); row++) {
            for (let col = 0; col < mapData.getCountBlocks(); col++) {
                let e = returnRandomEvent();
                block.push(
                    <div onClick={() => { e === 0 || e === 1 ? setInfoEventOnMap(e) : setInfoOn(false)}} key={`${row} ${col}`} className={`${classesMap.block} ${classes.styleBlock}`}>

                        {mapData.getPosMap()[0] !== row || mapData.getPosMap()[1] !== col ?
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
                        <p>Events</p>
                    </div>
                    <div className={classes.left}>
                        <div className={classes.square}></div>
                        <p>Home</p>
                    </div>
                    <div className={classes.left}>
                        <div className={classes.circle}></div>
                        <p>Research Location</p>
                    </div>
                </div>

                {infoOn ?
                    <div className={classes.blockInfoRight}>
                        <InfoButton backgroundOff={true} page={infoEvent} isOpen={infoOn} setIsOpen={setInfoOn} typeColor={"transparent"}/>
                    </div>         
                :
                    <></>
                }

            </div>
            <Header helpPage={help} message={"Events Map"} panel={true} colorType={"default"} userOn={true} />
            <LeftPanel mode={"userMode"} linkPrev={{ link: "/Home", bool: true }} />
        </>
    );
}

export default EventsMap;
