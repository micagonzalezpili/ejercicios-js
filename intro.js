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
si la restamos nos da ${restaEdades}, si la multiplico ${productoEdades} y por ultimo si la divido resulta en ${divisionEdades}.`
console.log(textoPresentacion2)
let alumno = {
    nombre: "Micaela",
    apellido: "Gonzalez Pili",
    edad: 22,
    altura: 1.60,
    alumno: true
}
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.altura)
console.log(alumno.alumno)
let mascota = {
    nombre: "Otto",
    edad: 1,
    ojos: "verdes",
    raza: "atigrado",
    caracteristica: "cariñoso"
}
console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.ojos)
console.log(mascota.raza)
console.log(mascota.caracteristica)
let frutas = [ "pera", "kiwi", "frutilla", "manzana", "naranja" ]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
let numeros = [1,2,3,4,5]
console.log(numeros)
console.log(numeros [0])
console.log(numeros [1])
console.log(numeros [2])
console.log(numeros [3])
console.log(numeros [4])
const familia = ["Micaela", "Lucas", "Roma", "Analia", "Fabian"]
console.log(familia)
console.log(familia [0])
console.log(familia [1])
console.log(familia [2])
console.log(familia [3])
console.log(familia [4])
const textoAleatorio = `Mi fruta favorita es el ${frutas[1]}, mi numero de la suerte el ${numeros[3]} y mi papá se llama ${familia[4]}.`
console.log(textoAleatorio)
let edad = Number(prompt("Mi edad es"))
let edadCompañero = Number(prompt("Su edad es"))
let edadesIguales = edad == edadCompañero
let soyMayor = edad > edadCompañero
let soyMenor = edad < edadCompañero 
let soyMayorDeEdad = Number(prompt("Mi edad es"))
if (soyMayorDeEdad >= 18){
    console.log("Soy mayor de edad" + " " + soyMayorDeEdad) 
} 
 let edad2 = Number(prompt("Mi edad es"))
let altura2 = Number(prompt("Mi altura es"))
let puedeSubir = edad2 + altura2
if(edad2 >= 6 && altura2 >= 120){
console.log(`Puede subir a la atracción` + " " + puedeSubir) }
let pase = prompt("Introduzca su pase: VIP, NORMAL o LIMITADO")
let saldo = Number(prompt ("Su saldo es"))
let puedePasar = pase === "VIP" || saldo >= 1000
console.log("La persona puede pasar" + " " + puedePasar)
