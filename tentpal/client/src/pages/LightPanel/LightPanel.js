import mycss from './LightPanel.module.css';
import React, { useState } from "react";
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import Header from '../../components/Header/Header';


function LightPanel(){

        const [lightIntensity, setLightIntensity] = useState(50); // Αρχική ένταση 50%
      
        const handleSliderChange = (event) => {
          setLightIntensity(event.target.value); // Ενημέρωση έντασης

    }

return(
    
    <>
    <div className = "centerContent" >
      <div className={mycss.main}>
        <div className={mycss.panel}>
            <div className={mycss.container}>
                <h1 className={mycss.title}>Light Intensity</h1>
                <div className={mycss.sliderContainer}>
                    <input
                    type="range"
                    min="0"
                    max="100"
                    value={LightPanel.lightIntensity}
                    onChange={handleSliderChange}
                    className={mycss.slider}
                    />
                    <span className={mycss.value}>{lightIntensity}%</span>
                </div>
                <div
                    className={mycss.lightPreview}
                    style={{
                    backgroundColor: `rgba(255, 255, 0, ${lightIntensity / 100})`, // Προσομοίωση φωτεινότητας
                    }}
        ></div>
        </div>
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
            </div>
                <p>I am in panel</p>
            </div>
        <div className={mycss.showTent}>
            <p>I am in ShowTent</p>
        </div>
      </div>
    </div>
    <LeftPanel page = "1" />
    <Header/>
  </>
);
}

export default LightPanel;