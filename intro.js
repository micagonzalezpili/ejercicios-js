let miNombre = "Micaela"
let miApellido = "Gonzalez Pili"
let miEdad = 22
let miMascota = "Otto"
let edadMascota = 1
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota) 
let nombreCompleto = miNombre + miApellido
console.log(nombreCompleto)
let textoPresentacion = `Mi nombre es ${miNombre} ${miApellido}, tengo ${miEdad} años. Mi gato se llama ${miMascota} y tiene ${edadMascota} añito.`
console.log(textoPresentacion)
let sumaEdades = miEdad + edadMascota
console.log(sumaEdades)
let restaEdades = miEdad - edadMascota
console.log(restaEdades)
let productoEdades = miEdad * edadMascota
console.log(productoEdades)
let divisionEdades = miEdad / edadMascota
console.log(divisionEdades)
let textoPresentacion2 = `Mi nombre es ${miNombre} ${miApellido}, tengo ${miEdad} años. Mi gato se llama ${miMascota} y tiene ${edadMascota} añito. Si sumamos nuestras edades el resultado es ${sumaEdades},
si la restamos nos da ${restaEdades}, si la multiplico ${productoEdades} y por ultimo si la divido resulta en ${divisionEdades}. Gracias por visitar mi primer ejercicio de JS <3`
console.log(textoPresentacion2)