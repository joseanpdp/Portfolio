### Sobre el CSS
No he utilizado Boostrap.
Todo es código desarrollado por mí. Los colores de los temas los he 
realizado utilizando variables CSS colocadas en el body.
Se ha preparado para que se adapte para pantallas de móvil.
En cuanto a las animaciones, se han introducido tres:
- En la introducción, la imagen de perfil se mueve indefinidamente de 
arriba a abjo
- En la sección de portfolio, al poner el cursor sobre las tarjetas, 
estas subirán varios píxeles hacia arriba y su borde se verá rodeado 
por un sombreado de un color claro, que varía según el tema 
seleccionado.
- En la sección de contacto, los campos de texto tienen el mismo 
efecto de sombreado que los de la sección del portfolio

### Sobre el JavaScript
Todas las funcionalidades de JavaScript se encuentra en el archivo "js/app.js".
Este archivo se divide en 5 partes:
1. Botones para seleccionar contenido
    - En esta primera parte, lo que hacemos es crear una variable que almacene los elementos *section* llamada **secciones** y otra que almacene los *p* contenidos en el elemento con id *menu-contenidos* llamada **botonesDeContenido**. Ambas varialbes almacenarán dichos elementos respectivamente gracias a la función **querySelectorAll**.
    - Tras esto, usamos la función **addEventListener** sobre cada uno de los elementos almacenados en la variable **botonesDeContenido**, para que, al hacer click, una de las secciones almacenadas en la variable **secciones** tenga una clase llamada ***visible***, mientras que las demás, tengan la clase ***invisible***. Estas clases lo que harán es mostrar y ocultar las etiquetas *section* contenidas en la etiqueta *main*.
2. Botones para seleccionar tema
    - En esta parte, hacemos lo mismo, pero tan solo creamos una variable llamada **botonesDeTema** que almacena aquellos elementos *p* contenidos en la etiqueta cuyo id es *menu-temas*.
    - Usamos la función **addEventListener** sobre **botonesDeTema**, para que, al hacer click, una de las secciones almacenadas en la variable **secciones** tenga una clase llamada ***boton-activado***, mientras que las demás, no tendrán ninguna clase. Esta clase lo que hará es cambiar la paleta de colores definida en el archivo **style.css**.
3. Selector de tarjeta
4. Botón mostrar nav en móvil
5. Notificar error de contenido del input
