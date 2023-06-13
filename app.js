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



const carritoP = [
    {id: 1, nombre: "Iphone 7", precio: 110000, espacio: "32gb", tamanio: "12 x 6cm", imagen: './media/Colors.jpg'},
    {id: 2,nombre: "Iphone 8", precio: 120000, espacio: "64gb",tamanio: "12 x 8cm", imagen: 'media/Colors.jpg'},
    {id: 3,nombre: "Iphone 9", precio: 160000, espacio: "64gb", tamanio: "10 x 7cm", imagen: 'media/Colors.jpg'},
    {id: 4,nombre: "Iphone 10", precio: 180000, espacio: "128gb", tamanio: "12 x 8cm", imagen: 'media/Colors.jpg'},
    {id: 5,nombre: "Iphone 11", precio: 200000, espacio: "256gb",tamanio: "13 x 8", imagen: 'media/Colors.jpg'},
    {id: 6,nombre: "Iphone 12", precio: 220000, espacio: "256gb",tamanio: "14 x 8", imagen: 'media/Colors.jpg'}
]



//COMO PASAR OBJETO A JSON
 const aJSON = JSON.stringify(carritoP)

const enJSON = JSON.parse(aJSON)
console.log(aJSON)
console.log(enJSON)
const primerClick = document.querySelector(".menorA")
primerClick.addEventListener("click", ()=>{
    const mayorAMenor = enJSON.sort((a, b) => b.precio - a.precio)
        
        const container = document.querySelector(".produc");
        //carrito es el indice con el cual vamos a llamar a los objetos de

        while(container.firstChild){
            container.firstChild.remove();
        }
    for(carrito of mayorAMenor){
        let mostrarCarrito = document.createElement("div")
        mostrarCarrito.innerHTML =
        `

                <img>${carrito.imagen}</img>
                <h3>Celular: ${carrito.nombre} </h3>
                <h3>Precio : ${carrito.precio}</h3>
                <h3>Espacio : ${carrito.espacio}</h3>
                <h3>Tamaño : ${carrito.tamanio}</h3>
                <button class="btn">Agregar al carrito</button>

        `
        container.appendChild(mostrarCarrito)
        

       // let resultado = carritoP.filter((p) => p.nombre === "A")
    }
})

const segundoClick = document.querySelector(".mayorA")
segundoClick.addEventListener("click",() =>{
    const menorAMayor = enJSON.sort((a, b) => a.precio - b.precio)
        const container = document.querySelector(".produc")
        while(container.firstChild){
            container.firstChild.remove();
        }
    for(carrito of menorAMayor){
        let mostrarCarrito = document.createElement("div")
        mostrarCarrito.innerHTML =
        
        `
        <img>${carrito.imagen}</img>
        <h3>Celular: ${carrito.nombre} </h3>
        <h3>Precio : ${carrito.precio}</h3>
        <h3>Espacio : ${carrito.espacio}</h3>
        <h3>Tamaño : ${carrito.tamanio}</h3>
        <button class="btn">Agregar al carrito</button>
        `
        container.appendChild(mostrarCarrito)
        
}
} )


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
