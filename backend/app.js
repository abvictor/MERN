require("dotenv").config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const router = require('./routes/Router');


const port = process.env.PORT;


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true, origin: "http://localhost:3033"}))


app.use(router)
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))


const connection = require("./config/db");
connection()


app.listen(port, ()=>{
    console.log("Server rodando")
})