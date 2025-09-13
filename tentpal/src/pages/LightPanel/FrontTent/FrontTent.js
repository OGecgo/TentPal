
import classes from "./FrontTent.module.css"


function FrontTent({top, left, width, height, color, light}){
    
    return(
        <div className={classes.blockSize} style={{top:top, left:left, height:height, width:width}}>
            <div className={classes.triangle    } style={{backgroundColor:color}}></div>
            <div className={classes.groundLight } style={{backgroundColor:light}}></div>
            <div className={classes.groundLight2} style={{backgroundColor:light}}></div>
            <div className={classes.tentLight   } style={{backgroundColor:light}}></div>
            <div className={classes.enter       } style={{backgroundColor:light}}></div>
        </div>
    )
}


export default FrontTent;