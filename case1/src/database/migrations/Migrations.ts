import { BaseDatabase } from "../BaseDatabase"
import { CompetitionDatabase } from "../CompetitionDatabase"
import { competition } from "./data"

export class Migrations extends BaseDatabase{

    public static TABLE_COMPETITION = "competition"

    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
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
        DROP TABLE IF EXISTS ${CompetitionDatabase.TABLE_COMPETITION};
        
        CREATE TABLE IF NOT EXISTS ${CompetitionDatabase.TABLE_COMPETITION}(
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            status BOOLEAN DEFAULT TRUE NOT NULL
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(CompetitionDatabase.TABLE_COMPETITION)
            .insert(competition)
    }
}

const migrations = new Migrations()
migrations.execute()