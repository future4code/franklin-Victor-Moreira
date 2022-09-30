import { BaseDatabase } from "../BaseDatabase"
import { CompetitionDatabase } from "../CompetitionDatabase";
import { competitionsData } from "./competitionsData"
import { resultsData } from "./resultsData"

export class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Droping tables if exists...");
            await this.dropTables()
            console.log("Tables droped successfully.")

            console.log("Creating tables...")
            await this.createCompetitionTable()
            await this.createResultsTable()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertCompetitionData()
            await this.insertResultsData()
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
            idCompetition VARCHAR(255) NOT NULL,
            competition VARCHAR(255) NOT NULL,
            athlete VARCHAR(255) NOT NULL,
            value FLOAT NOT NULL,
            unit VARCHAR(255) NOT NULL,
            FOREIGN KEY (idCompetition) REFERENCES ${CompetitionDatabase.TABLE_COMPETITION}(id)
        );
        `)
    }

    insertCompetitionData = async () => {
        await BaseDatabase
            .connection(CompetitionDatabase.TABLE_COMPETITION)
            .insert(competitionsData)
    }

    insertResultsData = async () => {
        await BaseDatabase
            .connection(CompetitionDatabase.TABLE_RESULTS)
            .insert(resultsData)
    }
}

const migrations = new Migrations()
migrations.execute()