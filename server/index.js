import express from 'express'
import dotenv from 'dotenv'
import { DB } from './utils/Db.js'
import router from './routes/user.Route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
const app=express()
const port=process.env.PORT || 8081
const corsOptions={
     origin: "http://localhost:5173",
    credentials: true, 
}
//Data base connetion 
 DB()
//Middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(corsOptions))
//api
app.use('/api/vi/user',router)
app.listen(port,()=>{
console.log(`server listen at port ${port}`)
})