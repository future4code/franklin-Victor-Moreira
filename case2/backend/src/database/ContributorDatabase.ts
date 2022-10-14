import { Contributor } from "../model/Contributor"
import { ContributorDb } from "../model/ContributorDb"
import { BaseDatabase } from "./BaseDatabase"

export class ContributorDatabase extends BaseDatabase {
    public static TABLE_CONTRIBUTOR = "Contributor"

    public addContributor = async (contributor: Contributor) => {
        const contributorDb: ContributorDb = {
            first_name: contributor.getFirstName(),
            last_name: contributor.getLastName(),
            participation: contributor.getParticipation()
        }

        await BaseDatabase
            .connection(ContributorDatabase.TABLE_CONTRIBUTOR)
            .insert(contributorDb)

        const contributtorsDb: Array<ContributorDb> = await BaseDatabase
            .connection(ContributorDatabase.TABLE_CONTRIBUTOR)
            .select()

        return contributtorsDb
    }
}