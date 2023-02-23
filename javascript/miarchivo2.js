// alert("ingrese la opcion que desea consultar, para salir ingresa 0")
// let seleccionarProductos = Number(prompt("1-Remera $3500 2-Buzo $7000 3-Jean $4700 4-Zapatillas $8000"))
// let seleccionarCantindad;
// let total = 0;

// const cantidad = (cant,precio) => {
//     return cant * precio
// }

// let arrayProductos = []

// let remera = {nombre:"remera", precio:3500}
// let buzo = {nombre:"buzo", precio:7000}
// let jean = {nombre:"jean", precio:4700}
// let zapatillas = {nombre:"zapatillas", precio:8000}

// while(seleccionarProductos !== 0) {
//     switch (seleccionarProductos){
//         case 1:
//             seleccionarCantindad= prompt("el producto seleccionado es remera, indique la cantidad")
//             arrayProductos.push("remera")
//             total += cantidad(seleccionarCantindad, 3500)
//             break;
//         case 2:
//             seleccionarCantindad= prompt("el producto seleccionado es buzo, indique la cantidad")
//             arrayProductos.push("buzo")
//             total += cantidad(seleccionarCantindad, 7000)
//             break;
//         case 3:
//             seleccionarCantindad= prompt("el producto seleccionado es jean, indique la cantidad")
//             arrayProductos.push("jean")
//             total += cantidad(seleccionarCantindad, 4700)
//             break;
//         case 4:
//             seleccionarCantindad= prompt("el producto seleccionado es zapatillas, indique la cantidad")
//             arrayProductos.push("zapatillas")
//             total += cantidad(seleccionarCantindad, 8000)
//             break;
    
//         default:
//             break;
//     }
//     seleccionarProductos = Number(prompt("1-Remera $3500 2-Buzo $7000 3-Jean $4700 4-Zapatillas $8000"))
// }

// alert("el total de la compra es de:" + total)
// console.log(arrayProductos);
// for (const item of arrayProductos){
//     document.write(item, "\n")
// }

// const envio = () => {
//     if (total >= 20000){
//         alert("el envio es gratuito")
//     }
//     else{
//         total += 20000
//         alert("el costo de envio es de 2000, el total es: " + total)
//     }
// }

// envio()
