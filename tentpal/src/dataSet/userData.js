

let posMap = [-1, -1];

// normal, warm, cold, rain
let tentType = "none";

// depth, degree
let stakesData = [[50, 50], [50, 50], [50, 50], [50, 50]]; 

// normal, warm, cold, rain
let typeOfWeather = "none"; 
// no_warning, warning
let intensityWeather = "no_warning";




// --getters setters--

function getPosMap()     {return posMap;}
function setPosMap(x, y) {posMap[0] = x; posMap[1] = y;}
   
function getTentType()     {return tentType;}
function setTentType(type) {tentType = type;}
  
function getStakesData()  {return stakesData;}
function setStakesData(e) {stakesData = e;}

// Weather
function getTypeOfWeather()     {return typeOfWeather;}
function setTypeOfWeather(e)    {typeOfWeather = e;}

function getIntensityWeather()  {return intensityWeather;}
function setIntensityWeather(e) {intensityWeather = e;}


function resetData() {
    posMap = [-1, -1];
    tentType = "none";
    stakesData = [[50, 50], [50, 50], [50, 50], [50, 50]]; 
    typeOfWeather = "none"; 
    intensityWeather = "no_warning";
}


export default {
    getPosMap,
    setPosMap,

    getTentType,
    setTentType,

    getStakesData,
    setStakesData,

    getTypeOfWeather,    
    setTypeOfWeather,
    getIntensityWeather,
    setIntensityWeather,
    
    resetData
};