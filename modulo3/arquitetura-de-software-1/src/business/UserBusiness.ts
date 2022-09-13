import { response } from "express"
import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    public signup = async (input: any) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.includes('@')) {
            throw new Error("Email inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    }

    public login = async (input: any) => {
        const userDatabase = new UserDatabase()
        await userDatabase.loginUser
    }

    public getUsers = async (token: string) => {

        if (!token) {
            throw new Error("Parâmetro 'token' inválido")
        }

        const userDatabase = new UserDatabase()
        const response = userDatabase.getUsers()

        return response
    }

    public deleteUser = async (input: any) => {

        const token = input.token
        const id = input.id

        const authenticator = new Authenticator()
        const user = authenticator.getTokenPayload(token)

        const userDatabase = new UserDatabase()
        const response = userDatabase.deleteUserById(id)
        
        return response
    }
}