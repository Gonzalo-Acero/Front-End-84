"use strict";
let message = 'Hello World';
console.log(message);
let a = 23; //inferencia explícita
let b = "AOE3"; //inferencia explícita
let c = 101; // inferencia implícita
//c="one"; string no asignable al tipo number
//let recursos:['memoria', 'disco', 'procesador'];  array inferido implicitamente
let recursos = ['memoria', 'disco', 'procesador']; //array inferido explicitamente
function calcularIva(productos) {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.15];
}
//Clase Producto
class Producto {
    constructor(precio, codigobarras) {
        this.precio = precio;
        this.codigobarras = codigobarras;
    }
}
var obj = { a: 2, b: 3, c: 4 };
console.log(obj.c);
var array = [1, 2, 3];
console.log(array[2]);
