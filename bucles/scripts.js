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

// --------------------- invocador -----------
//numeroSecretoGame()

// problema 4 

function divisores (numeroADividir){
    let divisoresDeNumero = []
    if (numeroADividir !== 0 && numeroADividir > 0) {
        for (let i = 1; i <= numeroADividir; i++) {
            if (numeroADividir % i === 0) {
                divisoresDeNumero.push(i)
            };
            
        }
        return alert(divisoresDeNumero)
    } else {
        alert("numero invalido")
    }
}

// --------------------- invocador -----------
//divisores(Number(prompt("colocar un numero")))

// problema 5

let array01 = [0,1,"magma",58,68,"colon",856,945,"dentista",1863]

function recorrearray (array) {
    for (const enumeraArray of array) {
        console.log(enumeraArray)
    }
} 
// --------------------- invocador -----------
//recorrearray(array01)

//problema 6

let array02 =[30,8,87,25,78654,88,79,4862,335,789]

function dobleArray(array) {
    for (const DobleArray of array) {
        let resultado = DobleArray * 2
        console.log(resultado)
    }
} 
// --------------------- invocador -----------
//dobleArray(array02)

//problema 7

const grupoFamiliar = [{
    nombre: "claudia",
    apellido: "fernandez",
    edad: 51,
    sexo: "femenino"
},
{
    nombre: "hugo",
    apellido: "romero",
    edad: 60,
    sexo: "masculino"

},
{
    nombre: "nicolas",
    apellido: "santafe",
    edad: 25,
    sexo: "masculino"
},
{
    nombre: "luiz",
    apellido: "fernandez",
    edad: 44,
    sexo: "masculino"
},
{
    nombre: "juan",
    apellido: "romero",
    edad: 31,
    sexo: "masculino"
}
]

function invocadorGrupoFamiliar(arrayFamilia) {
    for (const familiarDeGrupo of arrayFamilia) {
        alert(`Bienvenido/a ${familiarDeGrupo.nombre}
        datos del integrante familiar:
        Nombre: ${familiarDeGrupo.nombre}
        apellido: ${familiarDeGrupo.apellido}
        edad: ${familiarDeGrupo.edad}
        sexo: ${familiarDeGrupo.sexo}`)
    }
}
// --------------------- invocador -----------
//invocadorGrupoFamiliar(grupoFamiliar)

//problema 8

function numeroPar(arrayNumero) {
    
    for (const numeroAComprobar of arrayNumero) {
        if (numeroAComprobar % 2 === 0) {
            alert(numeroAComprobar)
        }
    }
}

// --------------------- invocador -----------
//numeroPar(array02)

//problema 9

function sumaYSeparaNumeros() {
    let numeroPar = 0
    let numeroImpar = 0
    let numeroPedido 
    do {
            numeroPedido = (Number(prompt("Coloca un numero")))
            if (numeroPedido % 2 === 0) {
                numeroPar += numeroPedido
                
            } else {
                numeroImpar += numeroPedido
                
            }
        } while (numeroPedido !== 0);
        alert(`total numeros pares = ${numeroPar}`)
        alert(`total numeros impares = ${numeroImpar}`)
    }
    
    // --------------------- invocador -----------
    //sumaYSeparaNumeros()

//problema 10

function arrayNumeroMasGrande(arrayDeNumeros) {
    let numerosOrdenados = arrayDeNumeros
    
    numerosOrdenados.sort(function(a,b){
        return a - b
    })
    let numeroMasGrande = numerosOrdenados.pop()
    alert(numeroMasGrande)

}
// --------------------- invocador -----------
//arrayNumeroMasGrande(array02)