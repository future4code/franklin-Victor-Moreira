import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { Request, Response } from "express";
import { CompetitionDto } from "../dto/CompetitionDto";

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
}
