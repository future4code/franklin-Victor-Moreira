import express, { Request, Response, Express } from 'express'
import cors from 'cors'

const app: Express = express()
const port: number = 3003

var users: Array<{ userId: number, name: string, phone: string, email: string, website: string }> = [{
    userId: 1,
    name: "Minato",
    phone: "45932557845",
    email: "minato@gmail.com",
    website: "minato.com.br"
},
{
    userId: 2,
    name: "Shikamaru",
    phone: "45932557845",
    email: "shikamaru@gmail.com",
    website: "sikamaru.com.br"
},
{
    userId: 3,
    name: "Kakashi",
    phone: "45932557845",
    email: "kakashi@gmail.com",
    website: "kakashi.com.br"
},
{
    userId: 4,
    name: "Gai",
    phone: "45932557845",
    email: "gai@gmail.com",
    website: "gai.com.br"
},
{
    userId: 5,
    name: "Tsunade",
    phone: "45932557845",
    email: "tsunade@gmail.com",
    website: "tsunade.com.br"
}
]

var posts: Array<{ postId: number, title: string, body: string, userId: number }> = [
    {
        postId: 1,
        title: "Missao nível D",
        body: "Missão de captura à um gato perdido na mata.",
        userId: 3
    },
    {
        postId: 2,
        title: "Missao nível A",
        body: "Captura de ninjas foragidos.",
        userId: 5
    },
    {
        postId: 3,
        title: "Missao nível C",
        body: "Missão com a finalidade de acompanhar e proteger um construtor de pontes, com o nome Tezuna, até seu pais natal.",
        userId: 4
    },
    {
        postId: 4,
        title: "Missao nível S ",
        body: "Transporte de documentos e artefatos de importância imensuráveis.",
        userId: 1
    },
    {
        postId: 5,
        title: "Missao nível B ",
        body: "Procura de informações sobre Orochimaru.",
        userId: 2
    }
]

app.use(express.json())
app.use(cors())

app.get('/', (request: Request, response: Response) => {
    response.status(201).send("Hello from Express")
})

app.get('/users', (request: Request, response: Response) => {

    response.status(201).send(users)
})

app.delete(`/users/:userId`, (request: Request, response: Response) => {
    const userIdParam = Number(request.params.userId);

    const filteredUserById = users.filter((user) => user.userId !== userIdParam)

    users = filteredUserById

    response.status(201).send(filteredUserById)
})

app.get('/posts', (request: Request, response: Response) => {

    response.status(201).send(posts)
})

app.get(`/posts/:userId`, (request: Request, response: Response) => {
    const userIdParam = Number(request.params.userId);

    const filteredPostsByUserId = posts.filter((post) => post.userId === userIdParam)

    if (!filteredPostsByUserId) {
        response.status(404).send({ message: "Usuário não encontrado para este ID" })
    }

    response.status(201).send(filteredPostsByUserId)
})

app.delete(`/posts/:postId`, (request: Request, response: Response) => {
    const postIdParam = Number(request.params.postId);

    const filteredPostsByUserId = posts.filter((post) => post.postId !== postIdParam)

    posts = filteredPostsByUserId

    response.status(201).send(filteredPostsByUserId)
})

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`)
})