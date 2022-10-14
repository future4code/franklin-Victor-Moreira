import { response } from "express"
import { ContributorDatabase } from "../database/ContributorDatabase"
import { Contributor } from "../model/Contributor"

export default class ContributorBusiness {

    constructor(
        protected contributorDatabase: ContributorDatabase
    ) { }

    public register = async (input: any) => {
        const firstName = input.firstName
        const lastName = input.lastName
        const participation = input.participation

        const contributor = new Contributor(
            firstName,
            lastName,
            participation
        )

        const contributorDatabase = new ContributorDatabase()
        const response = await contributorDatabase.addContributor(contributor)

        return response
    }
}