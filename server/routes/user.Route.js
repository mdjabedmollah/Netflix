import express from 'express'
import { Login, logout, Register } from '../controller/userController.js'
const router=express.Router()
router.post('/register',Register)
router.post('/login',Login)
router.get('/logout',logout)

export default router