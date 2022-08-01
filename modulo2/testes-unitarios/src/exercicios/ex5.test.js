import { escrevePrimeiraLetraMaiuscula } from "./ex5"


describe("Checa se todas as palavras que a compõe a frase estão com sua primeira letra maiúscula", () => {
    
    test( "retorna Ola para ola", () => {
        const resposta =  escrevePrimeiraLetraMaiuscula("ola")

        expect(resposta).toEqual("Ola")
    })

    test( "retorna 'Ola, Mundo' para 'ola, mundo'", () => {
        const resposta =  escrevePrimeiraLetraMaiuscula("ola, mundo")

        expect(resposta).toEqual("Ola, Mundo")
    })

    test( "retorna 'Eu Sou O Bob, Aluno Da Labenu' para 'eu sou o bob, aluno da labenu'", () => {
        const resposta =  escrevePrimeiraLetraMaiuscula("eu sou o bob, aluno da labenu")

        expect(resposta).toEqual("Eu Sou O Bob, Aluno Da Labenu")
    })
})