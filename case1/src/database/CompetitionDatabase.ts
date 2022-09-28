import { Competition } from "../models/Competition";
import { CompetitionDb } from "../models/CompetitionDb";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {

    public static TABLE_COMPETITION = "competition"

    public async createCompetition (competition: Competition){
        const competitionDb: CompetitionDb = {
            id: competition.getId(),
            title: competition.getTitle(),
            status: competition.getStatus()
        }

        await BaseDatabase
            .connection(CompetitionDatabase.TABLE_COMPETITION)
            .insert(competitionDb)
    }
}