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

competitionRouter.post('/:id', competitionController.registerResult)

competitionRouter.put('/:id', competitionController.endCompetition)

competitionRouter.get('/:id', competitionController.rankingCompetition)
