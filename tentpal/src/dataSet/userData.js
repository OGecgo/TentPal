

let posMap = [-1, -1];

// normal, warm, cold, rain
let tentType = "none";

// depth, degree
let stakesData = [[50, 50], [50, 50], [50, 50], [50, 50]]; 

// normal, warm, cold, rain
let typeOfWeather = ""; 
// no_warning, warning
let intensityWeather = "";




// --getters setters--

function getPosMap()     {return posMap;}
function setPosMap(x, y) {posMap[0] = x; posMap[1] = y;}
   
function getPosType()     {return tentType;}
function setPosType(type) {tentType = type;}
  
function getStakesData()  {return stakesData;}
function setStakesData(e) {stakesData = e;}

// Weather
function getTypeOfWeather()     {return typeOfWeather;}
function setTypeOfWeather(e)    {typeOfWeather = e;}

function getIntensityWeather()  {return intensityWeather;}
function setIntensityWeather(e) {intensityWeather = e;}


export default {
    getPosMap,
    setPosMap,

    getPosType,
    setPosType,

    getStakesData,
    setStakesData,
    
    getTypeOfWeather,    
    setTypeOfWeather,
    getIntensityWeather,
    setIntensityWeather    
};