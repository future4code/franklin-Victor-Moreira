<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>


# Exercícios de Introdução ao SQL

## Turma: Franklin
## Aluno: Victor Ramon Firmo Moreira
---

### Exercício 1

1. A chave estrangeira, ou foreign key, é o campo que estabelece o relacionamento entre duas tabelas. 

1. 
    ```SQL
    INSERT INTO Ratting
    VALUES ("R001", "Excelente filme", 8.5, "004")

    INSERT INTO Ratting
    VALUES ("R002", "Mais ou menos", 5.3, "001")
    ```

    | id   | comment         | rate | movie_id |
    | ---- | --------------- | ---- | -------- |
    | R001 | Excelente filme | 8.5  | 004      |
    | R002 | Mais ou menos   | 5.3  | 001      |

1. 
    ```SQL
    INSERT INTO Ratting
    VALUES ("R003", "O filme é tão ruim que não existe", 0.0, "002")
    ```

    ``` SQL Error [1452] [23000]: Cannot add or update a child row: a foreign key constraint fails (`franklin-victor-moreira`.`Ratting`, CONSTRAINT `Ratting_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)) ```

    Explica que não pode atualizar uma avaliação do filme sem ter a referência do id desse filme.

1. 
    ```SQL
    ALTER TABLE Movies DROP COLUMN ratting
    ```

1. 
    ```SQL
    DELETE FROM Movies WHERE id = 003 
    ```

    A query indica que deseja deletar o dado da tabela Movies que possui id igual a 003

---

### Exercício 2

1. A tabela `MovieCast` possui as colunas `movie_id` e `actor_id` que possuem relacionamento com os `id` das tabelas `Movie` e `Actor` respectivamente.

1. 
    ```SQL
    INSERT INTO MovieCast 
    VALUES("001", "001"),
        ("001", "003"),
        ("001", "004"), 
        ("001", "005")

    INSERT INTO MovieCast 
    VALUES("004", "001"),
        ("004", "003"),
        ("004", "004"), 
        ("004", "005")
    ```

1. 
    ```SQL
    INSERT INTO MovieCast 
    VALUES("004", "002")
    ```

    ```SQL Error [1452] [23000]: Cannot add or update a child row: a foreign key constraint fails (`franklin-victor-moreira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))```

    O erro informa que não se pode atualizar uma coluna inexistente.

1. 
    ```SQL
    DELETE FROM Actor WHERE id = 001
    ```

    ```
    SQL Error [1451] [23000]: Cannot delete or update a parent row: a foreign key constraint fails (`franklin-victor-moreira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
    ```

    Não permitiu deletar o ator que já tinha relação com outra tabela.

---

### Exercício 3

1. 
    A query retorna os dados que possuem relações entre as atabelas Movies e Ratting baseado no `id` do filme. O operador `ON` serve para indicar de onde parte a pesquisa.

    Obs.: Não coloquei a tabela, pois a descrição dos filmes deixou muito grande.

2. 
```sql
SELECT Movies.title, Movies.id, Ratting.rate FROM Movies 
INNER JOIN Ratting ON Movies.id = Ratting.movie_id;
```

| title                 | id  | rate |
| --------------------- | --- | ---- |
| O Auto Da Compadecida | 004 | 8.5  |
| Se Eu Fosse Você      | 001 | 5.3  |
