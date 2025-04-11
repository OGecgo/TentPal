
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBatteryFull, faSolarPanel } from "@fortawesome/free-solid-svg-icons";
import mycss from './Order.css';
import React, { useState,useEffect } from "react";
import LeftPanel from '../../../components/LeftPanel/LeftPanel';
import Header from '../../../components/Header/Header';
import MessageBox from '../../../components/MessageBox/MessageBox';
import InfoButton from "../../../components/InfoButton/InfoButton";



function Order(){


    const[frenchFries,setFrenchFries]=useState(0);
    const[nuggets,setNuggets]=useState(0);
    const[cocaCola,setCocaCola]=useState(0);


    let moisture=Math.floor((Math.random() *100));
    let temperature=Math.floor((Math.random(0,1) *40));

    function generatePrice(){
        return (2.5 *frenchFries) +(3.5*nuggets) + (1.5*cocaCola);
    }


    /*
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
      
      */
    


   return(
   <>

    <div className = "centerContent" >
        <div className="display-menu">
            <h3 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Τιμοκατάλογος
            </h3>
            <div className="menu-item">
                <h3>🍟 Πατάτες Τηγανητές</h3>
                <p>Τιμή: 2.50€</p>
                <p>Τεμάχια: {frenchFries}</p>
                <button  className="add-subtract-button" onClick={() => {setFrenchFries((frenchFries) => frenchFries +1);}}variant="outline">
                            +
                </button>
                <button  className="add-subtract-button" onClick={() => {
                                                                        if (frenchFries > 0) {
                                                                            setFrenchFries((frenchFries) => frenchFries -1);}}}variant="outline">
                        -
                </button>
            </div>

            <div className="menu-item">
                <h3>🍗 Κοτομπουκιές</h3>
                <p>Τιμή: 3.50€</p>
                <p>Τεμάχια: {nuggets}</p>

                <button  className="add-subtract-button" onClick={() => {setNuggets((nuggets) => nuggets +1);}}variant="outline">
                        +
                </button>
                <button  className="add-subtract-button" onClick={() => {
                                                                     if (nuggets > 0) {
                                                                        setNuggets((nuggets) => nuggets -1);}}}variant="outline">
                    -
                </button>
            </div>

            <div className="menu-item">
                <h3>🥤 Coca Cola</h3>
                <p>Τιμή: 1.50€</p>
                <p>Τεμάχια: {cocaCola}</p>
                <button  className="add-subtract-button" onClick={() => {setCocaCola((cocaCola) => cocaCola +1);}}variant="outline">
                        +
            </button>
            <button  className="add-subtract-button" onClick={() => {
                                                                     if (cocaCola > 0) {
                                                                        setCocaCola((cocaCola) => cocaCola -1);}}}variant="outline">
                    -
                </button>
            <h2>Σύνολο: {generatePrice()}€</h2>         
            {generatePrice() !== 0 && (
                <button className="apply-button1" onClick={() => {}}>
                    Αποστολή παραγγελίας
                </button>
            )} 
            </div>
        </div>
    </div>

    <InfoButton page="energy"/>
    <LeftPanel page = "makeTent" levelMakeTent = {5} linkNext = {{link: "#", bool: true, lock: true}} linkPrev = {{link: "#", bool: true}}/>
    <Header panel = {"messageBox"} message={'Καντίνα'}/>
  </>
);
}
export default Order;