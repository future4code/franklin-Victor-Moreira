# Exercicio 1

1. O uso de string torna aumenta a gama de possibilidades para geração de IDs com uma quantidade menor de caracteres comparado com números, então na minha opinião é melhor usar strings para diminuir a probabilidade de repetição de IDs.
2. 
    ```ts
    export function generateId(): string {
        return v4();
    }
    ```

---

# Exercicio 2

1. O primeiro trecho de código (`const connection = ...`) é responsável por estabelecer uma conexão com o banco de dados. Já o segundo trecho (`const createUser = ...`) é responsável por realizar a inserção dos dados no bando de dados.
2. 
    ```sql
    CREATE TABLE User (
            id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );
    ```
3. 
    ```ts
    import knex from "knex";

    const connection = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        },
    });

        const userTableName = "User";

        const createUser = async (
            id: string, 
            email: string, 
            password: string) => {
        await connection
            .insert({
            id,
            email,
            password,
            })
            .into(userTableName);
        };
    ```

---

# Exercicio 3

1. converte o JWT (Json Web Token) em `string`
2. 
    ```ts
    import * as jwt from "jsonwebtoken";

    const expiresIn = "1min"

    const generateToken = (id: AuthenticationData): string => {
        const token = jwt.sign(
            {
                id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        );
        return token;
    }

    type AuthenticationData = {
        id: string;
    }
    ```

---

# Exercicio 4

1. 
    ```ts
    app.post("/user/signup", async (req: Request, res: Response) => {
        try {

            const userData = {
                email: req.body.email,
                password: req.body.password,
            };

            const id = generateId();

            await createUser(id, userData.email, userData.password);

            const token = generateToken({ id });

            res.status(200).send({ token });

        } catch (err: any) {
            res.status(400).send({ message: err.message });
        }
    });
    ```
2. Validação do email
   ```ts
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
   ```
3. Validação da senha
   ```ts
    if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
    }
   ```
---

# Exercicio 5

---

# Exercicio 6

---

# Exercicio 7

---

# Exercicio 8

---