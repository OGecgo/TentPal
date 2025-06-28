import classes from './LightPanel.module.css';
import { useState,useEffect } from "react";
import LeftPanel from 'components/LeftPanel/LeftPanel';
import Header from 'components/Header/Header';
import MessageBox from 'components/MessageBox/MessageBox';


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

      <div className="centerContent">
        
        <div className={classes.leftContent}>
          <div className={classes.upperPanel}>
            <MessageBox message={"Παρακαλώ επιλέξτε είδος φωτισμού"} width="calc(100% - 40px)" height={"30%"} top={"10%"} left={"20px"}/>
            
            <div className={classes.blockData}>
              <div style={{width:"50%", height:"50%"}}>
                <MessageBox backgroundColor={"rgba(0, 0, 0, 0)"} message={"Απλός Φωτισμός"} height={"50%"} width={"50%"}/>
              </div>
              <div style={{ width:"50%", height:"50%"}}>
                <MessageBox backgroundColor={"rgba(0, 0, 0, 0)"} message={"Σύνθετος Φωτισμός"} height={"50%"} width={"50%"}/>
              </div>
              <div style={{width: "50%", height: "50%"}}>
                <input type="checkbox" id="special-light2-toggle" checked={!SimpleLight} onChange={()=> changeLightMode('complex')}/>
              </div>
              <div style={{width: "50%", height: "50%"}}>
                <input type="checkbox" id="special-light1-toggle" checked={SimpleLight}  onChange={() => {changeLightMode('simple');}} />
              </div>
            </div>

          </div>

          <div className={classes.midlePanel}>
            <MessageBox message={"Απλός Φωτισμός: Επιλογή χρώματος και έντασης"} width="calc(100% - 40px)" height={"30%"} top={"10%"} left={"20px"}/>

          </div>
          <div className={classes.bottomPanel}>
            <MessageBox message={"Σύνθετος  Φωτισμός: Επιλογή προεπιλγμένου mode"} width="calc(100% - 40px)" height={"30%"} top={"10%"} left={"20px"}/>
            <div className={classes.blockData}></div>
          </div>

        </div>



        <div className={classes.rightPanel}>
          <div className={classes.sky}>
          <div className={classes.shadowSky}></div>
          <div className={classes.shadowDSky}></div>

          <div className={classes.ground}></div>
          <div className={classes.shadowGround}></div>
          </div>
        </div>

     </div>









      <LeftPanel page = "makeTent" levelMakeTent = {4} linkNext = {{link: "/energyPanel", bool: true, lock: false}} linkPrev = {{link: "/chooseTent", bool: true}}/>
      <Header panel = {"messageBox"} message={'Light Section'} helpPage={"light"}/> 
    </>
  );
}

export default LightPanel;
