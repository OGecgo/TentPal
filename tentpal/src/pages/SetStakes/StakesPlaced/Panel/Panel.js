import React from "react";

import classes from "./Panel.module.css";


function Panel({ precentDeep, precentDeepSlider, precentDegre, precentDegreSlider }) {




	return (
		<div className={classes.panel}>
			<div className={`${classes.blockSize} ${classes.blockSizeUp}`}>
				<input className={"blockSlider"} type="range" id="opacityRange" min="0" max="1" step="0.01" value={precentDeepSlider } onChange={(e) => precentDeep(Number(e.target.value))} />
			</div>
			<div className={`${classes.blockSize} ${classes.blockSizeBottom}`}>
				<input className={"blockSlider"} type="range" id="opacityRange" min="0" max="1" step="0.01" value={precentDegreSlider} onChange={(e) => precentDegre(Number(e.target.value))} />
			</div>
			<p className={classes.textBox} width={"95%"} height={"20%"} left={"1vw"} top={"1vw"}>Set Deep For Stake</p>
			<p className={`${classes.textBox} ${classes.textBox2}`} width={"95%"} height={"20%"} left={"1vw"} top={"50%"}>Set Degre For Stake</p>
		</div>
	);
}

export default Panel;
