// problema 1

function cerbezasMasAlcoholicas(array) {
    let resultCerbezas = []
    array.sort((a,b) => b.abv - a.abv)
    array.forEach((elm , indx) => {
        if (indx < 10) {
            resultCerbezas.push(elm)
        }
    });
return resultCerbezas;
}
let topCerbezasAlcoholicas = cerbezasMasAlcoholicas(beers)
console.log(topCerbezasAlcoholicas);

//problema 2

function cerbezasMenosAmargas(array) {
    let resultCerbezas = []
    let cerbezasValidas = array.filter(elm => elm.ibu !== null)
    cerbezasValidas.sort((a,b) => a.ibu - b.ibu)
    cerbezasValidas.forEach((elm,indx) =>{
        if (indx < 10 ) {
            resultCerbezas.push(elm)
        }
    })
    return resultCerbezas
}

let topCerbezasMenosAmargas = cerbezasMenosAmargas(beers)
console.log(topCerbezasMenosAmargas);

//problema 3

function nivelEtilico (array, limiteEtilico) {
    let resultadoCerbezas = []
    let cerbezasValidas = array.filter(elm => elm.abv <= limiteEtilico)
    cerbezasValidas.forEach(elm => {
        resultadoCerbezas.push({ 
            name : elm.name ,
            abv : elm.abv , 
            ibu : elm.ibu})
    })
    return resultadoCerbezas
}

let cerbezasDentroDeLimite = nivelEtilico(beers,4.5)
console.log(cerbezasDentroDeLimite);

//problema 4

function orderBeer(array,propiedadCerbeza,order) {
    let resultadoCerbezas = []
    let nuevoArrayCerbeza = array
    nuevoArrayCerbeza = array.forEach((elm) =>{
            resultadoCerbezas.push(elm)
            if (order === true) {
                resultadoCerbezas.sort((a,b) => a[propiedadCerbeza]  - b[propiedadCerbeza] )
            } else {
                resultadoCerbezas.sort((a,b) => b[propiedadCerbeza] - a[propiedadCerbeza])
            }

    })
    return resultadoCerbezas.slice(0,10)
}

let orderCerbeza = console.log(orderBeer(beers,"attenuation_level",false));

//problema 5

let tbody = document.getElementById("body")

function contendioDeTabla(array) {
    const tr = document.createElement("tr")
    tr.innerHTML =
    `<td>${array.name}</td>
    <td>${array.abv}</td>
    <td>${array.ibu}</td>`
return tr
}

beers.forEach(elm => tbody.appendChild(contendioDeTabla(elm)))