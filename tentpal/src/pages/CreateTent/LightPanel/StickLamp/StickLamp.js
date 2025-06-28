
import classes from "./StickLamp.module.css"

function StickLamp({height, width, top, left}){
    
    if (height && parseFloat(height) > 80) {
        height = "80%";
    }
    if (width && parseFloat(width) > 80) {
        width = "80%";
    }

    return(
        <div style={{height: height, width: width, left: left, top: top, position: "absolute"}}>
            <div className={classes.Stick}></div>
            <div className={classes.Lamp}></div>
        </div>
    );
}

export default StickLamp;