<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>


# Exercícios de Introdução ao SQL

## Turma: Franklin
## Aluno: Victor Ramon Firmo Moreira

---

### Exercício 1

1. A resposta que temos quando usamo o `raw` é além do que esperamos, retornando alguns dados inerentes ao banco de dados:
   ```json
    [
        [
            {
                "id": "001",
                "name": "Tony Ramos"
            },
            {
                "id": "003",
                "name": " Adiana Esteves"
            },
            {
                "id": "004",
                "name": "Antônio Fagundes"
            },
            {
                "id": "005",
                "name": "Cláudia Raia"
            },
            {
                "id": "1661260490529",
                "name": "Josefa"
            },
            {
                "id": "1661260569556",
                "name": "Josefa"
            },
            {
                "id": "1661262206611",
                "name": "Joaquim"
            }
        ],
        [
            {
                "catalog": "def",
                "db": "franklin-victor-moreira",
                "table": "Actor",
                "orgTable": "Actor",
                "name": "id",
                "orgName": "id",
                "charsetNr": 33,
                "length": 765,
                "type": 253,
                "flags": 20483,
                "decimals": 0,
                "zeroFill": false,
                "protocol41": true
            },
            {
                "catalog": "def",
                "db": "franklin-victor-moreira",
                "table": "Actor",
                "orgTable": "Actor",
                "name": "name",
                "orgName": "name",
                "charsetNr": 33,
                "length": 765,
                "type": 253,
                "flags": 4097,
                "decimals": 0,
                "zeroFill": false,
                "protocol41": true
            }
        ]
    ]
   ```

2. 
    ```javascript
    const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
        `)

        return result[0][0]
    }

    ```

3. ```javascript
    const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)

    return result[0][0].count
    }
   ```

