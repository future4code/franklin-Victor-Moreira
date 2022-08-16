import express, { Request, Response } from "express";
import cors from "cors";
import tasksJson from './assets/afazeres.json'

type taskType = { "userId": number, "id": number, "title": string, "completed": boolean }

const app = express();
var tasks: Array<taskType> = tasksJson

app.use(express.json());
app.use(cors());

//Exercício 1
app.get('/ping', (request: Request, response: Response) => {
    response.status(201).send('Pong!')
})

//Exercício 4
app.get('/todos', (request: Request, response: Response) => {

    const completed = request.query.completed
    
    const filteredTasksByStatus: Array<taskType> = tasks.filter(task => String(task.completed) === completed)

    response.status(201).send(filteredTasksByStatus)
})

//Exercício 5
app.post('/todos', (request: Request, response: Response) => {

    const { userId, title, completed }: taskType = request.body
    const id: number = tasks.length + 1

    tasks.push({ userId, id, title, completed })
    tasks.filter(task => task.userId === userId)

    response.status(201).send(tasks)
})

//Exercício 6
app.put('/todos', (request: Request, response: Response) => {
    const { id, title, completed }: taskType = request.body

    const changedTask: Array<taskType> = tasks.filter((task) => {
        if (task.id === id) {
            task.title = title
            task.completed = !task.completed
            return task
        }
    })

    response.status(201).send({ changedTask })
})

//Exercício 7
app.delete('/todos/:id', (request: Request, response: Response) => {
    const id: number = Number(request.params.id)

    tasks = tasks.filter((task) => task.id !== id)

    response.status(201).send('Tarefa deletada com sucesso!')
})

//Exercício 8
app.get('/todos/:userId', (request: Request, response: Response) => {
    const userId: number = Number(request.params.userId)

    const filteredTasksByUserId: Array<taskType> = tasks.filter(task => task.userId === userId)
    const othersFilteredTasksByUserId: Array<taskType> = tasks.filter(task => task.userId !== userId)

    const responseStructure = {
        todos: {
            selectedUser: [
                // Selected tasks from selected user
                filteredTasksByUserId
            ],
            others: [
                // Others tasksobjetos de afazer restantes
                othersFilteredTasksByUserId
            ]
        }
    }

    response.status(201).send(responseStructure)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});