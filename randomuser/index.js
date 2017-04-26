const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");
function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	    $("#txtNombre").html(data.results[0].name.first+" "+
	    					 data.results[0].name.last)
	    $("#imgFoto").attr("src",data.results[0].picture.large)
	    var genero = data.results[0].gender;
	    if(genero == "male"){
	    	$("#txtGenero").html("Masculino");
	    }
	    else{
	    	$("#txtGenero").html("Femenino");	
	    }
	    $("#txtDireccion").html(data.results[0].location.street+", "+data.results[0].location.city+", "+data.results[0].location.state+", "+data.results[0].location.postcode);
	    $("#txtEmail").html(data.results[0].email);	
	   	$("#txtUsuario").html("Usuario:<br>"+data.results[0].login.username+"<br>"
	   										+data.results[0].login.password+"<br>"
	   										+data.results[0].login.salt+"<br>"	
	   										+data.results[0].login.md5+"<br>"
	   										+data.results[0].login.sha1+"<br>"	
	   										+data.results[0].login.sha256+"<br>"		   										
	   										);	
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}
$("#btnInfo").on("click",datosRandom);













