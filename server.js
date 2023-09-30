const express = require("express");
const { get } = require("http");
const app = express()

const path = require("path")
const PORT = process.env.PORT || 3300;





app.get("/test", (req,res) => {
    res.json("server is online")
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))



