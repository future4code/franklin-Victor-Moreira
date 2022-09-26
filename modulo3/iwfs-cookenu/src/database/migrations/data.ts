import { RecipeDb } from "../../models/RecipeDb";
import { UserDB } from "../../models/UserDb";
import { USER_ROLES } from "../../models/USER_ROLES";


export const users: UserDB[] = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        name: "Shikamaru Nara",
        email: "shikamaru@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        name: "Choji Akimichi",
        email: "choji@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        name: "Ino Yamanaka",
        email: "ino@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]

export const recipe: RecipeDb[] = [
    {
        title: "Ovo Mexido",
        description: "Em uma frigideira, aqueça o óleo, junte os ovos e deixe cozinhar mexendo sempre por cerca de 3 minutos.",
        creationDate: Date().toString()
    }
]

