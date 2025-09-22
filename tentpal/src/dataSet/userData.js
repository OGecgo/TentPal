
import stakes from "./tentConfig/stakesData"
import tent   from "./tentConfig/tentData"
import map    from "./mapData"
import messengerData from "./messengerData";
import lightData from "./setings/lightData";
import energyData from "./setings/energyData";


let userMode = false;
let typeWeather = "none";       // cloudy, sunny, snow, rain
let intensityWeather = "good";  // no_warning, warning


// --getters setters--

// Weather modes
function getTypeWeather()     {return typeWeather;}
function setTypeWeather(e)    {typeWeather = e;}

function getIntensityWeather()  {return intensityWeather;}
function setIntensityWeather(e) {intensityWeather = e;}

function getUserMode()  {return userMode;}
function setUserMode(e) {userMode = e;}


function resetData() {

    typeWeather = "none";
    intensityWeather = "good";
    userMode = false;

    map.resetData();
    tent.resetData();
    stakes.resetData();
    lightData.resetData();
    energyData.resetData();
    messengerData.resetData();
}


export default {
    getUserMode,
    setUserMode,
    getTypeWeather,    
    setTypeWeather,
    getIntensityWeather,
    setIntensityWeather,

    resetData
};