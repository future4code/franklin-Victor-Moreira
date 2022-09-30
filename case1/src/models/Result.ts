export class Result {
    constructor(
        private id: string,
        private idCompetition: string,
        private competition: string,
        private athlete: string,
        private value: number,
        private unit: string
    ) { }

    public getId = () => {
        return this.id
    }

    public getIdCompetition = () => {
        return this.idCompetition
    }

    public getCompetition = () => {
        return this.competition
    }

    public getAthlete = () => {
        return this.athlete
    }

    public getValue = () => {
        return this.value
    }

    public getUnit = () => {
        return this.unit
    }

    public setCompetition = (newCompetition: string) => {
        this.competition = newCompetition
    }

    public setAthlete = (newAthlete: string) => {
        this.athlete = newAthlete
    }

    public setValue = (newValue: number) => {
        this.value = newValue
    }

    public setUnit = (newUnit: string) => {
        this.unit = newUnit
    }
}