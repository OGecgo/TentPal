
import classes from "./FrontTent.module.css"

// colorType <= cloudy, sunny, snow, rain

function FrontTent({colorType}) {


    const returnTypeColorDiv = () => {
        if      (colorType === "cloudy") return <div className={`${classes.triangle} ${classes.triangleNormal}`} ></div>;
        else if (colorType === "sunny") return <div className={`${classes.triangle} ${classes.triangleWarm  }`} ></div>;
        else if (colorType === "snow" ) return <div className={`${classes.triangle} ${classes.triangleCold  }`} ></div>;
        else if (colorType === "rain" ) return <div className={`${classes.triangle} ${classes.triangleRain  }`} ></div>;
        return <></>;
    };

    const returnBlock = () => {
        if (colorType !== "cloudy" && colorType !== "sunny" && colorType !== "snow" && colorType !== "rain") return <></>;
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