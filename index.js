const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())


app.get("/" , async (req,res) => {
    await res.json("hello from second api app")
})

app.get("/home" , async (req,res) => {
    await res.json("home page")
})

app.listen(5000, (req,res) => {
    console.log("api app is runing")
})