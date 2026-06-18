require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const app = express()
connectDB()

app.use(cors())

app.use(express.json())

app.use("/auth",require("./routes/authRoutes"))

app.use("/jokes",require("./routes/jokeRoutes"))

app.get("/",(req,res)=>{
    res.send("Joke Management API Running")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running On Port ${process.env.PORT}`)
})