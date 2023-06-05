const express = require("express")
const router = express.Router();
const {getAllPokemons, getOnePokemon} = require("../controllers/pokemon")
const {postScore,getAllScores} = require("../controllers/leaderboard")


router.route("/").get((getAllPokemons))
router.route("/leaderboard").get(getAllScores)
router.route("/arena").post(postScore)
router.route("/:id").get(getOnePokemon)


module.exports = router;