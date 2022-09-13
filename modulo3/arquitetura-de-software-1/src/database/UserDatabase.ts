import { IUserDB, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public toUserDBModel = (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public createUser = async (user: User) => {
        const userDB = this.toUserDBModel(user)

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public loginUser = async (email: string) => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select("*")
            .where({ email: email })

        return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role,
        }
    }

    public getUsers = async () => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select("id", "name", "email", "role")

        return result
    }

    public deleteUserById = async (id: string) => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .delete()
            .where({ id: id })
    }
}