
import classes from "./StickLamp.module.css"

function StickLamp({lampColor}){

    return(
    <div className={classes.block}>
        <div className={classes.light}>
            <div className={classes.Lamp      } style={{backgroundColor: lampColor}}></div>
            <div className={classes.lightLamp1} style={{backgroundColor: lampColor}}></div>
            <div className={classes.lightLamp2} style={{backgroundColor: lampColor}}></div>
        </div>
        <div className={classes.Stick}></div>
    </div>
    );
}

export default StickLamp;