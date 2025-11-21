import express from 'express'
import dotenv from 'dotenv'
import { DB } from './utils/Db.js'
import router from './routes/user.Route.js'
import cookieParser from 'cookie-parser'
dotenv.config()
const app=express()
const port=process.env.PORT || 8081

//Data base connetion 
 DB()
//Middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//api
app.use('/api/vi/user',router)
app.listen(port,()=>{
console.log(`server listen at port ${port}`)
})