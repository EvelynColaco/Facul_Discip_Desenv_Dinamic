let listaCidades = "Paris, Londres, Roma, Tóquio, Nova York"

let listaAtualizada = listaCidades.slice (7, 28)
console.log("A lista atualizada agora é:", listaAtualizada)

let cidadeParis = "     Paris     "
let removEspacos = cidadeParis.trim()
console.log("O nome da cidade sem espaços:", removEspacos)

let arrayCidades = listaCidades.split(", ")
console.log("A lista de cidades dividas arrays:", arrayCidades)