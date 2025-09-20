import React from "react";
import { useEffect, useState } from "react";

import userData from "dataSet/userData";

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import Map from "components/Map/Map"

import classes from "./sosMap.module.css"
import classesMap from "components/Map/Map.module.css"

function SOSMap() {

    const [mapPoints, setMapPoints] = useState([]);
    useEffect(() => {
        setMapPoints(returnMapPoints());
    }, []);

    const returnMapPoints = () => {
        let block = [];
        for (let i = 0; i < userData.getCountBlocks(); i++) {
            for (let j = 0; j < userData.getCountBlocks(); j++) {
                //user point
                if (userData.getPosMap()[0] === i && userData.getPosMap()[1] === j) { 
                    block.push(
                        <div className={`${classesMap.block} ${classes.blockStyle}`}>
                            <div className={classes.backBlack}>   
                                <div className={`${classes.userPos} ${classes.blockSize}`}></div>
                            </div>
                        </div>
                    );
                    continue;
                }

                let e = Math.random();
                // sos point
                if (e < 0.1)
                    block.push(
                        <div className={`${classesMap.block} ${classes.blockStyle}`}>
                            <div className={classes.backRed}>
                                <div className={`${classes.safePoint} ${classes.blockSize}`}></div>
                            </div>
                        </div>
                    );
                // space point
                else
                    block.push(
                        <div className={`${classesMap.block} ${classes.blockStyle}`}>
                            <div className={classes.blockSize}></div>
                        </div>
                    );
            }
        }
        return block;
    }


    return (
        <>
            <div className="centerContent">
                <Map />
                <div className={classesMap.mapBlocks}>
                    {mapPoints}
                </div>

                <div className={classes.infoBlock}>
                    <div className={classes.infoData}>
                        <div className={classes.userPos}></div>
                        <p>User Position</p>
                    </div>
                    <div className={classes.infoData}>
                        <div className={classes.safePoint}></div>
                        <p>Safe Point</p>
                    </div>
                </div>
            </div>
            <LeftPanel mode={"userMode"} linkPrev={{ lock: false, link: "/Home", bool: true }} />
            <Header panel={true} colorType={"warning"} message={"SOS Map (Go to safe point)"} helpPage={"none"} userOn={true} />
        </>
    );
}

export default SOSMap;