const express = require("express");
const app = express()

app.get("/", (req, res) =>{
    res.send("a pagina de inicio")
});

module.exports = app;