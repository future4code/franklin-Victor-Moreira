import { Client } from "./Client"
import { Commerce } from "./Commerce";
import { Customer } from "./Costumer"
import { Industry } from "./Industry";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { User } from "./User"

// Exercícios Herança:

/*
const minato = new User("001", "minato@email.com", "Minato Namikaze", "123456789")

const naruto = new Customer("002", "naruto@email.com.br", "Naruto Uzumaki", "123456789", "457869523254")

console.log(`id: ${naruto.getId()}`);
console.log(`name: ${naruto.getName()}`);
console.log(`email: ${naruto.getEmail()}`);
console.log(`pruchaseTotal: ${naruto.purchaseTotal}`);
console.log(`creditCard: ${naruto.getCreditCard()}`);

console.log(naruto.introduceYourself());
*/

// Exercícios Polimorfismo?

/*
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

const industry = new Industry( 3, "00000000")
const residence = new Residence( 2, "11111111")
const commerce = new Commerce( 3, "22222222")

console.log(industry.getCep());
console.log(residence.getCep());
console.log(commerce.getCep());

*/