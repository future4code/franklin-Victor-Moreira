import { Router } from "express";
import ContributorBusiness from "../business/ContributorBusiness";
import { ContributorController } from "../controller/ContributorController";
import { ContributorDatabase } from "../database/ContributorDatabase";

export const contributorRouter = Router()

const contributorController = new ContributorController(
    new ContributorBusiness(
        new ContributorDatabase()
    )
)

contributorRouter.post("/", contributorController.register)