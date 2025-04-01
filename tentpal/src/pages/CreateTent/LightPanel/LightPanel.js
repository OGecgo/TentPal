import mycss from './LightPanel.css';
import React, { useState,useEffect } from "react";
import LeftPanel from '../../../components/LeftPanel/LeftPanel';
import Header from '../../../components/Header/Header';
import MessageBox from '../../../components/MessageBox/MessageBox';
import Cookies from 'js-cookie'


function LightPanel(){

  const [SimpleLight, setSimpleLight] = useState(true);
  const [NightLight, setNightLight] = useState(null);
  const [color, setColor] = useState("#4CAF50");
  const [intensity, setIntensity] = useState(0.7);
  const [history, setHistory] = useState([]);

  const finalColor=getAdjustedColor(color)

  useEffect(() => {
    // 🔹 Φόρτωση ιστορικού από cookies
    const savedHistory = Cookies.get("lightSettingsHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    // 🔹 Προσθήκη στο ιστορικό και αποθήκευση στα cookies
    const newEntry = { SimpleLight, NightLight, color, intensity };
    const updatedHistory = [...history, newEntry].slice(-5); // Κρατάμε τις 5 τελευταίες ρυθμίσεις

    setHistory(updatedHistory);
    Cookies.set("lightSettingsHistory", JSON.stringify(updatedHistory), { expires: 7 }); // Λήξη σε 7 μέρες
  }, [SimpleLight, NightLight, color, intensity]);



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


return(
  <>
    <div className = "centerContent">
    <br/>
    <br/>
    <br/>
    <div class="toggle-container">
      <span class="toggle-label">Απλός Φωτισμός</span>
        <label class="switch">
          <input type="checkbox" id="special-light1-toggle"   checked={SimpleLight}  onChange={() => {changeLightMode('simple');
  }} />
          <span class="slider"></span>
        </label>
        <span class="toggle-label">Σύνθετος Φωτισμός</span>
        <label class="switch">
          <input type="checkbox" id="special-light2-toggle"checked={!SimpleLight} onChange={()=> changeLightMode('complex')}/>
          <span class="slider"></span>
        </label>
      </div>
      <br/><br/><br/>
       <MessageBox message={"Παρακαλώ επιλέξτε είδος φωτισμού"}
        width={"900px"} height={"50px"} top={"10px"}/>
        <br/>
        <MessageBox message={"Απλός Φωτισμός: Επιλογή χρώματος και έντασης"}
        width={"900px"} height={"50px"} top={"100px"}/>
        <div class="color-container">
          <label class="color-label" for="colorInput">Επιλογή χρώματος:</label>
          <input type="color" id="colorInput"value={color}  disabled={!SimpleLight}
            onChange={(e) => setColor(e.target.value)}
            class="color-picker"/>
        </div>



              {/* Ρύθμιση Διαφάνειας */}
      <div className="toggle-container">
        <label class="color-label" for="colorInput">Ένταση:</label>
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

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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



        <MessageBox message={"Σύνθετος  Φωτισμός: Επιλογή προεπιλγμένου mode"}
        width={"900px"} height={"50px"} top={"330px"}/>

      <br/><br/><br/><br/><br/>
      <div class="toggle-container">
      <span class="toggle-label">Φωτισμός για Εκδηλώσεις</span>
        <label class="switch">
          <input type="checkbox" id="special-light1-toggle" checked={!SimpleLight && !NightLight && NightLight!=null} onChange={() => {changeComplexLightMode("partyLight");
                                                                                                   setColorSettingsAutomatically("partyLight"); }}/>
          <span class="slider"></span>
        </label>

        <span class="toggle-label">Νυχτερινό Φως</span>
        <label class="switch">
          <input type="checkbox" id="special-light2-toggle"checked={!SimpleLight && NightLight} onChange={() => {changeComplexLightMode("nightLight");
                                                                                                   setColorSettingsAutomatically("nightLight"); }}/>
          <span class="slider"></span>
        </label>
      </div>
      <button className='apply-button' > Apply </button>

    </div>



    <LeftPanel page = "makeTent" levelMakeTent = {4} linkNext = {{link: "#", bool: true, lock: true}} linkPrev = {{link: "#", bool: true}}/>
    <Header panel = {"messageBox"} message={'Light Section'}/>
  </>
);
}
export default LightPanel;


/*
import React, { useState } from "react";

function LightPanel() {
  const [color, setColor] = useState("#ff0000"); // Αρχικό χρώμα (κόκκινο)
  const [opacity, setOpacity] = useState(1); // Διαφάνεια (1 = 100%)

  // Μετατροπή HEX σε RGB
  function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
  }

  // Υπολογισμός τελικού χρώματος με opacity
  function getAdjustedColor() {
    const { r, g, b } = hexToRgb(color);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return (
    <div className="centerContent">
      <h1>My Light Panel</h1>

      {/* Επιλογή Χρώματος 
      <div className="color-container">
        <label htmlFor="colorInput">Choose Color:</label>
        <input
          id="colorInput"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      {/* Ρύθμιση Διαφάνειας *
      <div className="opacity-container">
        <label htmlFor="opacityRange">Opacity:</label>
        <input
          type="range"
          id="opacityRange"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
        />
        <span>{Math.round(opacity * 100)}%</span>
      </div>

      {/* Προβολή Τελικού Χρώματος *
      <div
        className="color-preview"
        style={{
          backgroundColor: getAdjustedColor(),
          width: "120px",
          height: "120px",
          borderRadius: "10px",
          marginTop: "20px",
          border: "2px solid #000",
        }}
      ></div>
      <p>Final Color</p>
    </div>
  );
}

export default LightPanel;
*/