import express, { Request, Response, Express } from 'express'
import cors from 'cors'
import { log } from 'console'

const app: Express = express()
const port: number = 3003

const users: Array<Object> = [{
    id: "1",
    name: "Minato",
    phone: "45932557845",
    email: "minato@gmail.com",
    website: "minato.com.br"
},
{
    id: "2",
    name: "Shikamaru",
    phone: "45932557845",
    email: "shikamaru@gmail.com",
    website: "sikamaru.com.br"
},
{
    id: "3",
    name: "Kakashi",
    phone: "45932557845",
    email: "kakashi@gmail.com",
    website: "kakashi.com.br"
},
{
    id: "4",
    name: "Gai",
    phone: "45932557845",
    email: "gai@gmail.com",
    website: "gai.com.br"
},
{
    id: "5",
    name: "Tsunade",
    phone: "45932557845",
    email: "tsunade@gmail.com",
    website: "tsunade.com.br"
}
]

const posts: Array<object> = [
    {
        id: "1",
        title: "Missao nível D",
        body: "Missão de captura à um gato perdido na mata.",
        userId: "3"
    },
    {
        id: "2",
        title: "Missao nível A",
        body: "Captura de ninjas foragidos.",
        userId: "5"
    },
    {
        id: "3",
        title: "Missao nível C",
        body: "Missão com a finalidade de acompanhar e proteger um construtor de pontes, com o nome Tezuna, até seu pais natal.",
        userId: "4"
    },
    {
        id: "4",
        title: "Missao nível S ",
        body: "Transporte de documentos e artefatos de importância imensuráveis.",
        userId: "1"
    },
    {
        id: "5",
        title: "Missao nível B ",
        body: "Procura de informações sobre Orochimaru.",
        userId: "2"
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

app.get('/posts', (request: Request, response: Response) => {

    response.status(201).send(posts)
})

// app.get(`/posts/:id`, (request: Request, response: Response) => {
//     const userIdParam = Number(request.params);

//     response.status(201).send(userIdParam)
// })

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`)
})