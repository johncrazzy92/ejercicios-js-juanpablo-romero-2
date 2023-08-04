// ejercicio 1

function saludar (personaASaludar) {
    console.log(`hola ${personaASaludar} , espero estes bien.`);
}
saludar("juan");

// ejercicio 2

function multiplicar (num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
console.log(multiplicar(3,5));
console.log(multiplicar(20,80));

// ejercicio 3

function areaTriangulo (baseTri , alturaTri) {
    let resultadoArea = (baseTri * alturaTri)/2 
    return resultadoArea;
}
function perimetroTriangulo (lado1, lado2, lado3) {
    let resultadoPerimetro = lado1 + lado2 + lado3;
    return resultadoPerimetro;
}
console.log(areaTriangulo(5,3));
console.log(perimetroTriangulo(4,5,6));

// ejercicio 4

function calcularPrecio (precioPro , cantidadPro) {
    let precioSinDescuento = precioPro * cantidadPro;
    if ( cantidadPro >= 20) {
        let precioConDescuento = precioSinDescuento-((precioSinDescuento * 20) / 100);
        return precioConDescuento;
    }else if( cantidadPro >= 10){
        let precioConDescuento =precioSinDescuento - ((precioSinDescuento * 10) / 100);
        return precioConDescuento;
    }else{
        return precioSinDescuento;
    }
}
console.log(calcularPrecio(100,8));
console.log(calcularPrecio(100,15));
console.log(calcularPrecio(100,30));

// ejercicio 5

// function esMyorDeEdad (edadDePersona){
//     if (edadDePersona >= 18 ) {
//         console.log("eres mayor de edad");
//     } else {
//         console.log("eres menor de edad");
//     }
// }
function esMyorDeEdad (edadDePersona){
    let comparacionDeEdad = edadDePersona >= 18 ? console.log("eres mayor de edad") : console.log("eres menor de edad");
}
esMyorDeEdad(15);
esMyorDeEdad(23);

// ejercicio 6

function calcularImpuesto (ingresoAnual) {
    if (ingresoAnual <= 10000) {
        let impuestoAPagar10 = (ingresoAnual * 10)/100;
            return impuestoAPagar10;
    } else if (ingresoAnual > 10000 && ingresoAnual < 20000) {
        let impuestoAPagar15 = (ingresoAnual * 15)/100;
            return impuestoAPagar15;
    } else if (ingresoAnual >= 20000) {
        let impuestoAPagar20 = (ingresoAnual * 20)/100;
            return impuestoAPagar20;
    }
}

console.log(calcularImpuesto(5000));
console.log(calcularImpuesto(15000));
console.log(calcularImpuesto(25000));

//ejercicio 7

function verificarDia(numeroDelDiaDeLaSemana) {
    switch (numeroDelDiaDeLaSemana) {
        case 1:
            console.log("Es dia laboral");
            break;
        case 2:
            console.log("Es dia laboral");
            break;
        case 3:
            console.log("Es dia laboral");
            break;
        case 4:
            console.log("Es dia laboral");
            break;
        case 5:
            console.log("Es dia laboral");
            break;
        case 6:
            console.log("Es fin de semana");
            break;
        case 7:
            console.log("Es fin de semana");
            break;
    }
}
verificarDia(5);
verificarDia(3);
verificarDia(7);