//condicionales

//ejercicio 1

function comparadorNumerico(num1,num2) {
    if (num1 > num2) {
       return console.log(`${num1} es mayor que ${num2}`);
    } else {}
        return console.log(`${num1} no es mayor que ${num2}`);
}
comparadorNumerico(4,2);

//ejercicio 2

function diferenciadorNumerico(num1,num2) {
    if (num1 === num2) {
       return console.log(`${num1} y ${num2} son iguales`);
    } else {}
        return console.log(`${num1} y ${num2} son diferentes`);
    }
    diferenciadorNumerico(2,6);
    
    //ejercicio 3

    function comparadorMasGrande(num1,num2) {
        if (num1 > num2) {
            return console.log(`${num1} es el numero mas grande`);
        } else if (num1 < num2) {
            return console.log(`${num2} es el numero mas grande`);
        }else if ( num1 === num2) {
            return console.log(`${num1} y ${num2} son iguales`);
        }else {
            
            return console.log(`falta un dato o no esta definido `);
    }
}
comparadorMasGrande(15,5);

//ejercicio 4

function comparadorMasChico(num1,num2,num3) {
        if (num1 < num3) {
                console.log(`${num1} es el mas chico`);
            }else if (num3 < num2) {
                console.log(`${num3} es el mas chico`);
            }else if (num3 > num2) {
                console.log(`${num2} es el mas chico`);
            } else {
                console.log(`todos los numeros son iguales o 2 numeros son iguales`);
            }
}
comparadorMasChico(8,9,2)

//ejercicio 5

function comparadorDePersona (persona1,persona2){
    switch (true) {
        case true:
            if (persona1.altura > persona2.altura) {
                console.log(`${persona1.nombre} es mas alto/a que ${persona2.nombre}`);
            }else{
                console.log(`${persona2.nombre} es mas alto/a que ${persona1.nombre}`);
            }
        case true:
            if (persona1.edad > persona2.edad) {
                console.log(`${persona1.nombre} es mas viejo/a que ${persona2.nombre}`);
            } else {
                console.log(`${persona2.nombre} es mas viejo/a que ${persona1.nombre}`);
            }
            break;
    }
}

const martin = {
    nombre: "martin",
    edad: 26,
    altura: 1.8
}
const marta= {
    nombre: "marta",
    edad: 28,
    altura: 1.6
}
comparadorDePersona (martin,marta);

//ejercicio 6

function capacitadoParaConducir(edadSujeto,alturaSujeto,visionSujeto) {
    if (edadSujeto >= 18 && alturaSujeto > 150 && (visionSujeto === 8 || visionSujeto === 9 || visionSujeto === 10)) {
        return alert("estas capacitado para conducir");
    }else {
        return alert("no estas capacitado para conducir");
    }
}
function datosPersona(){
    let nombreDePersona = prompt("Escriba su nombre");
    let edadDePersona =Number(prompt("Escriba su edad"));
    let alturaDePersona = Number(prompt("Escriba su altura"));
    let visionDePersona = Number(prompt("indique del 1 al 10 la calidad de su vision"));
        return  capacitadoParaConducir(edadDePersona,alturaDePersona,visionDePersona);
}
//-------------------invocador -------------------------
//    datosPersona();

//ejercicio 7

function tipoDeIngreso (){
    let nombreDeCliente = prompt("Escriba su nombre");
    switch (nombreDeCliente) {
        case "juan":
            alert("Bienvenido Juan");
            break;
        default:
            let tipoDePase = (prompt("pase vip o normal?"));
            if (tipoDePase === "vip") {
                alert("Bienvenido!")
            } else {
                let tieneEntrada = (prompt("tiene una entrada? si/no")); 
                if (tieneEntrada === "si"){
                        let usarEntrada = prompt("desea usar la entrada? si/no")
                            if (usarEntrada === "si") {
                            alert("Bienvenido!")
                        } else {
                            alert("Adios!")
                        }
                        } else { 
                        let comprarEntrada = prompt("desea comprar una entrada? si/no")
                        if (comprarEntrada === "si") {
                            let cantidadDeDinero = Number(prompt("de cuanto dinero dispone?"))
                            if (cantidadDeDinero >= 1000) {
                                alert("compra exitosa! sea bienvenido!")
                            } else {
                                alert("la transaccion no puede ser posible - dinero insuficiente")
                            }
                        } else {
                            alert("Adios!")
                        }
                        
                }
                
            }
        break;
        }    
    }
//-------------------invocador -------------------------
//     tipoDeIngreso()

//ejercicio 8



function baseJuegoAdivinanza () {
    let numeroIngresado = Number(prompt("coloca un numero del 1 al 10 para comenzar a jugar"))
    if (numeroIngresado === numeroIncognito) {
        return true;
    } else if (numeroIngresado > numeroIncognito) {
        alert("El numero ingresado es mayor, vuelve a intentarlo")
        return false;
    } else{ alert("El numero ingresado es menor, vuelve a intentarlo")
    return false;
    }
}



