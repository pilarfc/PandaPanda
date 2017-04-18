var botonOrigen =  document.getElementById("botonOrigen"); 
var botonHistoria = document.getElementById("botonHistoria");
var botonRestaurar = document.getElementById("botonRestaurar"); 

var textoOrigen = document.getElementById("textoOrigen");
var textoHistoria = document.getElementById("textoHistoria"); 

var botonesCerrar = document.getElementsByClassName("cerrar"); // spans 
var imagenes = document.getElementsByClassName("pandas");
console.log(botonesCerrar); 


botonOrigen.addEventListener("click", mostrartextoOrigen);
botonOrigen.addEventListener("dblclick", ocultartextoOrigen); 
botonHistoria.addEventListener("click", mostrartextoHistoria);
botonHistoria.addEventListener("dblclick", ocultartextoHistoria);
botonRestaurar.addEventListener("click", restaurarImagenes);


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



function ocultarImagen (boton) {
    
  
      
}

function restaurarImagenes () {
    for (var i =0; i<imagenes.length; i++) {
  imagenes[i].style.visibility = "visible";  // si funciona, si cambias a hidden, se nota. 
 }
}


