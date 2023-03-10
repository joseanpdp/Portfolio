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
