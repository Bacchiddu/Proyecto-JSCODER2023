/*let name = prompt('Ingrese su nombre')
let edad = number(prompt('Ingrese su edad'))
alert('Bienvenido ' + name + ' de ' + edad + ' años');
*/
/*
let numero1 = parseInt(prompt('Ingrese un numero'));
let numero2 = Number(prompt('Ingrese otro numero'));
//parseInt pasar a entero
let suma = numero1 + numero2;

alert('la suma de ambos numero da ' + suma) 
*/

/* alert('Tenemos distinstas promos dependiendo de su edad. Presione aceptar!')
let edad = prompt('Ingrese su edad')

if (edad > 60 && edad < 70){
    alert('tenes entre 60 y 70')
}else alert('chao') */

// Tengo que reveer la clase 26/4 muy importante, switch, for, while, do while

/* let i = 0
while(i <= 6){
    alert(i)
    i++
} */
/* 
let comida = prompt('¿Que desea ordenar?')

switch(comida){
    case 'hamburguesa':
        console.log(`Pedido ${comida}, Valor $1000`)
        break
    case 'pizza' :
        console.log(`Pedido ${comida}, Valor $1300`)
        break
    case 'lomo':
        console.log(`Pedido ${comida}, valor $500`)
        break
    default :
        console.log('No tenemos esto en nuestro menú')
        break
} */

/* let peliculas = prompt(`
1:Fast and furious 
2:Fast and furious 2
3:Fast and furious 3
4:Fast and furious 4
5:Fast and furious 5
`)

switch (peliculas) {
    case '1':
        console.log('Ejecutando Fast and furious')
        break;
    case '2':
        console.log('Ejecutando Fast and furious 2')
        break
    case '3':
        console.log('Ejecutando Fast and furious 3')
        break
    case '4':
        console.log('Ejecutando Fast and furious 4')
        break
    case '5':
        console.log('Ejecutando Fast and furious 5')
        break        
    default:
        console.log('La opción ingresada no es correcta líder')
        break;
} */
 
//CICLOS
//Ciclos por conteo (FOR)
//Ciclos por condicionales (WHILE - DO WHILE)

/* let entrada = prompt('Ingrese texto o ESC para interrumpir')
let texto = ''

while (entrada != 'ESC' && entrada != 'esc' ){
    texto += entrada + ' '
    entrada = prompt('Ingrese texto o ESC para interrumpir')
} 
alert(texto)
 */



/* let resultado = 0
let parametro1 = Number(prompt('Ingrese 2 numero para ser sumados'))
let parametro2 = Number(prompt('Ingrese el segundo número')) */


/* function sumar(){
    let parametro1 = Number(prompt('Ingrese 2 numero para ser sumados'))
    let parametro2 = Number(prompt('Ingrese el segundo número'))
    let resultado = parametro1 + parametro2
    console.log(resultado)
}
sumar() */
/* function respuesta(){
    console.log(sumar())
}
respuesta() */
/* function respuesta(){
    console.log(respuesta)
}

respuesta(resultado) */


function caso1() {
    let precioBase = 50000
    let caso1 = prompt('Tenemos \nOpción 1) Economica blanca, \nOpción 2) Colores basicos, \nOpción 3) Texturas y vidriadas. Escriba solo el numero')
    // let precioFinal 
    if(caso1 == '1'){
        precioBase 
        descuento()
        console.log('EL total es de ' + precioBase)
    
    }else if(caso1 == '2'){
        precioBase += 10000 
        descuento()
        console.log('EL total es de ' + precioBase)

    }else if(caso1 == '3'){
        precioBase += 20000 
        descuento()
        console.log('EL total es de ' + precioBase)
        
    }
    function descuento(){
        let NewCliente = prompt('Es tu primer compra? SI, NO')
            if(NewCliente == "SI" || (NewCliente == "si") ){
                precioBase -= 2500
                alert('tenes un descuento de 2500')
            }else{console.log('No hay descuento')
        }
       }
}
function caso2() {
    let precioBase = 20000
    let caso2 = prompt('Tenemos \nOpción 1) Bajomesada blanco con pileta económica, \nOpción 2) Bajomesada de color con pileta mediana, \nOpción 3) Vidrio o textura con pileta a elección. \nEscriba solo el numero')

    if(caso2 == '1'){
        precioBase 
        descuento()
        console.log('EL total es de ' + precioBase)
    
    }else if(caso2 == '2'){
        precioBase += 5000 
        descuento()
        console.log('EL total es de ' + precioBase)

    }else if(caso2 == '3'){
        precioBase += 10000 
        descuento()
        console.log('EL total es de ' + precioBase)
        
    }
    function descuento(){
        let NewCliente = prompt('Es tu primer compra? SI, NO')
            if(NewCliente == "SI" || (NewCliente == "si") ){
                precioBase -= 2500
                alert('tenes un descuento de 2500')
            }else{console.log('No hay descuento')
            }
        }
}

function caso3() {
    let precioBase = 10000
    let caso3 = prompt('Tenemos \nOpción 1) Pileta chica, \nOpción 2) Pileta mediana, \nOpción 3) Premium Pileta Grande. \nEscriba solo el numero')
    
    if(caso3 == '1'){
        precioBase 
        descuento()
        console.log('EL total es de ' +precioBase)
    
    }else if(caso3 == '2'){
        precioBase += 5000 
        descuento()
        console.log('EL total es de ' + precioBase)

    }else if(caso3 == '3'){
        precioBase += 10000 
        descuento()
        console.log('EL total es de ' +precioBase)
        
    }
    function descuento(){
        let NewCliente = (prompt('Es tu primer compra? SI, NO')) 
            if(NewCliente == "SI" || (NewCliente == "si") ){
                precioBase -= 2500
                alert('tenes un descuento de 2500')
            }else{console.log('No hay descuento')
            }
        }
}



let inicio = prompt('opciones: \nOpción 1: Amoblamiento completo \nOpcion 2: Bajo mesada con pileta \nOpción 3:Solo Pileta');
    switch (inicio) {
        case "1":
            caso1()
            break;
        case '2':
            caso2()
            break
        case '3':
            caso3()
            break
        default:
            console.log('Ninguna opción es valida')
            break;
    }


// acaaaaaaaaaaaaaaaaaaaaaa
/* const producto = {
    //propiedades
    //clave : valor
    nombre: "Monitor de 24 pulgadas",
    precio: 10000,
    disponible: true
}
//Agregando una propiedad
producto.imagen = "image.jpg"
//Eliminando propiedades
delete producto.disponible
//Modificar propiedades
producto.disponible = false
// console.log(producto)

console.log(producto) */

/* function producto(nombre, precio, espacio, tamanio){
    this.nombre = nombre
    this.precio = precio
    this.espacio = espacio
    this.tamanio = tamanio
    this.disponible = true
}
const producto2 = new producto("Iphone 11", "$100000", "64gb", "10cm x 7cm")
const producto3 = new producto("Iphone 12", "$140000", "128gb", "12cm x 7cm")
const producto4 = new producto("Iphone 13", "$160000", "128gb", "14cm x 8cm")
let practicaBienvenida = prompt("Tenemos estos productos, elija uno  \n1 Iphone 11  \n2 Iphone 12  \n3 Iphone 13")

switch (practicaBienvenida) {
    case "1":
        console.log(producto2)
        break;
    case "2":
        console.log(producto3)
        break
    case "3":
        console.log(producto4)
        break
    default:
        break;
} */