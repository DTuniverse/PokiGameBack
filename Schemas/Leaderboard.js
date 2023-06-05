const mongoose = require("mongoose");

const leaderBoardSchema = new mongoose.Schema({
    name: {
        type: String, 
        required:true,
        minLength: [2, "min length is 2 chars"],
        maxLength: [20, "max length is 100 chars"]
    },
    score: {
        type: Number,
        required: true
    },
  
})
module.exports = mongoose.model("Leaderboard", leaderBoardSchema)