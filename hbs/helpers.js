const hbs = require("hbs");
hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
  });
  
  hbs.registerHelper("capitalizar", (texto) => {
    let arregloTexto = texto.split(" ");
    arregloTexto.forEach((palabra, idX) => {
      console.log(palabra);
      arregloTexto[idX] =
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return arregloTexto.join(" ");
  });