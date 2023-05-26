const pokemon = require("./pokemon.json")
const singlePokemon = pokemon.find(element=>element.id ===2)
console.log(singlePokemon)