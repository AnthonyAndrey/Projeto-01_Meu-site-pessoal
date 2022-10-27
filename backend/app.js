const express = require('express')
const handleFile = require("./src/utils/handleFile")

const app = express()

app.listen( 3000,()=>{
    console.log("ta");
    handleFile("teste")
})