

let isAirCondition = false;
let airConditionTemperature = 25;
let isElecticBlanket = false;


function getIsAirCondition()  {return isAirCondition;}
function setIsAirCondition(e) {isAirCondition = e;}
function getAirConditionTemperature()  {return airConditionTemperature;}
function setAirConditionTemperature(e) {airConditionTemperature = e;}
function getIsElecticBlanket()  {return isElecticBlanket;}
function setIsElecticBlanket(e) {isElecticBlanket = e;}

function resetData(){
    isAirCondition = false;
    airConditionTemperature = 25;
    isElecticBlanket = false;
}

export default {
    getIsAirCondition,
    setIsAirCondition,
    getAirConditionTemperature,
    setAirConditionTemperature,
    getIsElecticBlanket,
    setIsElecticBlanket,

    resetData
}