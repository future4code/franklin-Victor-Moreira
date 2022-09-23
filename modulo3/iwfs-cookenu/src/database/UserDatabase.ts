
import { GetUsersInputDbDto } from "../dto/GetInputUsersDBDto"
import { Recipe } from "../models/Recipe"
import { RecipeDb } from "../models/RecipeDb"
import { User } from "../models/User"
import { UserDB } from "../models/UserDb"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "iwfs_cookenu_users"
    public static TABLE_RECIPES = "iwfs_cookenu_recipes"

    public findByEmail = async (email: string) => {
        const usersDB: UserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })

        return usersDB[0]
    }

    public createUser = async (user: User) => {
        const userDB: UserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public createRecipe = async (recipe: Recipe) => {
        const recipeDb: RecipeDb = {
            title: recipe.title,
            description: recipe.desciption,
            creationDate: recipe.creationDate
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_RECIPES)
            .insert(recipeDb)
    }

    public getUsers = async (input: GetUsersInputDbDto) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const usersDB: UserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where("name", "LIKE", `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)

        return usersDB
    }

    public findById = async (id: string) => {
        const usersDB: UserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id })

        return usersDB[0]
    }

    public findRecipeById = async (id: number) => {
        const recipeDB: RecipeDb[] = await BaseDatabase
            .connection(UserDatabase.TABLE_RECIPES)
            .select()
            .where(id)

        return recipeDB[0]
    }

    public deleteUser = async (id: string) => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .delete()
            .where({ id })
    }

    public editUser = async (user: User) => {
        const userDB: UserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .update(userDB)
            .where({ id: userDB.id })
    }
}