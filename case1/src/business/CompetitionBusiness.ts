import { CompetitionDatabase } from "../database/CompetitionDatabase";
import { CompetitionDto } from "../dto/CompetitionDto";
import { Competition } from "../models/Competition";
import { IdGenerator } from "../services/IdGenerator";

export class CompetitionBusiness {
    constructor(
        protected competitionDatabase: CompetitionDatabase,
        protected idGenerator: IdGenerator
    ) { }

    async createCompetition(input: CompetitionDto) {

        const title = input.title
        const status = input.status

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const competition = new Competition(
            id,
            title,
            status
        )

        await this.competitionDatabase.createCompetition(competition)

        const response = {
            message: "Competição criada com sucesso"
        }

        return response
    }
}