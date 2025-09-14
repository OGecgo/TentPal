import React from "react";

import classes from "./Environmental.module.css";


// time <= night, day
// place <= top, bottom
function Environmental({ time, place }) {

    return (
        <div className={classes.container}>
            {place === "bottom" ?
                <>
                    <div className={time === "day" ? classes.sky         : `${classes.sky        } ${classes.skyNight}`        }></div>
                    <div className={time === "day" ? classes.grass       : `${classes.grass      } ${classes.grassNight}`      }></div>
                    <div className={time === "day" ? classes.grassShadow : `${classes.grassShadow} ${classes.grassShadowNight}`}></div>
                    <div className={time === "day" ? classes.dirt        : `${classes.dirt       } ${classes.Night}`           }></div>
                    <div className={time === "day" ? classes.dirtShadow  : `${classes.dirtShadow } ${classes.Night}`           }></div>
                </>
                :
                <>
                    <div className={time === "day" ? classes.sky2         : `${classes.sky2        } ${classes.skyNight        }`}></div>
                    <div className={time === "day" ? classes.grass2       : `${classes.grass2      } ${classes.grassNight      }`}></div>
                    <div className={time === "day" ? classes.grassShadow2 : `${classes.grassShadow2} ${classes.grassShadowNight}`}></div>     
               </>
            }
        </div>
    );
}

export default Environmental;