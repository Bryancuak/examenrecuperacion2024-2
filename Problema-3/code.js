const fs = require('node:fs');

var palabras = 'hola como estan todos ayuda owo yupi'


fs.readFile('palabra.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err);
        return;
    }

    const caracteres_Especiales = [';', ':', "'", '=', '(', ')', '"','*', '.', ' ', '@', '[', ']', '|', '\n', '\r',',']
    let arraySpliteado = [];
    let cadenasDeTexto = [];
    let palabra = "";

    for (let i = 0; i < data.length; i++) {
        const caracter = data[i];

        if (caracteres_Especiales.includes(caracter)) {
            if (palabra !== "") {
                arraySpliteado.push(palabra); // inserta todas las palabras al final del arreglo
                // console.log(palabra);
                palabra = "";
            }
            if (caracter !== ' ') {
                arraySpliteado.push(caracter) //inserta todos los caracteres al final del arreglo
            }
        }
        else{
            palabra += caracter; //con esto se concatena todo aquello que no es un caracter especial
        }
    }
    console.log(arraySpliteado);


});