

let chatMessage = []

function getChatMessage()  {return chatMessage;}
function setChatMessage(e) {chatMessage = e;}

function resetData(){
    chatMessage = [];
}

export default {
    getChatMessage,
    setChatMessage,

    resetData
}