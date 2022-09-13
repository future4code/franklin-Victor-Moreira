<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>


# Exercícios de Introdução ao SQL

## Turma: Franklin
## Aluno: Victor Ramon Firmo Moreira
---

### Exercício 1

A query do exercício é a seguinte:

```sql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

1. São explicados abaixo os demais comandos presentes na query do exercício:
    - **PRIMARY KEY**
    - O comando **VARCHAR (n)** utilizado para declarar tanto **id** quanto **name** é utilizada para entrada do tipo texto com uma quantidade máxima de **n** caracteres;
    - **DATE**, utilizado pra declarar **birth_date** representa uma data com o formato ```(YYYY-MM-DD)```
    - O comando **NOT NULL** indica que aquela variável não pode ser nula no banco de dados.
  
2. ```SHOW DATABASES``` mostra as bases de dados existentes numa conexão e ```SHOW TABLES``` mostra as tabelas presentes na base de dados.

3. O comando ```DESCRIBE Actor``` apresenta detalhadamente os tipos de dados presentes nessa tabela, indicado os nomes dos campos, seus tipos e se ela pode ser do tipo ```NULL``` ou não.

---

### Exercício 2

1. A query para criar a atriz foi a seguinte:
    
    ```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
    );
    ```

2. Ao tentar exercutar a query com o mesmo ```id``` , o **DBeaver** retornou a mensagem de erro na imagem

   ![](./assets/2b.png)

3. Erro:
      
   ![](./assets/2c.png)
   
    Explicação: Faltou o campo ```birth_date``` no cabeçalho do ```INSERT```.

   Código corrigido:
   ```sql
   INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
    );
   ``` 
4. Erro:
    
   ![](./assets/2d.png)

   Explicação: O comando não apresneta um nome no ```INSERT```
   
   Código corrigido:
   ```sql
   INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "004",
    "Antônio Fagundes",
    400000,
    "1949-04-18", 
    "male"
    );
    ```
    
5. Erro:
   
   ![](./assets/2e.png)
   
   Explicação: A data não está entre aspas duplas, o que indica que ela não é uma string do formato desejado.

   Código corrigido:
   ```sql
   INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
    );
   ```

6. Mais mais um ator e mais uma atriz criados:
   
   ```sql
   INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "006", 
    "Glória Menezes",
    788951.33,
    "1934-10-19", 
    "female"
    );

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "007", 
    "Rodrigo Santoro",
    719333.33,
    "1975-08-22", 
    "male"
    );
   ``` 
    
---

### Exercício 3

1. query:

    ```sql
    SELECT * from Actor WHERE gender = "female"
    ```

    Resposta: 
    | id  | name                | salary    | birth_date | gender |
    | --- | ------------------- | --------- | ---------- | ------ |
    | 002 | Glória Pires        | 1200000.0 | 1963-08-23 | female |
    | 003 | Fernanda Montenegro | 300000.0  | 1929-10-19 | female |
    | 005 | Juliana Paes        | 719333.0  | 1979-03-26 | female |

2. query:

    ```sql
    SELECT salary  from Actor WHERE name = "Tony Ramos"
    ```
    
    Resposta:
    | salary   |
    | -------- |
    | 400000.0 |

3. query:

    ```sql
    SELECT *  from Actor WHERE gender = "invalid"
    ```

    Resposta:
    O banco de dados não retornou nenhum dado pois o gênero não pode ser nulo


4. query:

    ```sql
    SELECT id, name, salary from Actor WHERE salary <= 500000
    ```

    Resposta:
    | id  | name                | salary   |
    | --- | ------------------- | -------- |
    | 001 | Tony Ramos          | 400000.0 |
    | 003 | Fernanda Montenegro | 300000.0 |
    | 004 | Antônio Fagundes    | 400000.0 |

5. query:
 
    ```sql
    SELECT id, nome from Actor WHERE id = "002"
    ```

    Resposta:
    O campo da coluna deve ser `name` e não `nome` como o exercício propõe, para isso usamos a query corrigida:

    ```sql
    SELECT id, name from Actor WHERE id = "002"
    ```

    e a resposta obtida é a seguinte:

    | id  | name         |
    | --- | ------------ |
    | 002 | Glória Pires |

---

Exercício 4

1. query:

   ```sql
   SELECT * FROM Actor
   WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
   ``` 
   A query acima seleciona, na tabela Actor, os atores que possuem nomes que começam em "A" ou "J" e tem/têm salário superior a 300000.

       Resposta:

    | id  | name             | salary   | birth_date | gender |
    | --- | ---------------- | -------- | ---------- | ------ |
    | 004 | Antônio Fagundes | 400000.0 | 1949-04-18 | male   |
    | 005 | Juliana Paes     | 719333.0 | 1979-03-26 | female |

2. query:
    ```sql
    SELECT * FROM Actor
    WHERE name NOT LIKE "A%" AND salary > 350000
    ```

    Resposta:

    | id  | name         | salary    | birth_date | gender |
    | --- | ------------ | --------- | ---------- | ------ |
    | 001 | Tony Ramos   | 400000.0  | 1948-08-25 | male   |
    | 002 | Glória Pires | 1200000.0 | 1963-08-23 | female |
    | 005 | Juliana Paes | 719333.0  | 1979-03-26 | female |

3. query:: 

    ```sql
    SELECT * FROM Actor
    WHERE name LIKE "%G%" OR name LIKE "%g%"
    ```

    Resposta:
    | id  | name                | salary    | birth_date | gender |
    | --- | ------------------- | --------- | ---------- | ------ |
    | 002 | Glória Pires        | 1200000.0 | 1963-08-23 | female |
    | 003 | Fernanda Montenegro | 300000.0  | 1929-10-19 | female |
    | 004 | Antônio Fagundes    | 400000.0  | 1949-04-18 | male   |


4. query: 

    ```sql
    SELECT * FROM Actor
    WHERE ((name LIKE "%A%" OR name LIKE "%a%") 
    OR     (name LIKE "%G%" OR name LIKE "%g%"))
    AND    (salary BETWEEN 350000 AND 900000)
    ```

    Resposta:

    | id  | name             | salary   | birth_date | gender |
    | --- | ---------------- | -------- | ---------- | ------ |
    | 001 | Tony Ramos       | 400000.0 | 1948-08-25 | male   |
    | 004 | Antônio Fagundes | 400000.0 | 1949-04-18 | male   |
    | 005 | Juliana Paes     | 719333.0 | 1979-03-26 | female |

---

### Exercício 5

1. 
    ```sql
    CREATE TABLE Movies (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR (255) NOT NULL,
        synopsis VARCHAR (1000) NOT NULL,
        release_date DATE NOT NULL,
        ratting FLOAT NOT NULL
    );
    ```

2. 
    ```sql
    INSERT INTO Movies (id, title, synopsis, release_date, ratting)
    VALUES(
    "001", 
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06", 
    7
    );
    ```

3. 
    ```sql
    INSERT INTO Movies (id, title, synopsis, release_date, ratting)
    VALUES(
    "002", 
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27", 
    10
    );
    ```

4. 
    ```sql
    INSERT INTO Movies (id, title, synopsis, release_date, ratting)
    VALUES(
    "003", 
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02", 
    8
    );
    ```

5. 
    ```sql
    INSERT INTO Movies (id, title, synopsis, release_date, ratting)
    VALUES(
    "004", 
    "O Auto Da Compadecida",
    "João Grilo e Chicó são os amigos inseparáveis que protagonizarão a história vivida no sertão nordestino. Assolados pela fome, pela aridez, pela seca, pela violência e pela pobreza, tentando sobreviver num ambiente hostil e miserável, os dois amigos usam da inteligência e da esperteza para contornarem os problemas.",
    "2000-09-10", 
    8.6
    );
    ```

Acessando todo o conteúdo da tabela temos:

```sql
SELECT * FROM Movies
```

Resposta:

| id  | title                         | synopsis                                                                                                                                                                                                                                                                                                                    | release_date | ratting |
| --- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| 001 | Se Eu Fosse Você              | Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos                                                                                                                                                                    | 2006-01-06   | 7.0     |
| 002 | Doce de mãe                   | Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela                                                                      | 2012-12-27   | 10.0    |
| 003 | Dona Flor e Seus Dois Maridos | Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.                                                                                                                                             | 2017-11-02   | 8.0     |
| 004 | O Auto Da Compadecida         | João Grilo e Chicó são os amigos inseparáveis que protagonizarão a história vivida no sertão nordestino. Assolados pela fome, pela aridez, pela seca, pela violência e pela pobreza, tentando sobreviver num ambiente hostil e miserável, os dois amigos usam da inteligência e da esperteza para contornarem os problemas. | 2000-09-10   | 8.6     |

---

### Exercício 6

1. Comando:

    ```sql
    SELECT id, title, ratting FROM Movies WHERE id = 4
    ```

    Resposta:

    | id  | title                 | ratting |
    | --- | --------------------- | ------- |
    | 004 | O Auto Da Compadecida | 8.6     |

2. Comando:

    ```sql
    SELECT * FROM Movies WHERE title = "Se Eu Fosse Você"
    ```

    | id  | title            | synopsis                                                                                                                                                 | release_date | ratting |
    | --- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
    | 001 | Se Eu Fosse Você | Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos | 2006-01-06   | 7.0     |


3. Comando:

    ```sql
    SELECT id, title, synopsis  FROM Movies WHERE ratting >= 7
    ```

    | id  | title                         | synopsis                                                                                                                                                                                                                                                                                                                    |
    | --- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 001 | Se Eu Fosse Você              | Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos                                                                                                                                                                    |
    | 002 | Doce de mãe                   | Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela                                                                      |
    | 003 | Dona Flor e Seus Dois Maridos | Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.                                                                                                                                             |
    | 004 | O Auto Da Compadecida         | João Grilo e Chicó são os amigos inseparáveis que protagonizarão a história vivida no sertão nordestino. Assolados pela fome, pela aridez, pela seca, pela violência e pela pobreza, tentando sobreviver num ambiente hostil e miserável, os dois amigos usam da inteligência e da esperteza para contornarem os problemas. |

---

### Exercício 7

1. Comando:
    ```sql
    SELECT * FROM Movies WHERE title LIKE "%vida%"
    ```

    Não retornou nenhum dado.

2. Comando:
    ```sql
    SELECT * FROM Movies WHERE title LIKE "%confus%" OR synopsis LIKE "%confus%"
    ```

    Resposta:

    | id  | title       | synopsis                                                                                                                                                                                                                                               | release_date | ratting |
    | --- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------- |
    | 002 | Doce de mãe | Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela | 2012-12-27   | 10.0    |


3. Comando:
    ```sql
    SELECT * FROM Movies WHERE release_date < "2022-08-16"
    ```

    Resposta:

    | id  | title                         | synopsis                                                                                                                                                                                                                                                                                                                    | release_date | ratting |
    | --- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
    | 001 | Se Eu Fosse Você              | Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos                                                                                                                                                                    | 2006-01-06   | 7.0     |
    | 002 | Doce de mãe                   | Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela                                                                      | 2012-12-27   | 10.0    |
    | 003 | Dona Flor e Seus Dois Maridos | Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.                                                                                                                                             | 2017-11-02   | 8.0     |
    | 004 | O Auto Da Compadecida         | João Grilo e Chicó são os amigos inseparáveis que protagonizarão a história vivida no sertão nordestino. Assolados pela fome, pela aridez, pela seca, pela violência e pela pobreza, tentando sobreviver num ambiente hostil e miserável, os dois amigos usam da inteligência e da esperteza para contornarem os problemas. | 2000-09-10   | 8.6     |


4. Comando:
    ```sql
    SELECT * FROM Movies WHERE (title LIKE "%Dona%" OR synopsis  LIKE "%Dona%") AND ratting  > 7
    ```

    Resposta:

    | id  | title                         | synopsis                                                                                                                                                                                                                                               | release_date | ratting |
    | --- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------- |
    | 002 | Doce de mãe                   | Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela | 2012-12-27   | 10.0    |
    | 003 | Dona Flor e Seus Dois Maridos | Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.                                                                        | 2017-11-02   | 8.0     |
