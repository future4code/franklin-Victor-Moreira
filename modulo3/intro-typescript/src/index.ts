
var exercicio: number = 1
function logExercicio():void{
    console.log(`\nExercício ${exercicio}`);
    exercicio++
}

// Exercício 1
logExercicio()

function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "\tEscaleno"
    } else if (a === b && b === c) {
        return "\tEquilátero"
    } else {
        return "\tIsósceles"
    }
}

const ladoA: number = 2
const ladoB: number = 1
const ladoC: number = 3

console.log(checaTriangulo(ladoA, ladoB, ladoC));

//Exercício 2
logExercicio()

function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string) {
    console.log(`\t${[cor1, cor2, cor3]}`)
 }

imprimeTresCoresFavoritas("Laranja", "Cinza", "Vermelha")

// Exercício 3
logExercicio()

function checaAnoBissexto(ano: number): boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

const ano: number = 2022

console.log(`\t${checaAnoBissexto(ano)}`);

// Exercício 4
logExercicio()

function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero;
    let menorNumero;

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    const diferenca = maiorNumero - menorNumero;

    return diferenca
}

const primeiroNumero: number = 100
const segundoNumero: number = 40

console.log(`\tA diferença entre os dois números é ${comparaDoisNumeros(primeiroNumero, segundoNumero)}`);

// Exercício 5
logExercicio()

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number) {

    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }

console.log("\t" + checaRenovacaoRG(2022, 1995, 2018));
