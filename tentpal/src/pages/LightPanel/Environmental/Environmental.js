import classes from "./Environmental.module.css"

function Environmental(){
    return(
        <div className={classes.container}>
            <div className={classes.sky}></div>
            <div className={classes.skyLight}></div>
            <div className={classes.skyDLight}></div>

            <div className={classes.grass}></div>
            <div className={classes.grasShadow}></div>
        </div>
    );

}

export default Environmental;