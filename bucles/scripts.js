// problema 1

function multiplicarNumero(numeroAMultiplicar) {
    let miTabla = []
    for (let i = 0; i <= 10; i++) {
        let aux = numeroAMultiplicar * i
        miTabla.push(aux)
        ;
        }
        return alert(miTabla);
}
// -------------invocador -----------
 //multiplicarNumero(Number(prompt("coloque un numero")))

 //problema 2 

function acumuladorDeNumeros( numero) {
    let numeroAcumulado= 0
    let numeroNuevo = numero
    while ( numeroNuevo !== 0) {
        numeroAcumulado += numeroNuevo;
        alert(numeroAcumulado)
        numeroNuevo = Number(prompt("Coloque un numero"))
    }
    return numeroAcumulado;    
}
// --------------------- invocador -----------
//acumuladorDeNumeros(Number(prompt("ingrese numero")))

// problema 3


function numeroSecretoGame() {
    let numeroSecreto = acumuladorDeNumeros(Number(prompt("ingrese numero")))
    while (numeroSecreto < 1 || numeroSecreto > 100) {   
        numeroSecreto = acumuladorDeNumeros(Number(prompt("Se necesita otro numero secreto")))
         }
        let numeroSeleccionado
        let intentos = 0
        do {
            intentos++    
            numeroSeleccionado = Number(prompt("coloque un numero del 1 al 100"))
            if (numeroSeleccionado > numeroSecreto) {
                            alert("tu numero es mayor que el numero secreto")
                        } else if (numeroSeleccionado < numeroSecreto) { 
                            alert("tu numero es menor que el numero secreto")
                        }
        } while (numeroSeleccionado !== numeroSecreto);
        alert(`Ganaste - cantidad de intentos = ${intentos}` )
} 
//let numeroGuardado = 
numeroSecretoGame()