function juegoAdivinanza () {   
    let resultadoJuego = baseJuegoAdivinanza()
    switch (resultadoJuego) {
        case true:
            return alert("Ganaste, has adivinado el numero")
            break;
        case false:
            let resultadoJuego = baseJuegoAdivinanza()
            switch (resultadoJuego) {
                case true:
                    return alert("Ganaste, has adivinado el numero")
                    break;
                case false:
                    let resultadoJuego = baseJuegoAdivinanza()
                switch (resultadoJuego) {
                    case true:
                        return alert("Ganaste, has adivinado el numero")
                        break;
                    case false:
                        return alert("Perdiste!")
                    break;
                break;
            }
        break;
        }
    }
}
const numeroIncognito = 5 ;
//-------------------invocador -------------------------
//  juegoAdivinanza()

//ejercicio 9

function tipoDeEdad() {
    let edadIngresada = Number(prompt("coloca tu edad aqui"))
    switch (true) {
        case edadIngresada <= 12:
            return alert("eres un infante")
            break;
        case edadIngresada >= 13 && edadIngresada<= 18:
            return alert("eres un adolecente")
            break;
        case edadIngresada >= 19 && edadIngresada <= 45:
            return alert("eres un mayor joven")
            break;
        case edadIngresada > 46 && edadIngresada <= 100:
            return alert("eres un anciano")
            break;
        default:
            return alert("en realidad tienes esa edad?")
            break;
    }
}
//-------------------invocador -------------------------
//        tipoDeEdad()

//ejercicio 10



function piedraPapelTijeras () {
    let jugador1 = prompt( "jugador 1 : piedra / papel / tijeras")
    let jugador2 = prompt( "jugador 2 : piedra / papel / tijeras")
    if (jugador1 === "tijeras") {
        switch (jugador2) {
            case "piedra":
                return alert("gana el jugador 2")
                break;
            case "papel":
                return alert("gana el jugador 1")
                break;
            case "tijeras":
                return alert("empate")        
            default:
                return alert("jugador 2 esta haciendo trampa")
                break;
        }
    } else if (jugador1 === "piedra") {
        switch (jugador2) {
            case "piedra":
                return alert("empate")
                break;
            case "papel":
                return alert("gana el jugador 2")
                break;
            case "tijeras":
                return alert("gana el jugador 1")        
            default:
                return alert("jugador 2 esta haciendo trampa")
                break;
        }
    }else if (jugador1 === "papel"){
        switch (jugador2) {
            case "piedra":
                return alert("gana el jugador 1")
                break;
            case "papel":
                return alert("empate")
                break;
            case "tijeras":
                return alert("gana el jugador 2")        
            default:
                return alert("jugador 2 esta haciendo trampa")
                break;
        }
    }else{
        return alert("el jugador 1 esta haciendo trampa")
    }
}
//-------------------invocador -------------------------
//piedraPapelTijeras()

//ejercicio 11

function seleccionColor () {
    let colorSeleccionado = prompt("Ingresar un color")
    switch (colorSeleccionado) {
        case "blanco":
        case "negro" :  
            alert("Falta de color")
            break;
        case "verde":
            alert("El color de la naturaleza")
            break;
        case "azul":
            alert("El color del agua")
            break;
        case "amarillo":
            alert("El color del sol")
            break;
        case "rojo":
            alert("El color del fuego")
            break;
        case "marron":
            alert("El color de la tierra")
            break;
        default:
            alert("Excelente eleccion, no lo teniamos pensado")
            break;
    }
}
//-------------------invocador -------------------------
//    seleccionColor()

//ejercicio 12

function operaciones() {
    let numero1 = Number(prompt("coloque un numero"))
    let operacionARealizar = prompt("coloque una operacion")
    let numero2 = Number(prompt("coloque un numero"))
    switch (operacionARealizar) {
        case "+" :
            return alert( `el resultado es : ${numero1 + numero2}`);
            break;
            case "-" :
            return alert( `el resultado es : ${numero1 - numero2}`);
            break;
            case "*":
            return alert( `el resultado es : ${numero1 * numero2}`);
            break;
            case "/":                        
                if (numero1 === 0 || numero2 === 0) {
                return alert( `Error`);
                }else{
                return alert( `el resultado es : ${numero1 / numero2}`);    
                }
            break;
        default:
            break;
    }
}
//-------------------invocador -------------------------

//   operaciones()

//ejercicio 13

function pedirDni() {
    const dniPersona = {
    apellido : prompt("Apellido"),
    nombre :prompt("nombre"),
    sexo: prompt("m/f"),
    fechaDeNacimiento: prompt("fecha de nacimiento dd/mm/aaaa"), 
    nacionalidad: prompt("nacionalidad"),
    numeroDeDocumento: prompt("numero de dni")
                        }
    return dniPersona
}
function documentacionPersona(dniPersona) {
    const dni = pedirDni(dniPersona)
    if (prompt("los datos son correcto? si/no") == "si") {
        console.table(dni)
        alert("registro exitoso")
    } else {
        alert("Vuelve a intentarlo en 30 dias")
    }
}

// let persona28 = {
//     nombre: "juan" ,
//     apellido: "romero",
//     edad: 20
// }
//-----------invocador-----------
documentacionPersona()