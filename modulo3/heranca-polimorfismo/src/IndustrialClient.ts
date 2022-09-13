import { Industry } from "./Industry";
import { Client } from "./Client"

class CommercialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string,
        machinesQuantity: number,
        cep: string,
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): string {
        return this.insdustryNumber;
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}
