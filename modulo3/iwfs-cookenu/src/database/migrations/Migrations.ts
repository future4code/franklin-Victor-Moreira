import { BaseDatabase } from "../BaseDatabase"
import { UserDatabase } from "../UserDatabase"
import { recipe, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertUserData()
            console.log("Tables populated successfully.")
            await this.insertReciṕeData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_RECIPES};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_RECIPES}(
            id int PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL DEFAULT 'Null',
            description VARCHAR(255) NOT NULL DEFAULT 'Null',
            creationDate VARCHAR(255) NOT NULL DEFAULT '',
            userId VARCHAR(255) DEFAULT 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
            FOREIGN KEY (userId) REFERENCES iwfs_cookenu_users(id)
        );`)
    }

    insertUserData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)
    }

    insertReciṕeData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_RECIPES)
            .insert(recipe)
    }
}

const migrations = new Migrations()
migrations.execute()