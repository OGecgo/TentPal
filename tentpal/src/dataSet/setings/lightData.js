

let simpleLight = false; 
let nightLight  = false;

let color      = "#FFFFFF";
let valueColor = 768;
let intensity  = 0.75;

function getSimpleLight()  {return simpleLight;}
function setSimpleLight(e) {simpleLight = e;}
function getNightLight()  {return nightLight;}
function setNightLight(e) {nightLight = e;}

function getColor()  {return color;}
function setColor(e) {color = e;}
function getValueColor()  {return valueColor;}
function setValueColor(e) {valueColor = e;}
function getIntensity()  {return intensity;}
function setIntensity(e) {intensity = e;}

function resetData() {
    simpleLight = false;
    nightLight  = false;

    color      = "#FFFFFF"
    valueColor = 768
    intensity  = 0.75;
}
export default {
    getSimpleLight,
    setSimpleLight,
    getNightLight,
    setNightLight,

    getColor,
    setColor,
    getValueColor,
    setValueColor,
    getIntensity,
    setIntensity,

    resetData
}