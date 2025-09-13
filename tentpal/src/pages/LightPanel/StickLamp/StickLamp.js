
import classes from "./StickLamp.module.css"

function StickLamp({height, width, top, left, lampColor}){

    return(
    <>
        <div style={{height: height, width: width, left: left, top: top, position: "absolute"}}>
            <div className={classes.Stick     }></div>
            <div className={classes.Lamp      } style={{backgroundColor: lampColor}}></div>
        </div>
        <div style={{
            backgroundColor: lampColor, 
            width: `calc(${width}*4`, height:`calc(${width}*4`,
            left: `calc(${left} - ${width} * 1.5`, top: `calc(${top} - 1%)`, 
            position: "absolute",
            borderRadius: "100%",
            opacity: "0.80"
        }}></div>
        <div style={{
            backgroundColor: lampColor, 
            width: `calc(${width}*14`, height:`calc(${width}*14`,
            left: `calc(${left} - ${width} * 6.5`, top: `calc(${top} - 10%)`, 
            position: "absolute",
            borderRadius: "100%",
            opacity: "0.33"
        }}></div>

    </>
    );
}

export default StickLamp;