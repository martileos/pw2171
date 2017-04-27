const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");

var buscarPersonaje = function(){
	
}

//Posiciona el cursor en el cuadro de texto
$("#txtPersonaje").focus();
//Evento del botón btnBuscar-click
$("#btnBuscar").on("click",buscarPersonaje);