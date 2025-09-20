

let posMap = [-1, -1];
let countBlocks = 0;

// map data save
let selectLocation = null;
let eventsMap = null;
let sosMap = null;


function getCountBlocks() {return countBlocks;}
function setCountBlocks(e) {countBlocks = e;}
function getPosMap()     {return posMap;}
function setPosMap(x, y) {posMap[0] = x; posMap[1] = y;}

function getSelectLocation()  {return selectLocation;}
function setSelectLocation(e) {selectLocation = e;}
function getEventsMap     ()  {return eventsMap;}
function setEventsMap     (e) {eventsMap = e;}
function getSOSMap        ()  {return sosMap;}
function setSOSMap        (e) {sosMap = e;}

function resetData(){
    posMap = [-1, -1];
    countBlocks = 0;

    selectLocation = null;
    eventsMap = null;
    sosMap = null;
}

export default {
    getCountBlocks,
    setCountBlocks,
    getPosMap     ,
    setPosMap     ,

    getSelectLocation,
    setSelectLocation,
    getEventsMap     ,
    setEventsMap     ,
    getSOSMap        ,
    setSOSMap        ,

    resetData
}