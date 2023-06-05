const Leaderboard = require("../Schemas/Leaderboard");

const postScore = async(req,res) => {
    try {
        const {name,score} = req.body;
        const highScore = await Leaderboard.create({
            name,
            score
        })
        res.status(200).json({highScore}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getAllScores = async (req,res)=>{
    try {
        const allScores = await Leaderboard.find({});
        if (!allScores.length){
            res.status(200).json({msg:"No Scores in the DB"})
        }
        else {
            res.status(200).json({
            success:"true",
            data:allScores
        })}
    } catch (error) {
        console.log("catch")
        res.status(500).json({
            error
        })
    }
}

module.exports = {
    postScore,
    getAllScores
}