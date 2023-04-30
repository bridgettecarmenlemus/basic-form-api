import express from "express";
import cors from "cors";


const app = express()
const port = 4005

app.use(cors()); 
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("hello bridgette, great to see this is working")
})

app.listen(port, (req, res) => {
    console.log(`ready to listen on http://localhost:` + port)
})