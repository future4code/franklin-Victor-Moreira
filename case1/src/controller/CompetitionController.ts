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
                title: req.body.title,
                status: req.body.status
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
                id: req.params.id,
                competition: req.body.competition,
                athlete: req.body.athlete,
                value: req.body.value,
                unit: req.body.athlete
            }

            console.log(input);
            

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
}
