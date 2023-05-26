const pokemon = require("../pokemon.json")

const getAllPokemons = (req, res) =>{
    try {
       const allPokemon = pokemon;
       res.status(200).json({allPokemon})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong"})
    }
}

const getOnePokemon = (req,res)=>{
    
    const id = parseInt(req.params.id)
    const singlePokemon = pokemon.find((element)=> {
        return element.id===id
    })
    res.status(200).json({singlePokemon})
}


module.exports= {
    getAllPokemons,
    getOnePokemon
}