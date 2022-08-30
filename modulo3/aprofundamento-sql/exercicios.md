<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>


# Exercícios de Introdução ao SQL

## Turma: Franklin
## Aluno: Victor Ramon Firmo Moreira

---

### Exercício 1

1. O comando `ALTER TABLE Actor DROP COLUMN salary;` altera a tabela `Actor` removendo a coluna `salary`.

2. O comando `ALTER TABLE Actor CHANGE gender sex VARCHAR(6);` altera a tabela `Actor` mudando a coluna `gender` para `sex` do tipo `VARCHAR(6)`

3. O comando `ALTER TABLE Actor CHANGE gender gender VARCHAR(255);` altera a tabela `Actor` modificando apenas o tipo da coluna `gender` para `VARCHAR(255)`

4. Comando:
 ```sql
 ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
 ```

 Resposta
 ```
 Updated Rows	5
 Query	ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
 Finish time	Thu Aug 18 10:13:25 BRT 2022
 ```

---

### Exercício 2

1. 
    ```sql
    UPDATE Actor
    SET name = " Adiana Esteves", birth_date = '1969-12-15'
    WHERE id = "003"
    ```

2. 
    Para alterar o nome todo para maiúsculo:

    ```sql
    UPDATE Actor
    SET name = UPPER(name)
    WHERE name = "Juliana Paes"
    ```

    Para voltar o nome ao padrão anterior:

    ```sql
    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES"
    ```

3. 
    ```sql
    UPDATE Actor
    SET name = "Cláudia Raia",
    salary = 40000,
    birth_date = "1966-12-23" ,
    gender = "female"
    WHERE id = "005"
    ```

4. 
    ```sql
    UPDATE Actor
    SET name = "Camila Pitanga",
    salary = 35000,
    birth_date = "1977-06-14" ,
    gender = "female"
    WHERE id = "006"
    ```

    O comando retorna que o usuário como o id foi alterado, porém ao acessar a tabela, o mesmo não está presente. Pelo simples motivo de não ter como alterar um dado que ainda não foi criado. Mas o gerenciador de banco não retornou nenhum tipo de aviso sobre.

---

### Exercício 3

1. 
    ```sql
    DELETE FROM Actor WHERE name = "Fernanda Montenegro"
    ```

2. 
    ```sql
    DELETE FROM Actor WHERE gender  = "male" AND salary > 1000000
    ```

---

### Exercício 4

1. 
   ```sql
   SELECT MAX(salary) FROM Actor 
   ```

1. 
   ```sql
   SELECT MIN(salary) FROM Actor  WHERE gender = "female"
   ```

1. 
   ```sql
   SELECT COUNT(*)  FROM Actor WHERE gender = "female"
   ```

1. 
   ```sql
   SELECT SUM(salary) FROM Actor
   ```

---

### Exercício 5

1. 
   ```sql
   SELECT COUNT(*), gender
   FROM Actor
   GROUP BY gender
   ```

   A query utilizada retorna a contagem de gêneros agrupado por gênero.

1. 
   ```sql
   SELECT id, name FROM Actor ORDER BY name DESC
   ```

   | id  | name             |
   | --- | ---------------- |
   | 001 | Tony Ramos       |
   | 002 | Glória Pires     |
   | 005 | Cláudia Raia     |
   | 004 | Antônio Fagundes |
   | 003 | Adiana Esteves   |

1. 
   ```sql
   SELECT * FROM Actor WHERE gender = "male" ORDER BY salary ASC 
   ```

   | id  | name             | salary   | birth_date | gender |
   | --- | ---------------- | -------- | ---------- | ------ |
   | 001 | Tony Ramos       | 400000.0 | 1948-08-25 | male   |
   | 004 | Antônio Fagundes | 400000.0 | 1949-04-18 | male   |


1. 
   ```sql
   SELECT * FROM Actor ORDER BY salary DESC LIMIT 3
   ```

   | id  | name             | salary    | birth_date | gender |
   | --- | ---------------- | --------- | ---------- | ------ |
   | 002 | Glória Pires     | 1200000.0 | 1963-08-23 | female |
   | 001 | Tony Ramos       | 400000.0  | 1948-08-25 | male   |
   | 004 | Antônio Fagundes | 400000.0  | 1949-04-18 | male   |


1. 
   ```sql
   SELECT gender, AVG(salary) FROM Actor GROUP BY gender
   ```

   | gender | AVG(salary)       |
   | ------ | ----------------- |
   | male   | 400000.0          |
   | female | 513333.3333333333 |

---

### Exercício 6

1. 
    ```sql
    ALTER TABLE Movies ADD playing_limit_date DATE
    ```
2. 
    ```sql
    ALTER TABLE Movies CHANGE ratting ratting FLOAT
    ```
3. 
    ```sql
    UPDATE Movies SET playing_limit_date = "2019-11-28" WHERE id = "001"
    UPDATE Movies SET playing_limit_date = "2023-10-08" WHERE id = "004"
    ```
4. 
    ```sql
    DELETE FROM Movies WHERE id = "002"

    UPDATE Movies SET synopsis = "Sinopse atualizada" WHERE id = "002"
    ```

    A resposta indica que o valor foi atualizado, porém, ao acessar os dados da tabela, não é possível encontrar o valor que foi deletado.