import { performAttack, validateCharacter } from "..";
import { Character } from "../models/Character";

describe(`Tests for validaCharacter function`, () => {
    // Exercicio 2

    // a
    test(`Should return false for empty name`, () => {
        const result = validateCharacter({
            name: "",
            health: 8000,
            attack: 3000,
            defense: 2500
        })

        expect(result).toBe(false)
    })

    // b
    test(`Should return false for zero health`, () => {
        const result = validateCharacter({
            name: "Blue-Eyes White Dragon",
            health: 0,
            attack: 3000,
            defense: 2500
        })

        expect(result).toBe(false)
    })

    // c
    test(`Should return false for zero attack`, () => {
        const result = validateCharacter({
            name: "Blue-Eyes White Dragon",
            health: 8000,
            attack: 0,
            defense: 2500
        })

        expect(result).toBe(false)
    })

    // d
    test(`Should return false for zero defense`, () => {
        const result = validateCharacter({
            name: "Blue-Eyes White Dragon",
            health: 8000,
            attack: 3000,
            defense: 0
        })

        expect(result).toBe(false)
    })

    // e
    test(`Should return false for negative defense`, () => {
        const result = validateCharacter({
            name: "Blue-Eyes White Dragon",
            health: 8000,
            attack: 3000,
            defense: -1000
        })

        expect(result).toBe(false)
    })

    // f
    test(`Should return true for a valid input`, () => {
        const result = validateCharacter({
            name: "Blue-Eyes White Dragon",
            health: 8000,
            attack: 3000,
            defense: 2500
        })

        expect(result).toBe(true)
    })
})

describe(`Tests for performAttack function`, () => {

    // Exercicio 4

    //a
    /*O mock deve ser criado para a função que é passada como parâmetro*/

    //b
    // test("Creating Mocks", () => {
    //     const validatorMockSuccess = jest.fn(() => {
    // 			return true
    // 		});
    // });

    //c
    // test("Creating Mocks", () => {
    //     const validatorMockFail = jest.fn(() => {
    // 			return false
    // 		});
    // });

    // Exercicio 5

    //a
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Character = {
            name: "Blue-Eyes White Dragon",
            health: 8000,
            attack: 3000,
            defense: 2500,
        };

        const defender: Character = {
            name: "Dark Magician",
            health: 8000,
            attack: 2500,
            defense: 2100,
        };

        performAttack(attacker, defender, validatorMock as any);

        expect(defender.health).toEqual(7100);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });

    //b
    test("Should return invalid character error", () => {
        expect.assertions(4);

        const validatorMock = jest.fn(() => {
            return false;
        });

        const attacker: Character = {
            name: "",
            health: 8000,
            attack: 3000,
            defense: 2500,
        };

        const defender: Character = {
            name: "Dark Magician",
            health: 8000,
            attack: 2500,
            defense: 2100,
        };

        try {
            performAttack(attacker, defender, validatorMock as any);
        } catch (err: any) {
            expect(err.message).toBe("Invalid Character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });
})