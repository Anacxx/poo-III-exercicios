import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { Request, Response } from 'express'
import { UserDB } from "../types"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    // refatorado
    public getUsers = async (req: Request, res: Response) => {
        try {
            const input = {
                q:req.query.q
            }
            const userBusiness = new UserBusiness()
            const users = await userBusiness.getUsers(input)
            res.status(200).send(users)
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
    //refatorado
    public createUser = async (req: Request, res: Response) => {
        try {
            const input = 
             {  id: req.body.id, 
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
             }
             const userBusiness = new UserBusiness()
             const newUser = await userBusiness.createUsers(input)
    
            res.status(201).send(newUser)
    
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
    //refatorado
    public deleteUserById =  async (req: Request, res: Response) => {
        try {
            const input = {
                id:req.params.id
            }
            const userBusiness = new UserBusiness()
            await userBusiness.deleteUserById(input)
            res.status(200).send("User deleted successfully");
        } catch (error) {
            console.log(error);
    
            if (res.statusCode === 200) {
                res.status(500);
            }
    
            if (error instanceof Error) {
                res.send(error.message);
            } else {
                res.send("Erro inesperado");
            }
        }
    }
    //fazer ainda
    public updateUserById = async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            const updatedUserData: Partial<UserDB> = req.body; // assuming the updated data is sent in the request body
    
            const userDatabase = new UserDatabase();
            
            const userToUpdate = await userDatabase.findUserById(userId);
            if (!userToUpdate) {
                res.status(404).send("User not found");
                return;
            }
    
            // Update the user data in the database
            await userDatabase.updateUserById(userId, updatedUserData);
    
            res.status(200).send("User updated successfully");
        } catch (error) {
            console.log(error);
    
            if (res.statusCode === 200) {
                res.status(500);
            }
    
            if (error instanceof Error) {
                res.send(error.message);
            } else {
                res.send("Erro inesperado");
            }
        }
    }
}