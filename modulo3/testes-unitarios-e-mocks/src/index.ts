import { Character } from "./models/Character"

// Exercicio 1

// b
export function validateCharacter(input: Character): boolean {

    if (!input.name || input.health === undefined || input.attack === undefined || input.defense === undefined) {
        return false
    } if (input.health <= 0 || input.defense <= 0 || input.attack <= 0) {
        return false
    }

    return true
}


// Exercicio 3

// a
// export function performAttack(attacker: Character, deffender: Character) {
//     if (!validateCharacter(attacker) || !validateCharacter(deffender)) {
//         throw new Error("Invalid Character")
//     }

//     if (attacker.attack > deffender.defense) {
//         deffender.health -= attacker.attack - deffender.defense
//     }
// }

// b
export function performAttack(attacker: Character, deffender: Character, validator: (input: Character) => boolean) {
    if (!validator(attacker) || !validator(deffender)) {
        throw new Error("Invalid Character")
    }

    if (attacker.attack > deffender.defense) {
        deffender.health -= attacker.attack - deffender.defense
    }
}

//c
/*A grande diferença, é que com a inversão de dependências, tornamos a função  performAttackB testável*/
