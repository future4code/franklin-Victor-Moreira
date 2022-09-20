import { performPurchase } from "../src"
import { User } from "../src/models/User"

describe(``, () => {
    test(`Testing if balance is geater than value`, () => {
        const user: User = {
            name: "Minato",
            balance: 7000
        }

        const result = performPurchase(user, 350)

        expect(result).toEqual({
            name: "Minato",
            balance: 6650
        })
    })

    test(`Testing if balance is equal than value`, () => {
        const user: User = {
            name: "Orochimaru",
            balance: 10000
        }

        const result = performPurchase(user, 10000)

        expect(result).toEqual({
            name: "Orochimaru",
            balance: 0
        })
    })

    test(`Testing if balance is geater than value`, () => {
        const user: User = {
            name: "Jiraya",
            balance: 0
        }

        const result = performPurchase(user, 1)

        expect(result).toBeUndefined
    })
})