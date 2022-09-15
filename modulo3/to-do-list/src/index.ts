import express, {Express, Request, Response} from "express";
import knex from "knex";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./concection"

dotenv.config()

const app: Express = express();

type userType = { "userId": number, "name": string, "nickname": string, "email": string }

var users: Array<userType> = []

app.use(express.json());
app.use(cors());

// app.post('/user', (request: Request, response: Response) => {

//     const { name, nickname, email }: userType = request.body
//     const userId: number = users.length + 1

//     users.push({ userId, name, nickname, email })
//     users.filter(user => user.userId === userId)

//     // response.status(201).send("Usuário cadastrado com sucesso!")
//     response.status(201).send(users)
// })

app.post("/users", async (request: Request, response: Response) => {
    try {
        await connection.raw(
        `INSERT INTO TodoListUser
            (id, name, nickname, email)
            VALUES (
                ${Date.now().toString()},
                "${request.body.name}",
                ${request.body.nickname},
                "${request.body.email}",
            );
        `)

        response.status(201).send("Sucess!")
    } catch (error) {
        console.log(error);
        response.status(500).send("An unexoected error ocurred")
    }

})

app.get('/users/:userId', (request: Request, response: Response) => {
    
    const userId: number = Number(request.params.userId)
    
    const filteredUserByUserId: Array<userType> = users.filter(user => user.userId === userId)

    let result = filteredUserByUserId.map(it => ({ id: it.userId, nickname: it.nickname }))

    response.status(201).send(result)
})

app.put('/users/edit/:userId', (request: Request, response: Response) => {
    
    const userId: number = Number(request.params.userId)
    const { name, nickname}: userType = request.body

    const changedUser: Array<userType> = users.filter((user) => {
        if (user.userId === userId) {
            user.name = name
            user.nickname = nickname
        }

        return user
    })

    response.status(201).send(changedUser)
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});