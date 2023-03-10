// Botones de contenido

let secciones = document.querySelectorAll("section");
let botonesDeContenido = document.querySelectorAll("#menu-contenidos > p");

botonesDeContenido[0].addEventListener("click", function(ev){
    secciones[1].className = "visible";
    secciones[2].className = "invisible";
    secciones[3].className = "invisible";
    secciones[4].className = "invisible";
    botonesDeContenido[0].className = "boton-activado";
    botonesDeContenido[1].className = "";
    botonesDeContenido[2].className = "";
    botonesDeContenido[3].className = "";
    nav.className = "invisible";
});

botonesDeContenido[1].addEventListener("click", function(ev){
    secciones[1].className = "invisible";
    secciones[2].className = "visible";
    secciones[3].className = "invisible";
    secciones[4].className = "invisible";
    botonesDeContenido[0].className = "";
    botonesDeContenido[1].className = "boton-activado";
    botonesDeContenido[2].className = "";
    botonesDeContenido[3].className = "";
    nav.className = "invisible";
});

botonesDeContenido[2].addEventListener("click", function(ev){
    secciones[1].className = "invisible";
    secciones[2].className = "invisible";
    secciones[3].className = "visible";
    secciones[4].className = "invisible";
    botonesDeContenido[0].className = "";
    botonesDeContenido[1].className = "";
    botonesDeContenido[2].className = "boton-activado";
    botonesDeContenido[3].className = "";
    nav.className = "invisible";
});

botonesDeContenido[3].addEventListener("click", function(ev){
  secciones[1].className = "invisible";
  secciones[2].className = "invisible";
  secciones[3].className = "invisible";
  secciones[4].className = "visible";
  botonesDeContenido[0].className = "";
  botonesDeContenido[1].className = "";
  botonesDeContenido[2].className = "";
  botonesDeContenido[3].className = "boton-activado";
  nav.className = "invisible";
});


// Botones para seleccionar el tema

let botonesDeTema = document.querySelectorAll("#menu-temas > p");

botonesDeTema[0].addEventListener("click", function(ev){
    document.body.className = "tema1";
    botonesDeTema[0].className = "boton-activado";
    botonesDeTema[1].className = "";
    botonesDeTema[2].className = "";
});


botonesDeTema[1].addEventListener("click", function(ev){
    document.body.className = "tema2";
    botonesDeTema[0].className = "";
    botonesDeTema[1].className = "boton-activado";
    botonesDeTema[2].className = "";
});

botonesDeTema[2].addEventListener("click", function(ev){
    document.body.className = "tema3";
    botonesDeTema[0].className = "";
    botonesDeTema[1].className = "";
    botonesDeTema[2].className = "boton-activado";
});

