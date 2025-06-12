import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.get("/",(req, res)=>{
    console.log(req.body)
    res.json({data:"This data is coming from an express backend of a Turborepo !!!"})
})
app.listen(3000)