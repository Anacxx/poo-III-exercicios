import { UserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    public findUsers = async (q?: string): Promise<UserDB[]> =>{
        let result: UserDB[]
        if(q) {
            result = await BaseDatabase
            .connection('users')
            .where("name", "LIKE", `%${q}%`)
        }else{
            result = await BaseDatabase
            .connection('users')
        }
        return result
    }
    public async findUserById(id: string): Promise<UserDB | undefined> {
        const response: UserDB[] = await BaseDatabase
        .connection('users')
        .where({id})
        
        return response[0]
    }
    public insertUser = async (userDB: UserDB): Promise<void> => {
        await BaseDatabase.connection('users').insert(userDB)
   }
   public deleteUserById = async (id: string): Promise<void> => {
    await BaseDatabase.connection('users').where({ id }).del();
   }
   public async updateUserById(id: string, updatedData: Partial<UserDB>): Promise<void> {
    await BaseDatabase.connection('users').where({ id }).update(updatedData);
}
}
