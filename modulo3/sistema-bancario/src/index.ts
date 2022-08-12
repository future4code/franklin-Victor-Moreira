import express, { Express, Request, Response } from "express";
import cors from "cors";
import accounts from "./assets/accounts.json"

const app: Express = express();

app.use(express.json());
app.use(cors());

type accountType = {
    idAccount: string,
    name: string,
    cpf: string,
    birthDate: string,
    balance: number
    extract: Array<transactionsType>
}

type transactionsType = {
    value: number,
    purchaseDate: string,
    description: string
}

app.get("/accounts", (request: Request, response: Response) => {
    response.status(200).send(accounts)
})

app.post("/accounts", (request: Request, response: Response) => {

    const { name, cpf, birthDate } = request.body

    const formatedBirthDate = birthDate.replace(/-/g, "")

    const todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, '');

    const isAdult = (Number(todayDate) - Number(formatedBirthDate)) >= 180000

    const isAlived = (Number(todayDate) - Number(formatedBirthDate)) < 0 || (Number(todayDate) - Number(formatedBirthDate)) >= 1220000


    if (!isAlived) {
        if (isAdult) {
            const newAccount: accountType = {
                "idAccount": String(accounts.length + 1),
                "name": name,
                "cpf": cpf,
                "birthDate": birthDate,
                "balance": 0.0,
                "extract": []
            }

            accounts.push(newAccount)

            response.status(201).send("Conta do usuário criada com sucesso!")
        } else {
            response.status(401).send("A conta do usuário não pode ser criada pois não possui idade mínima exigida.")
        }
    } else {
        response.status(401).send("A conta do usuário não pode ser criada pois o mesmo não está vivo.")
    }

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});