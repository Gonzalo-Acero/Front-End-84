let message: string = 'Hello World';
console.log(message);


let a:number = 23; //inferencia explícita
let b:string = "AOE3"; //inferencia explícita
let c = 101; // inferencia implícita

//c="one"; string no asignable al tipo number

//let recursos:['memoria', 'disco', 'procesador'];  array inferido implicitamente

let recursos:string [] = ['memoria', 'disco', 'procesador'] //array inferido explicitamente



function calcularIva (productos:Producto[]) :[number, number]{

    let total = 0;
    productos.forEach(({precio})=>{
        total += precio;
    });

    return [total, total*0.15];

}


//Clase Producto
class Producto {
    precio:number;
    codigobarras:string;


    constructor(precio:number, codigobarras:string){
        this.precio = precio;
        this.codigobarras = codigobarras;
    }
}


var obj = {a:2, b:3, c:4};
console.log(obj.c)

var array =  [1 ,2, 3];
console.log(array[2]);