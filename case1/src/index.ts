import express, { Request, Response } from "express";
import cors from "cors";
import { competitionRouter } from "./router/competitionRouter";

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

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.use("/competition", competitionRouter)