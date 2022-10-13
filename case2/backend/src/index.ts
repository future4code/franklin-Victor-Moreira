import express, { Request, Response } from 'express'
import cors from 'cors'
import { Contributor } from './model/Contributor'

const app = express()
const port = 3003

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!')
})

const contributors: Array<Contributor> = []

app.post('/', (request: Request, response: Response) => {

    const contributor: Contributor = request.body

    contributors.push(contributor)

    response.status(201).send(contributors)
})

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
})
