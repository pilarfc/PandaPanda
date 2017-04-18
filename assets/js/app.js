var botonOrigen =  document.getElementById("botonOrigen"); 
var botonHistoria = document.getElementById("botonHistoria");
var botonRestaurar = document.getElementById("botonRestaurar"); 

var textoOrigen = document.getElementById("textoOrigen");
var textoHistoria = document.getElementById("textoHistoria"); 


botonOrigen.addEventListener("click", mostrartextoOrigen);
botonOrigen.addEventListener("dblclick", ocultartextoOrigen); 
botonHistoria.addEventListener("click", mostrartextoHistoria);
botonHistoria.addEventListener("dblclick", ocultartextoHistoria);



function mostrartextoOrigen () {
    textoOrigen.style.visibility = "visible";
}

function ocultartextoOrigen () {
 textoOrigen.style.visibility = "hidden"; 
}

function mostrartextoHistoria () {
    textoHistoria.style.visibility = "visible";
}

function ocultartextoHistoria () {
    textoHistoria.style.visibility = "hidden"; 
}



function borrarImagen () {
document.getElementsByClassName("pandas").style.visibility = "hidden";
}

