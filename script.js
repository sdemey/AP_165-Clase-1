// capturar el elemento boton
let btnCapturado;
//capturamos el boton y lo guardamos en la variable
btnCapturado = document.querySelector ("button")
console.log (btnCapturado);
//escuchar todo el tiempo el boton cuando hagan click
btnCapturado.addEventListener ("click", ()=> alert ("te saludo, hola cat"));