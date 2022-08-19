import express, {Express, Request, Response} from "express";
import cors from "cors";

const app: Express = express();

type userType = { "userId": number, "name": string, "nickname": string, "email": string }

var users: Array<userType> = []

app.use(express.json());
app.use(cors());

app.post('/user', (request: Request, response: Response) => {

    const { name, nickname, email }: userType = request.body
    const userId: number = users.length + 1

    users.push({ userId, name, nickname, email })
    users.filter(user => user.userId === userId)

    // response.status(201).send("Usuário cadastrado com sucesso!")
    response.status(201).send(users)
})

app.get('/user/:userId', (request: Request, response: Response) => {
    
    const userId: number = Number(request.params.userId)
    
    const filteredUserByUserId: Array<userType> = users.filter(user => user.userId === userId)

    let result = filteredUserByUserId.map(it => ({ id: it.userId, nickname: it.nickname }))

    response.status(201).send(result)
})

app.put('/user/edit/:userId', (request: Request, response: Response) => {
    
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