


//                       depth,               degree
let stakesData = [[0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5]]; 

// type =  depth <= 0 degre <= 1
function getStakesData(type, pos)    {return stakesData[type][pos];}
function setStakesData(e, type, pos) {stakesData[type][pos] = e;}

function resetData(){
    stakesData = [[0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5]]; 
}
export default {
    getStakesData,
    setStakesData,

    resetData
}