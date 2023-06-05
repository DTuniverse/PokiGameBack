const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
require("colors")
const pokemon = require("./routes/pokemon")

const app = express();
const connectDB = require("./dbinit")
connectDB()
//middleware
app.use(express.json());
app.use(cors());
app.use("/pokemon", pokemon)


app.get("/",(req,res)=>{
    res.send(`API is working, go to http://localhost:${PORT}/pokemon`)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`.rainbow )
})

