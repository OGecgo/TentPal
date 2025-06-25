
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBatteryFull, faSolarPanel } from "@fortawesome/free-solid-svg-icons";
import mycss from './EnergyPanel.css';
import React, { useState,useEffect } from "react";
import LeftPanel from '../../../components/LeftPanel/LeftPanel';
import Header from '../../../components/Header/Header';
import MessageBox from '../../../components/MessageBox/MessageBox';
import InfoButton from "../../../components/InfoButton/InfoButton";


function EnergyPanel(){


    const[battery,setBattery]=useState(15);
    const[isAirCondition,setIsAirCondition]=useState(null);
    const[airConditionTemperature,setAirConditionTemperature]=useState(25);
    const[isElecticBlanket,setIsElectricBlanket]=useState(null)
    const[isInfo,setIsInfo]=useState(false);


    let moisture=Math.floor((Math.random() *100));
    let temperature=Math.floor((Math.random(0,1) *40));



    
    useEffect(()=>{
        if(localStorage.getItem('energy_state')!=null){
          let current_energy_state = JSON.parse(localStorage.getItem('energy_state'));
          setAirConditionTemperature(current_energy_state.airConditionTemperature);
          setIsAirCondition(current_energy_state.isAirCondition)
     
    
        }
      },
      [])


    function updateState(){
        let energy_state={isAirCondition,airConditionTemperature};
        localStorage.setItem('energy_state',JSON.stringify(energy_state));
      }
    
    function generateEnergyConsumption(){
        if(!isAirCondition && !isElecticBlanket){
            return (Math.random()).toFixed(2);
        }
        else if(!isAirCondition && isElecticBlanket){
            return (2+Math.random()*5).toFixed(2);
        }
        else if(isAirCondition && !isElecticBlanket){
            return (15+Math.random()*10).toFixed(2);
        }
        else{
            return (25+Math.random()*15).toFixed(2);
        }

    }


   return(
   <>

    <div className = "centerContent" >

        <div className="energy-production">
            <h2 style={{fontSize: "1.8rem",fontWeight: "bold",}}> ⚡Παραγωγή ενέργειας</h2>

            <p><FontAwesomeIcon icon={faBolt} /> Παραγωγή ενέργειας τώρα: 15,2 Wh</p>
            <p><FontAwesomeIcon icon={faBatteryFull} /> Επίπεδο αποθέματος ενέργειας: {battery}%</p>
            {battery < 20 && (
                 <p style={{ color: "red", fontWeight: "bold" }}>⚠️ Προειδοποιητικό μήνυμα: Η στάθμη της ενέργειας είναι κάτω από 20%! <br/>   Χρησιμοποιήστε με σύνεση την ενέργεια  που απομένει! </p>
            )}
            <></>

        </div>

        <div className="weather">
        <h2 style={{fontSize: "1.8rem",fontWeight: "bold",}}> ⚡Ο Καιρός Τώρα </h2>
            <p><FontAwesomeIcon icon={faBolt} /> Καιρός: Ηλιοφάνεια</p>
            <p><FontAwesomeIcon icon={faBatteryFull} /> Θερμοκρασία: {temperature}°C</p>
            <p><FontAwesomeIcon icon={faSolarPanel} /> Υγρασία: {moisture}%  </p>
        </div>


        <div className="energy-consumption">

            <h2 style={{fontSize: "1.8rem",fontWeight: "bold",}}> ⚡Κατανάλωση ενέργειας</h2>
            <p><FontAwesomeIcon icon={faBolt} /> Κατανάλωση ενέργειας τώρα: {generateEnergyConsumption()}Wh</p>

        

        <span class="toggle-label">Ηλεκτρική Κουβέρτα: </span>
        <label class="switch">
            <input type="checkbox" id="aircondition-toggle" checked={isElecticBlanket} onClick={()=> isElecticBlanket ? setIsElectricBlanket(false) :setIsElectricBlanket(true)}/>
            <span class="slider"></span>
        </label>
            <div class="toggle-container">
                <span class="toggle-label">Κλιματισμός: </span>
                <label class="switch">
                    <input type="checkbox" id="aircondition-toggle" checked={isAirCondition} onClick={()=> isAirCondition ? setIsAirCondition(false) :setIsAirCondition(true)}/>
                    <span class="slider"></span>
                </label>
            </div>   
            <div className="aircondition-temperature">
                <p><FontAwesomeIcon icon={faBatteryFull} /> Θερμοκρασία Κλιματισμού: {isAirCondition ? airConditionTemperature+'°C' : '-'}</p>
                <button  className="aircondition-temperature-button" onClick={() => {
                                                                        if (airConditionTemperature <30) {
                                                                            setAirConditionTemperature((airConditionTemperature) => airConditionTemperature +1);}}} 
                                                                        variant="outline">
                    +
                </button>
                <button  className="aircondition-temperature-button" onClick={() => {
                                                                        if (airConditionTemperature > 18) {
                                                                            setAirConditionTemperature((airConditionTemperature) => airConditionTemperature -1);}}} 
                                                                        variant="outline">
                    -
                </button>
            </div>
            <button className='apply-button' onClick={()=> {updateState()}} > Apply </button>            
        </div>
    </div>


    {/* <InfoButton page="energy"/> */}
    <LeftPanel page = "makeTent" levelMakeTent = {5} linkNext = {{link: "#", bool: true, lock: true}} linkPrev = {{link: "/lightPanel", bool: true}}/>
    <Header panel = {"messageBox"} message={'Διαχείριση Ενέργειας Ενεργειακού Ελέγχου'} helpPage={"energy"}/>
  </>
);
}
export default EnergyPanel;