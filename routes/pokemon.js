const express = require("express")
const router = express.Router();
const {getAllPokemons, getOnePokemon} = require("../controllers/pokemon")

router.route("/").get((getAllPokemons))
router.route("/:id").get(getOnePokemon)

module.exports = router;