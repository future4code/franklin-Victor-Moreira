<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>

# Turma: Franklin
# Aluno: Victor Ramon Firmo Moreira

## Exercícios de Herança

---

### Exercício 1

```js
const minato = new User("001", "minato@email.com", "Minato Namikaze", "123456789")
```

1.  Não seria possível imprimir a senha `password` atrelada a essa instância, pois é uma propriedade privada.
2.  A mensagem `"Chamando o construtor da classe User"` foi impressa uma única vez no terminal

---

### Exercício 2

```js
const naruto = new Customer("002", "naruto@email.com.br", "Naruto Uzumaki", "123456789", "457869523254")
```

1. A mensagem `"Chamando o construtor da classe Customer"` foi impressa uma vez no terminal.

2. A mensagem `"Chamando o construtor da classe User"` foi impressa uma vez no terminal, uma vez que a classe `Customer` herda as propriedasdes da classe `User`, necessita passar pelo construtor de user.

---

### Exercício 3

```js
console.log(`id: ${naruto.getId()}`);
console.log(`name: ${naruto.getName()}`);
console.log(`email: ${naruto.getEmail()}`);
console.log(`pruchaseTotal: ${naruto.purchaseTotal}`);
console.log(`creditCard: ${naruto.getCreditCard()}`);
```

1. Como não há método para acessar a propriedade `password` e ela é privada, não é possível imprimir a senha atrelada a essa instância.

---

### Exercício 4

Implementação do método `introduceYourself`:

```js
public introduceYourself(): string {
return `Olá, bom dia!`
}
```

Chamada do método a partir da classe filha:

```js
console.log(naruto.introduceYourself());
```

---

### Exercício 5

Alteração na implementação do método:

```js
public introduceYourself(): string {
return `Olá, sou ${this.name}. Bom dia!`
}
```

---

## Exercícios de Polimorfismo

---

### Exercício 1

```js
const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill() {
        return 2;
    }
}

console.log(`${client.name}`);
console.log(`${client.registrationNumber}`);
console.log(`${client.consumedEnergy}`);
console.log(`${client.calculateBill()}`);
```

1. Todas as propriedades puderam ser impressas, uma vez que na criação da interface não especifica se é pública ou privada, por padrão a especificação é como pública.  

---

### Exercício 2

1. O erro gerado ao tentar criar a instância foi o seguinte: `Cannot create an instance of an abstract class.ts(2511)`

2. Uma solução seria criar uma nova classe não abstrata que herdasse as propriedades da classe `Place`

---

### Exercício 3

O exercício solicitado está feito no código.

---

### Exercício 4

1. 
   - Propriedades:
    ```js
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string,
    ```
   - Métodos:
    ```js
    getCpf(): string,
    calculateBill(): number
    ```
   

---

### Exercício 5

1. Semelhanças dessa classe com a `ResidentialClient`: 
   - Ambas implementam os métodos da interface `Client`

2. Diferenças dessa classe com a `ResidentialClient`:
   - Uma herda as propriedades da classe `Residence` enquanto outra herda as propriedades de `Commerce`;
   - Uma possui cpf enquanto outra cnpj.
   - O cálculo da conta de energia é diferente também.

---

### Exercício 6

1. `IndustrialClient` deve ser filha da classe `Industry`, já que é um estabelecimento industrial.
2. A classe `IndustrialClient` também é um cliente, então deve implementar a interface `Client` também.
3. Não faz sentido alterar nenhum dado, somente observá-los. Por isso somente implementação somente dos `getters`

---




