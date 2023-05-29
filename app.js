//FOR EACH - Por cada uno
/* arrayAlumnos.forEach((a, i) => {
    console.log(a)
    console.log(i)
}) */
//MAP
/* const arrayAlumnos = ["Levi","Franco","Rodrigo"]
arrayAlumnos.map((a, i) => {
    console.log(a)
    console.log(i)
}) */

/* let totalCompra = carritoP.reduce((a, p) => {
    return a + p.precio
},0) */

//let menorA = carritoP.filter((p) => p.precio < 150000)
const carritoLista = document.querySelector("#carritoP")
const carritoP = [
    {nombre: "Iphone 7", precio: 110000, espacio: "32gb", tamanio: "12 x 6cm"},
    {nombre: "Iphone 8", precio: 120000, espacio: "64gb",tamanio: "12 x 8cm"},
    {nombre: "Iphone 9", precio: 160000, espacio: "64gb", tamanio: "10 x 7cm"},
    {nombre: "Iphone 10", precio: 180000, espacio: "128gb", tamanio: "12 x 8cm"},
    {nombre: "Iphone 11", precio: 200000, espacio: "256gb",tamanio: "13 x 8"}
]

let entradaCelu
do {
    entradaCelu = prompt(`
    Como te muestro los precio:
    1)Mayor a menor
    2)Menor a mayor
    `)
}while (entradaCelu !== '1' && entradaCelu !== '2');
    

switch (entradaCelu) {
    case '1':
        const mayorAMenor = carritoP.sort((a, b) => b.precio - a.precio)
        console.log(mayorAMenor)
        //carrito es el indice con el cual vamos a llamar a los objetos de
    for(carrito of mayorAMenor){
        let mostrarCarrito = document.createElement("div")
        mostrarCarrito.innerHTML =
        `
        <h3>Celular: ${carrito.nombre} </h3>
        <h3>Precio : ${carrito.precio}</h3>
        <h3>Espacio : ${carrito.espacio}</h3>
        <h3>Tamaño : ${carrito.tamanio}</h3>
        <button class="btn">Agregar al carrito</button>
        `
        document.body.appendChild(mostrarCarrito)
       // let resultado = carritoP.filter((p) => p.nombre === "A")
    }
        break;
    case '2':

    const menorAMayor = carritoP.sort((a, b) => a.precio - b.precio)
        console.log(menorAMayor)
    for(carrito of menorAMayor){
        let mostrarCarrito = document.createElement("div")
        mostrarCarrito.innerHTML =
        
        `
        <h3>Celular: ${carrito.nombre} </h3>
        <h3>Precio : ${carrito.precio}</h3>
        <h3>Espacio : ${carrito.espacio}</h3>
        <h3>Tamaño : ${carrito.tamanio}</h3>
        <button class="btn">Agregar al carrito</button>
        `
        document.body.appendChild(mostrarCarrito) 

    
}
        break;
    default:
        break;
}
 



/* //FILTER
let resultado = carritoP.filter((p) => p.nombre === "A")
//FIND trae solo el primero que encuentra
let resultado2 = carritoP.find((p) => p.nombre === "A")
console.log(resultado) */
 //Math.ceil redondear a numero superior
 //Math.floor redondear a numero inferior
  //Math.round redondear a numero entero
//  (Math.round(Math.random() * 10)) NUMERO RANDOM ENTERO

/* 
class producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio =  parseFloat(precio);
        this.vendido = false
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
        console.log(parseFloat(this.precio))
    }
    vender(){
        this.vendido = true;
    }
}
const productop1 = new producto("Iphone 11", "300000")
const productop2 = new producto("Iphone 12","350000")
productop1.sumarIva()
productop2.sumarIva() */

/* function primero(segundo){
    setTimeout(function(){
        console.log("PRIMERO");
        segundo()
    }, 5000)
}

function segundo(){
    console.log("SEGUNDO")
}

primero(segundo) */
