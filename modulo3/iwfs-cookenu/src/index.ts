import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from "dotenv"
// import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3004}`)
})

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("Pong!")
})

// app.use("/users", userRouter)