let main = document.getElementById("contenedorCube")

//problema 1

let colorCube = document.createElement("div")
colorCube.className = "col-10"
colorCube.style.backgroundColor = "grey"
colorCube.id = "colorCube"
main.appendChild(colorCube)

let buttonColor = document.getElementsByTagName ("button")[0]

buttonColor.addEventListener("click" , () => {
    switch (colorCube.style.backgroundColor) {
        case "grey":
                colorCube.style.backgroundColor = "aqua"
                colorCube.textContent = "Celeste"
            break;
        case "aqua":
                colorCube.style.backgroundColor = "red"
                colorCube.textContent = "Rojo"
            break;
    
        default:
                colorCube.style.backgroundColor = "grey"
                colorCube.textContent = "Gris"
            break;
    }

})

//problema 2

let mainText = document.getElementById("contenedorText")

let colorCubeText = document.createElement("div")
colorCubeText.className = "col-10 "
colorCubeText.style.backgroundColor = "grey"
colorCubeText.id = "cubeColorText"
mainText.appendChild(colorCubeText)

let textoEscrito = document.createElement("p")
textoEscrito.id = "textoBlanco"
colorCubeText.appendChild(textoEscrito)

let inputText = document.getElementById("textCube")

inputText.addEventListener( "keyup" , () => {
    textoEscrito.textContent = inputText.value 
})

let resetText = document.getElementById("resetText")
resetText.addEventListener("click", () => {
    textoEscrito.textContent = ""
    inputText.value = ""
})

//problema 3

let resultadoIMCContenedor = document.getElementById("resultadoIMC")

let numeroIMC = document.createElement ("p")
numeroIMC.classList ="display-3"
resultadoIMCContenedor.appendChild(numeroIMC)

let mensajePeso = document.createElement ("p")
mensajePeso.classList ="fw-bold"
resultadoIMCContenedor.appendChild(mensajePeso)


let inputPeso = document.getElementById("pesoCorporal")
let inputAltura = document.getElementById("altura")

let botonCalcularIMC = document.getElementById("calcularIMC")
botonCalcularIMC.addEventListener("click", () => {
    let peso = inputPeso.value 
    let altura = inputAltura.value / 100
    let IMC = (peso / (altura **2))
    numeroIMC.textContent = IMC.toFixed(1)
    if (IMC < 18.5) {
        mensajePeso.textContent ="Su IMC es menos de 18.5, se encuentra dentro del rango de peso insuficiente."
    } else if ( IMC > 18.5 && IMC < 24.9){
        mensajePeso.textContent ="Su IMC se encuentra dentro del rango de peso normal o saludable."
    } else if (IMC > 25 && IMC < 29.9) {
        mensajePeso.textContent ="Su IMC se encuentra dentro del rango de sobrepeso."
    } else {
        mensajePeso.textContent ="Su IMC se encuentra dentro del rango de obesidad."
    }
    inputPeso.value = ""
    inputAltura.value = ""
})

//Problema 4

let pesoInput = document.getElementById("pesoCambio")
let dolarInput = document.getElementById("dolarCambio")

pesoInput.value = 500
dolarInput.value = 1

pesoInput.addEventListener( "input" , () => {
    let calculoDolar = pesoInput.value / 500
    dolarInput.value = calculoDolar
})
dolarInput.addEventListener( "input" , () => {
    let calculoPeso= dolarInput.value * 500
    pesoInput.value = calculoPeso
})
