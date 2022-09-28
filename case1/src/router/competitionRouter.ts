import { Router } from 'express'
import { CompetitionBusiness } from '../business/CompetitionBusiness'
import { Request, Response } from "express";
import { IdGenerator } from '../services/IdGenerator';
import { CompetitionController } from '../controller/CompetitionController';
import { CompetitionDatabase } from '../database/CompetitionDatabase';

export const competitionRouter = Router()

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase(),
        new IdGenerator()
    )
)

competitionRouter.post('/', competitionController.createCompetition)

competitionRouter.post('/:id', (request: Request, response: Response) => {
    try {
        response.status(201).send('Pong1!')
    } catch (error) {
        console.log(error)

        if (error instanceof Error) {
            return response.status(400).send({ message: error.message })
        }

        response.status(500).send({ message: "Erro inesperado" })
    }
})

competitionRouter.put('/:id', (request: Request, response: Response) => {
    try {
        response.status(201).send('Pong2!')
    } catch (error) {
        console.log(error)

        if (error instanceof Error) {
            return response.status(400).send({ message: error.message })
        }

        response.status(500).send({ message: "Erro inesperado" })
    }
})

competitionRouter.get('/:id', (request: Request, response: Response) => {
    try {
        response.status(201).send('Pong3!')
    } catch (error) {
        console.log(error)

        if (error instanceof Error) {
            return response.status(400).send({ message: error.message })
        }

        response.status(500).send({ message: "Erro inesperado" })
    }
})
