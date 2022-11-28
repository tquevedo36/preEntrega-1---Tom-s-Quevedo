let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad = prompt("ingresa tu edad");
console.log("bienvenido " + nombre + apellido)


let resultado = 0
function dividir(peso, estatura, estatura) {
    resultado = peso / estatura / estatura
    return resultado
}



let peso = prompt("ingrese su peso corporal")
let estatura = prompt("ingrese su estatura")
 dividir(peso , estatura , estatura)
 console.log( "su imc es "+resultado);

if (resultado < 18.5) {
    console.log("usted tiene bajo peso")
} else if ((resultado >= 18.5) && (resultado < 25)) {
    console.log("usted tiene peso normal");
} else if (resultado > 25) {
    console.log("usted tiene sobrepeso");
}



 let trabajoSedentario = prompt("tiene un  trabajo sedentario (si/no) ");
while ((trabajoSedentario != "si") && (trabajoSedentario != "no")) {
    console.log(trabajoSedentario);
    trabajoSedentario = prompt("ingrese si / no ")
    console.log("recomendamos....")
} 

 

// INGRESANDO "NO" SE HACE BUCLE INFINITO //
/* let trabajoSedentario = prompt("tiene un  trabajo sedentario? ( ingrese: si/no) ");
while (trabajoSedentario != "si") {
    console.log(trabajoSedentario)}{
    if (trabajoSedentario == "si"){
        console.log("usted si tiene , recomendamos ...")
    }  else if (trabajoSedentario == "no") {
        console.log ("usted no tiene , recomendamos ...");{
            console.log(trabajoSedentario)}
        }
    } 
 */
   

//algunos ejemplos//
let dolor = prompt("en que parte del cuerpo sentis dolores o contracturas ?   (para finalizar ingrese : salir )");
while (dolor != "salir") {
    switch (dolor) {
        case "espalda":
            console.log("recomendamos ejercicio A");
            break;
        case "cervical":
            console.log("recomendamos ejercicio B");
            break;
        case "cintura":
            console.log("recomendamos ejercicio c");
            break;

        case "pies":
        case "rodillas":
            console.log("recomendamos ejercicio D");
            break;
        default:
            console.log("ingrese una zona del cuerpo válida ");
            break;
    }
    dolor = prompt("en que parte del cuerpo sentis dolores o contracturas ?   (para finalizar ingrese : salir )");
}









