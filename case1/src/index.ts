import express, { Request, Response } from "express";
import cors from "cors";
import { request } from "http";
import { IdGenerator } from "./services/IdGenerator";
import { Contest } from "./models/Contest";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/ping', (request: Request, response: Response) => {
    try {
        response.status(201).send('Pong!')
    } catch (error) {
        console.log(error)

        if (error instanceof Error) {
            return response.status(400).send({ message: error.message })
        }

        response.status(500).send({ message: "Erro inesperado" })
    }
})

app.post('/contest', (request: Request, response: Response) => {
    try {
        const title = request.body.title
        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const contest = new Contest(
            id,
            title
        )

        response.status(201).send(`Competição "${title}" criada com sucesso!`)
    } catch (error) {
        console.log(error)

        if (error instanceof Error) {
            return response.status(400).send({ message: error.message })
        }

        response.status(500).send({ message: "Erro inesperado" })
    }
})

app.post('/contest/:id', (request: Request, response: Response) => {
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

app.put('/contest/:id', (request: Request, response: Response) => {
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

app.get('/contest/:id', (request: Request, response: Response) => {
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

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});