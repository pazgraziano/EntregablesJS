//// Entregable

// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let array = ["fideos", "arroz", "harina", "papas", "mostaza"]

// Modifica la lista de la compra y añádele "aceite de girasol"
array.push("aceite de girasol")
console.log(array)

// Vuelve a modificar la lista de la compra eliminando "aceite de girasol"
array.splice(5, 1)
console.log(array)

// Una lista de tus 3 películas favoritas (objetos con propiedades: título, director, fecha)
const listaPeliculas = [
    { titulo: "My neighbor Totoro", director: "Hayao Miyazaki", fecha: 1988 },
    { titulo: "Princess Mononoke", director: "Hayao Miyazaki", fecha: 1997 },
    { titulo: "Fear and loathing in Las Vegas", director: "Terry Gilliam", fecha: 1998 }
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (usando filter)
const lista2010 = listaPeliculas.filter(obj => obj.fecha > 2010)
console.log(lista2010)

// Una nueva lista que contenga los directores de la lista de películas original (usando map)
const arrayDirectores = listaPeliculas.map(obj => obj.director)
console.log(arrayDirectores)

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const arrayTitulos = listaPeliculas.map(obj => obj.titulo)
console.log(arrayTitulos)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
console.log(arrayDirectores.concat(arrayTitulos))

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaPropag = [...arrayDirectores, ...arrayTitulos]
console.log(listaPropag)