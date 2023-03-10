let nav = document.querySelector("nav");

// Botones para seleccionar el contenido

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
    nav.className = "invisible";
});

botonesDeTema[1].addEventListener("click", function(ev){
    document.body.className = "tema2";
    botonesDeTema[0].className = "";
    botonesDeTema[1].className = "boton-activado";
    botonesDeTema[2].className = "";
    nav.className = "invisible";
});

botonesDeTema[2].addEventListener("click", function(ev){
    document.body.className = "tema3";
    botonesDeTema[0].className = "";
    botonesDeTema[1].className = "";
    botonesDeTema[2].className = "boton-activado";
    nav.className = "invisible";
});

// Selector de tarjeta

let tarjetas = document.querySelectorAll("div.tarjeta")
let selectorDeTarjeta = document.querySelector("select");

selectorDeTarjeta.addEventListener("change", function(ev){
  let value = selectorDeTarjeta.value.toLowerCase();
  if ("" === value) {
    for (let tarjeta of tarjetas) {
      tarjeta.classList.remove("invisible");
    }
  }
  else {
    for (let tarjeta of tarjetas) {
      if (tarjeta.classList.contains(value)) {
         tarjeta.classList.remove("invisible");
      }
      else {
        tarjeta.classList.add("invisible");
      }
    }
  }
});

// Notificar error de contenido del input

let remitente = document.querySelector("input:nth-of-type(1)");
remitente.addEventListener("focusout", function(ev){
  if ( remitente.value != "" ) {
    remitente.className = "correcto";
  }
  else {
    remitente.className = "incorrecto";
  }
});

let asunto = document.querySelector("input:nth-of-type(2)");
asunto.addEventListener("focusout", function(ev){
  if ( asunto.value != "" ) {
    asunto.className = "correcto";
  }
  else {
    asunto.className = "incorrecto";
  }
});

let mensaje = document.querySelector("textarea");
mensaje.addEventListener("focusout", function(ev){
  if ( asunto.value != "" ) {
    mensaje.className = "correcto";
  }
  else {
    mensaje.className = "incorrecto";
  }
});


// Botón mostrar nav en móvil

let botonMostrarNav = document.querySelector("#boton-mostrar-nav");

botonMostrarNav.addEventListener("click", function(ev){
console.log(ev);
  if ("invisible" == nav.className ) {
    nav.className = "visible";
  }
  else {
    nav.className = "invisible";
  }
});

