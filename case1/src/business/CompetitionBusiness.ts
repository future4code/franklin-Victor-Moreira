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

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const title = input.title
        const status = true

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

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const idCompetition = input.idCompetition
        const competition = input.competition
        const athlete = input.athlete
        const value = input.value
        const unit = input.unit

        const result = new Result(
            id,
            idCompetition,
            competition,
            athlete,
            value,
            unit
        )

        const competitionDb = await this.competitionDatabase.findById(idCompetition)

        if (!competitionDb.status) {
            throw new Error("Não é possível cadastrar resultados para uma competição já finalizada")
        }

        await this.competitionDatabase.createResult(result)

        const response = {
            message: "Resultado cadastrado com sucesso"
        }

        return response
    }

    public endCompetition = async (input: string) => {

        const competitionDb = await this.competitionDatabase.findById(input)

        if (competitionDb.status) {
            competitionDb.status = !competitionDb.status
        }

        if (!competitionDb) {
            throw new Error("Conta a ser editada não existe")
        }

        const competition = new Competition(
            competitionDb.id,
            competitionDb.title,
            competitionDb.status
        )

        await this.competitionDatabase.endCompetition(competition)

        const response = {
            message: "Competição finalizada com sucesso"
        }

        return response
    }

    public rankingCompetition = async (input: string, resultsOrder: boolean) => {

        const competitionDb = await this.competitionDatabase.findById(input)

        var orderType = "asc"
        if (!resultsOrder) {
            orderType = "desc"
        }

        if (!competitionDb) {
            throw new Error("Competição não existe")
        }

        const response = await this.competitionDatabase.rankingCompetition(input, orderType)

        return response
    }
}