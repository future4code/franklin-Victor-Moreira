import { CompetitionDatabase } from "../database/CompetitionDatabase";
import { CompetitionDto } from "../dto/CompetitionDto";
import { ResultDto } from "../dto/ResultDto copy";
import { Competition } from "../models/Competition";
import { Result } from "../models/Result";
import { IdGenerator } from "../services/IdGenerator";

export class CompetitionBusiness {
    constructor(
        protected competitionDatabase: CompetitionDatabase,
        protected idGenerator: IdGenerator
    ) { }

    public createCompetition = async (input: CompetitionDto) => {

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

    public registerResult = async (input: ResultDto) => {
                
        const id = input.id
        const competition = input.competition
        const athlete = input.athlete
        const value = input.value
        const unit = input.unit

        console.log(input);
        
        const competitionDb = await this.competitionDatabase.findById(id)

        const result = new Result(
            competitionDb.id,
            competition,
            athlete,
            value,
            unit
        )

        await this.competitionDatabase.createResult(result)

        const response = {
            message: "Resultado cadastrado com sucesso"
        }

        return response
    }
}