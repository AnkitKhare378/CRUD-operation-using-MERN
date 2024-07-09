import express from 'express'
import { Createuser,GetUser, Updateuser,DeleteUser } from '../controller/UserController.js'

const routers = express.Router()

routers.post('/create',Createuser)
routers.get('/get',GetUser)
routers.put('/update/:id',Updateuser)
routers.delete('/delete/:id',DeleteUser)

export default routers