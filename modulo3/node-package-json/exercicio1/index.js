// Exercício 1

const name = process.argv[2]
const age = process.argv[3]
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"

if (name === undefined || age === undefined) {
    console.log(FgRed, `Esperava 2 parâmetros, só recebi um`);
} else {

    // a)
    console.log(FgGreen, "a) " + "Para acessarmos os parâmetros passados na linha de comando para o Node, usamos o process.argv[2] a partir do 3° índice.");

    // b)
    console.log(FgBlue, "b) " + `Olá, ${name}! Você tem ${age} anos.`)

    // c)
    const futureAge = Number(age) + 7;

    console.log(FgYellow, "c) " + `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}.`);
}

