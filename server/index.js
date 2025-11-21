import express from 'express'
import dotenv from 'dotenv'
import { DB } from './utils/Db.js'
dotenv.config()
const app=express()
const port=process.env.PORT || 8081

//Data base connetion 
 DB()
//Middleware


app.listen(port,()=>{
console.log(`server listen at port ${port}`)
})