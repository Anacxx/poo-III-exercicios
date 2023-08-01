import express from 'express'
import cors from 'cors'
import { UserController } from './controller/UserController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})
const userController = new UserController()

//GetAllUsers
app.get("/users", userController.getUsers)

//createUser
app.post("/users", userController.createUser)

//deleteUser
app.delete("/users/:id", userController.deleteUserById);

//UpdateUser
app.put("/users/:id", userController.updateUserById);