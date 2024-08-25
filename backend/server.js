import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//connect db function
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("api working");
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://karthickrajab03:<db_password>@cluster0.j7wfu.mongodb.net/?
