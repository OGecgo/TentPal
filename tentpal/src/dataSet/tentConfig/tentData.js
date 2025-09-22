
// cloud, sunny, snow, rain
let tentType = "none";

function getTentType()     {return tentType;}
function setTentType(type) {tentType = type;}

function resetData(){
    tentType = "none";
}

export default {
    getTentType,
    setTentType,

    resetData
}