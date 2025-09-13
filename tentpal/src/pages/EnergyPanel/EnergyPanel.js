
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBatteryFull, faSolarPanel } from "@fortawesome/free-solid-svg-icons";
import classes from './EnergyPanel.module.css';
import React, { useState } from "react";
import {Link} from "react-router-dom"
import LeftPanel from 'components/LeftPanel/LeftPanel';
import Header from 'components/Header/Header';
import MessageBox from 'components/MessageBox/MessageBox';

import userData from 'dataSet/userData'

function EnergyPanel() {


    const [isAirCondition, setIsAirCondition] = useState(null);
    const [airConditionTemperature, setAirConditionTemperature] = useState(25);
    const [isElecticBlanket, setIsElectricBlanket] = useState(null)


    let moisture = Math.floor((Math.random() * 100));
    let temperature = Math.floor((Math.random(0, 1) * 40));



    function generateEnergyConsumption() {
        if (!isAirCondition && !isElecticBlanket) {
            return (Math.random()).toFixed(2);
        }
        else if (!isAirCondition && isElecticBlanket) {
            return (2 + Math.random() * 5).toFixed(2);
        }
        else if (isAirCondition && !isElecticBlanket) {
            return (15 + Math.random() * 10).toFixed(2);
        }
        else {
            return (25 + Math.random() * 15).toFixed(2);
        }

    }


    return (
        <>

            <div className="centerContent" >
                <div className={` ${classes.itemBox} ${classes.topLeft}`}>
                    <MessageBox backgroundColor={"#6ca07a"} height={"20%"} left={"5%"} width={"90%"} message={"Ο Καιρός Τώρα"} top={"2%"} />
                    <div className={classes.textBox}>
                        <p className={classes.textP}><FontAwesomeIcon icon={faBolt} /> Καιρός: Ηλιοφάνεια</p>
                        <p className={classes.textP}><FontAwesomeIcon icon={faBatteryFull} /> Θερμοκρασία: {temperature}°C</p>
                        <p className={classes.textP}><FontAwesomeIcon icon={faSolarPanel} /> Υγρασία: {moisture}%  </p>
                    </div>
                </div>


                <div className={`${classes.itemBox} ${classes.topRight}`}>
                    <MessageBox backgroundColor={"#CCCCB1"} height={"20%"} left={"5%"} width={"90%"} message={"Παραγωγή ενέργειας"} top={"2%"} />
                    <div className={classes.textBox}>
                        <p className={classes.textP}><FontAwesomeIcon icon={faBolt} /> Παραγωγή ενέργειας τώρα: 15,2 Wh</p>
                        <p className={classes.textP}><FontAwesomeIcon icon={faBatteryFull} /> Επίπεδο αποθέματος ενέργειας: 15%</p>
                        <p className={`${classes.textWarning} ${classes.textP}`} style={{ color: "red", fontWeight: "bold" }}>⚠️ Προειδοποιητικό μήνυμα: Η στάθμη της ενέργειας είναι κάτω από 20%! <br />   Χρησιμοποιήστε με σύνεση την ενέργεια  που απομένει! </p>
                    </div>
                </div>

                <div className={`${classes.itemBox} ${classes.bottomLeft}`}>
                    <MessageBox backgroundColor={"#CCCCB1"} height={"20%"} left={"5%"} width={"90%"} message={"Κατανάλωση ενέργειας"} top={"2%"} />

                    <p className={`${classes.textBox} ${classes.textP}`}><FontAwesomeIcon icon={faBolt} /> Κατανάλωση ενέργειας τώρα: {generateEnergyConsumption()}Wh</p>

                </div>

                <div className={`${classes.itemBox} ${classes.bottomRight}`}>
                    <MessageBox backgroundColor={"#8A8B9D"} height={"20%"} left={"5%"} width={"90%"} message={"Options"} top={"2%"} />

                    <label className={classes.textBoxSlider}>
                        <div className={classes.textP}>
                            <p>Ηλεκτρική Κουβέρτα:</p>
                            <input className={classes.checkBox} type="checkbox" id="aircondition-toggle" checked={isElecticBlanket} onClick={() => isElecticBlanket ? setIsElectricBlanket(false) : setIsElectricBlanket(true)} />
                            <span className={classes.slider}></span>
                        </div>
                    </label>
                    <label className={`${classes.textBoxSlider} ${classes.textBoxSliderTwo}`}>
                        <div className={classes.textP}>
                            <p>Κλιματισμός:</p>
                            <input className={classes.checkBox} type="checkbox" id="aircondition-toggle" checked={isAirCondition} onClick={() => isAirCondition ? setIsAirCondition(false) : setIsAirCondition(true)} />
                            <span className={classes.slider}></span>
                        </div>
                    </label>

                    <div className={`${classes.textBoxSlider} ${classes.textBoxSliderThree}`}>
                        <p className={classes.textP}><FontAwesomeIcon icon={faBatteryFull} /> Θερμοκρασία Κλιματισμού: {isAirCondition ? airConditionTemperature + '°C' : '-'}</p>
                        {isAirCondition ? 
                        <>
                            <button className={classes.buttonTemp} onClick={() => {
                                if (airConditionTemperature < 30) {
                                    setAirConditionTemperature((airConditionTemperature) => airConditionTemperature + 1);
                                }
                            }} variant="outline"> + </button>
                            <button className={classes.buttonTemp} onClick={() => {
                                if (airConditionTemperature > 18) {
                                    setAirConditionTemperature((airConditionTemperature) => airConditionTemperature - 1);
                                }
                            }} variant="outline"> - </button>
                        </>
                        : 
                        <></>
                        }

                    </div>
                </div>
                                        
                <Link to = {"#"} className={`linkApply ${classes.linkApplyEnergy}`}>Apply</Link>

            </div>



            <LeftPanel page="makeTent" levelMakeTent={5} linkNext={{ link: "#", bool: true, lock: true }} linkPrev={{ link: "/lightPanel", bool: true }} />
            <Header panel={"messageBox"} message={'Διαχείριση Ενέργειας Ενεργειακού Ελέγχου'} helpPage={"energy"} />
        </>
    );
}
export default EnergyPanel;