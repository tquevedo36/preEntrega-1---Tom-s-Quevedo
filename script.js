let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad = parseInt(prompt("ingresa tu edad"));
console.log("bienvenido " + nombre + apellido)


let resultado = 0
function dividir(peso, estatura, estatura) {
    resultado = peso / estatura / estatura
    return resultado
}





let peso = parseInt(prompt("ingrese su peso corporal"))
 
let estatura = parseInt(prompt("ingrese su estatura"))
 dividir(peso , estatura , estatura)
 console.log( "su imc es "+resultado);

if (resultado < 18.5) {
    console.log("usted tiene bajo peso")
} else if ((resultado >= 18.5) && (resultado < 25)) {
    console.log("usted tiene peso normal");
} else if (resultado > 25) {
    console.log("usted tiene sobrepeso");
} 

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




let tipoTrabajo = prompt("Qué tipo de trabajo tiene usted ? ingrese activo o sedentario  ");

if (tipoTrabajo == "sedentario") {
    console.log(" Le recomendamos hacer ejercicio para su bienestar ")

    class tipoEmpleo {
        constructor(empleo, lugar) {
            this.empleo = empleo;
            this.lugar = lugar;
        }

        mostrarEmpleo() {
            return "Tipo: " + this.empleo + "\nLugar: " + this.lugar;
        }

    }

    const trabajo = new tipoEmpleo(prompt("Ingresa:" + "empleo" + "lugar"));


    console.log(trabajo);

    console.log(trabajo.mostrarEmpleo());
    const listaEjercicios=[
        {
           espalda:"ejercicio 1",
            cintura:"ejercicio 2",
            hombros:"ejercicio 3",
           
        },
    ];
        console.log("estos son los ejercicios recomendados para el trabajo sedentario" + "..." + listaEjercicios);
    
    

} else if (tipoTrabajo == "activo") {
    console.log("Le recomendamos hacer ejercicio para realizar sus actividades con  mayor eficiencia ");
}
// se repite la estructura pero con otras recomendaciones


















