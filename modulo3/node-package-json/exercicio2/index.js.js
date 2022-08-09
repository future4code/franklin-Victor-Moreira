// Exercício 2

import { add, sub, mult, div } from "./mathOperations.js"

const mathOperation = process.argv[2]
const num1 = process.argv[3]
const num2 = process.argv[4]
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
var response = 0

if (mathOperation === undefined || num1 === undefined || num2 === undefined) {
    console.log(FgRed, "Esperava 2 parâmetros, só recebi um");
} else {
    switch (mathOperation) {
        case "add":
            response = add(num1, num2)
            break;
        case "sub":
            response = sub(num1, num2)
            break;
        case "mult":
            response = mult(num1, num2)
            break;
        case "div":
            response = div(num1, num2)
            break;
        default:
            break;
    }

    console.log(FgGreen, `Resposta: ${response}`)
}

