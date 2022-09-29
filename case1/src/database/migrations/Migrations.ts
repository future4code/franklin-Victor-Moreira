import { BaseDatabase } from "../BaseDatabase"
import { CompetitionDatabase } from "../CompetitionDatabase"
import { competition } from "./data"

export class Migrations extends BaseDatabase {

    public static TABLE_COMPETITION = "competition"

    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.dropTables()
            await this.createCompetitionTable()
            await this.createResultsTable()
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

    dropTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${CompetitionDatabase.TABLE_RESULTS};
        DROP TABLE IF EXISTS ${CompetitionDatabase.TABLE_COMPETITION};
        `)
    }

    createCompetitionTable = async () => {
        await BaseDatabase.connection.raw(`
        CREATE TABLE IF NOT EXISTS ${CompetitionDatabase.TABLE_COMPETITION}(
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            status BOOLEAN DEFAULT TRUE NOT NULL
        );
        `)
    }

    createResultsTable = async () => {
        await BaseDatabase.connection.raw(`        
        CREATE TABLE IF NOT EXISTS ${CompetitionDatabase.TABLE_RESULTS}(
            id VARCHAR(255) PRIMARY KEY,
            competition VARCHAR(255) NOT NULL,
            athlete VARCHAR(255) NOT NULL,
            value VARCHAR(255) NOT NULL,
            unit VARCHAR(255) NOT NULL,
            FOREIGN KEY (id) REFERENCES ${CompetitionDatabase.TABLE_COMPETITION}(id)
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