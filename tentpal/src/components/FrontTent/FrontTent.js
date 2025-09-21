
import classes from "./FrontTent.module.css"

// colorType <= normal, warm, cold, rain

function FrontTent({colorType}) {


    const returnTypeColorDiv = () => {
        if      (colorType === "normal") return <div className={`${classes.triangle} ${classes.triangleNormal}`} ></div>;
        else if (colorType === "warm"  ) return <div className={`${classes.triangle} ${classes.triangleWarm  }`} ></div>;
        else if (colorType === "cold"  ) return <div className={`${classes.triangle} ${classes.triangleCold  }`} ></div>;
        else if (colorType === "rain"  ) return <div className={`${classes.triangle} ${classes.triangleRain  }`} ></div>;
        return <></>;
    };

    const returnBlock = () => {
        if (colorType !== "normal" && colorType !== "warm" && colorType !== "cold" && colorType !== "rain") return <></>;
        return(
            <>
                <div className={classes.tentLight   }></div>
                <div className={classes.enter       }></div>
            </>
        );

    }
    return (
        <>
            {returnTypeColorDiv()}
            {returnBlock()}
        </>
    )
}


export default FrontTent;