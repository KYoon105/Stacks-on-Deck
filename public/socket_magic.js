var socket = io.connect();

socket.on("message", messageReception);

socket.on("cardsDeal", cardsReception);

socket.on("cardReceive", cardReception);

function messageReception(message){
  console.log(message);
}

function cardsReception(cards) {

}

function cardReception(card) {
  
}