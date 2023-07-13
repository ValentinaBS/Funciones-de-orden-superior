// 1
let copiaBeers = [].concat(beers)
function filterCervezasEnRegla(valorAlcohol) {
    return copiaBeers.filter(cerveza => cerveza.abv <= valorAlcohol);
}
const cervezasEnRegla = filterCervezasEnRegla(6);

function crearObjCervezasEnRegla(cerveza) {
    return {
        name: cerveza.name, 
        abv: cerveza.abv, 
        ibu: cerveza.ibu
    }
}
const arrayCervezasEnRegla = cervezasEnRegla.map(crearObjCervezasEnRegla)

console.log("Las cervezas que no exceden el nivel etílico son: ", arrayCervezasEnRegla);

// 2
let copiaBeers2 = [].concat(beers)
const cervezasMasAlcoholicas = copiaBeers2.sort((a, b) => b.abv - a.abv);

const diezCervezasMasAlcoholicas = cervezasMasAlcoholicas.slice(0, 10);

console.log("Las diez cervezas más alcoholicas son: ", diezCervezasMasAlcoholicas);

// 3
let copiaBeers3 = [].concat(beers)
const cervezasMenosAmargas = copiaBeers3.sort((a, b) => {
    if(a.ibu === null || b.ibu === null) {
        return 1
    }
    return a.ibu - b.ibu
});

const diezCervezasMenosAmargas = cervezasMenosAmargas.slice(0, 10);

console.log("Las diez cervezas menos amargas son: ", diezCervezasMenosAmargas);

// 4
let copiaBeers4 = [].concat(beers)
function ordenarCervezas(propiedad, esAscendente) {
    return copiaBeers4.sort((a, b) => {
        if(esAscendente) {
            return a[propiedad] - b[propiedad]
        } else {
            return b[propiedad] - a[propiedad]
        }
    });
}
console.log("Cervezas ordenadas por propiedad recibida: ", ordenarCervezas("abv", true))

// 5
let copiaBeers5 = [].concat(beers)
const contenedorTabla = document.getElementById("table-container")

const listaCervezas = copiaBeers5.reduce((acc, act) => {
    return acc + `    
    <tr>
    <td>${act.name}</td>
    <td>${act.abv}</td>
    <td>${act.ibu}</td>
    </tr>
    `
}, "")

contenedorTabla.innerHTML = listaCervezas