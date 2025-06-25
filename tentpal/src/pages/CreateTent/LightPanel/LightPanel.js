import mycss from './LightPanel.css';
import React, { useState,useEffect } from "react";
import LeftPanel from '../../../components/LeftPanel/LeftPanel';
import Header from '../../../components/Header/Header';
import MessageBox from '../../../components/MessageBox/MessageBox';
import InfoButton from '../../../components/InfoButton/InfoButton';



function LightPanel(){
  const [SimpleLight, setSimpleLight] = useState(true);
  const [NightLight, setNightLight] = useState(null);
  const [color, setColor] = useState("#4CAF50");
  const [intensity, setIntensity] = useState(0.7);


  const finalColor=getAdjustedColor(color)

  useEffect(()=>{
    if(localStorage.getItem('light_state')!=null){
      let current_light__state = JSON.parse(localStorage.getItem('light_state'));
      console.log(current_light__state);
      setSimpleLight(current_light__state.SimpleLight);
      setNightLight(current_light__state.NightLight);
      setColor(current_light__state.color);
      setIntensity(current_light__state.intensity);

    }
  },
  [])


  function changeLightMode(mode){
    if(mode==='simple' && !SimpleLight){
      setSimpleLight(true);
      setNightLight(null);
      setColor("#4CAF50");
      setIntensity(0.5);
    }
    else  if(mode==='complex' && SimpleLight){
      setSimpleLight(false);
    }
  }


  function changeComplexLightMode(special_mode){
    if(!SimpleLight && special_mode==='partyLight'){
      setNightLight(false);
    }
    if(!SimpleLight && special_mode==='nightLight'){
      setNightLight(true);
    }
  }


  function getAdjustedColor(hex) {
    if (!hex || hex.length < 7) {
      console.error("Invalid color value:", hex);
      hex = "#4CAF50"; // Χρησιμοποιούμε το προεπιλεγμένο χρώμα
    }
  
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${intensity})`;
  }

  function setColorSettingsAutomatically(special_mode){
    if(special_mode==='nightLight' && !SimpleLight){
      setColor('#FFFFFF');
      setIntensity(0.3);
    }
    if(special_mode==='partyLight' && !SimpleLight){
      setColor('#000000');
      setIntensity(0.8);
    }

  }

  function updateState(){
    let light_state={SimpleLight,NightLight,color,intensity};
    localStorage.setItem('light_state',JSON.stringify(light_state));
  }





return(
  <>
    <div className = "centerContent">
    <div className="toggle-container1">
      <span className="toggle-label">Απλός Φωτισμός</span>
        <label className="switch">
          <input type="checkbox" id="special-light1-toggle"   checked={SimpleLight}  onChange={() => {changeLightMode('simple');
  }} />
          <span className="slider"></span>
        </label>
        <span className="toggle-label">Σύνθετος Φωτισμός</span>
        <label className="switch">
          <input type="checkbox" id="special-light2-toggle"checked={!SimpleLight} onChange={()=> changeLightMode('complex')}/>
          <span className="slider"></span>
        </label>
      </div>

      
        <div className="color-container">
          <label className="color-label" htmlFor="colorInput">Επιλογή χρώματος:</label>
          <input type="color" id="colorInput"value={color}  disabled={!SimpleLight}
            onChange={(e) => setColor(e.target.value)}
            className="color-picker"/>
        </div>
              {/* Ρύθμιση Διαφάνειας */}
      <div className="bar-container">
        <label className="color-label" htmlFor="colorInput">Ένταση:</label>
        <input
          type="range"
          id="opacityRange"
          min="0"
          max="1"
          step="0.01"
          value={intensity}
          disabled={!SimpleLight}
          onChange={(e) => setIntensity(Number(e.target.value))}
        />
      </div>

        <div className='final-preview-container'>
          <label style={{ fontWeight: "bold" }}>Τελική απόχρωση:</label>
          <div
            className="color-preview"
            style={{
              backgroundColor: finalColor,
              width: "50px",
              height: "50px",

            }}
          />
        </div>
      <div className="toggle-container2">
      <span className="toggle-label">Φωτισμός για Εκδηλώσεις</span>
        <label className="switch">
          <input type="checkbox" id="special-light1-toggle" checked={!SimpleLight && !NightLight && NightLight!=null} onChange={() => {changeComplexLightMode("partyLight");
                                                                                                   setColorSettingsAutomatically("partyLight"); }}/>
          <span className="slider"></span>
        </label>

        <span className="toggle-label">Νυχτερινό Φως</span>
        <label className="switch">
          <input type="checkbox" id="special-light2-toggle"checked={!SimpleLight && NightLight} onChange={() => {changeComplexLightMode("nightLight");
                                                                                                   setColorSettingsAutomatically("nightLight"); }}/>
          <span className="slider"></span>
        </label>
      </div>
      <button className='apply-button' onClick={()=> {updateState()}} > Apply </button>
    </div>

    <InfoButton page="light"/>
    <MessageBox message={"Παρακαλώ επιλέξτε είδος φωτισμού"}
      width={"900px"} height={"50px"} top={"140px"} left={"160px"}/>
    <MessageBox message={"Απλός Φωτισμός: Επιλογή χρώματος και έντασης"}
      width={"900px"} height={"50px"} top={"250px"} left={"160px"}/>
    <MessageBox message={"Σύνθετος  Φωτισμός: Επιλογή προεπιλγμένου mode"}
      width={"900px"} height={"50px"} top={"460px"} left={"160px"}/>
    <LeftPanel page = "makeTent" levelMakeTent = {4} linkNext = {{link: "/energyPanel", bool: true, lock: false}} linkPrev = {{link: "/chooseTent", bool: true}}/>
    <Header panel = {"messageBox"} message={'Light Section'} helpPage={"light"}/>
  </>
);
}

export default LightPanel;
