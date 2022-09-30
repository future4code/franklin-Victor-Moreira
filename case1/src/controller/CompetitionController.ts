import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { Request, Response } from "express";
import { CompetitionDto } from "../dto/CompetitionDto";
import { ResultDto } from "../dto/ResultDto copy";

export class CompetitionController {
    constructor(
        protected competitionBusiness: CompetitionBusiness
    ) { }

    public createCompetition = async (req: Request, res: Response) => {
        try {
            const input: CompetitionDto = {
                title: req.body.title
            }

            const response = await this.competitionBusiness.createCompetition(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public registerResult = async (req: Request, res: Response) => {
        try {
            const input: ResultDto = {
                idCompetition: req.params.id,
                competition: req.body.competition,
                athlete: req.body.athlete,
                value: req.body.value,
                unit: req.body.unit
            }

            const response = await this.competitionBusiness.registerResult(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public endCompetition = async (req: Request, res: Response) => {
        try {

            const input = req.params.id

            const response = await this.competitionBusiness.endCompetition(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public rankingCompetition = async (req: Request, res: Response) => {
        try {

            const input = req.params.id
            const resultsOrder = Boolean(req.body.resultsOrder)

            console.log(resultsOrder);
            
            const response = await this.competitionBusiness.rankingCompetition(input, resultsOrder)
            
            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}