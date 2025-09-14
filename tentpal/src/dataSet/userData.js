

let posMap = [-1, -1];

// normal, warm, cold, rain
let tentType = "none";

// depth, degree
let stakesData = [[50, 50], [50, 50], [50, 50], [50, 50]]; 

// normal, warm, cold, rain
let typeWeather = "none"; 
// no_warning, warning
let intensityWeather = "good";




// --getters setters--

function getPosMap()     {return posMap;}
function setPosMap(x, y) {posMap[0] = x; posMap[1] = y;}
   
function getTentType()     {return tentType;}
function setTentType(type) {tentType = type;}
  
function getStakesData()  {return stakesData;}
function setStakesData(e) {stakesData = e;}

// Weather
function getTypeWeather()     {return typeWeather;}
function setTypeWeather(e)    {typeWeather = e;}

function getIntensityWeather()  {return intensityWeather;}
function setIntensityWeather(e) {intensityWeather = e;}


function resetData() {
    posMap = [-1, -1];
    tentType = "none";
    stakesData = [[50, 50], [50, 50], [50, 50], [50, 50]]; 
    typeWeather = "none"; 
    intensityWeather = "good";
}


export default {
    getPosMap,
    setPosMap,

    getTentType,
    setTentType,

    getStakesData,
    setStakesData,

    getTypeWeather,    
    setTypeWeather,
    getIntensityWeather,
    setIntensityWeather,
    
    resetData
};