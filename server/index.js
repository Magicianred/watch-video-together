const cors = require("cors")
const express = require("express")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/search-video", (req,res) => {
    console.log(req.body)
    res.end()
})

app.listen(8080)