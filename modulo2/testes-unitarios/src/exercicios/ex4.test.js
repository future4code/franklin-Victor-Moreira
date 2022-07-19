import { ordenaArrays } from "./ex4";

describe("Ordena uma lista de números", () => {
    test("retorna o vetor [3, 2, 1] para a entrada [1, 2, 3]", () => {
        const resultado = ordenaArrays([3, 2, 1])

        expect(resultado).toEqual([1, 2, 3]);
    })

    test("retorna o vetor [1, 3, 4, 7] para a entrada [4, 3, 2, 1]", () => {
        const resultado = ordenaArrays([4, 7, 1, 3])

        expect(resultado).toEqual([1, 3, 4, 7]);
    })

    test("retorna o vetor [20, -1, -4, 0, 6] para a entrada [-4, -1, 0, 6, 20]", () => {
        const resultado = ordenaArrays([20, -1, -4, 0, 6])

        expect(resultado).toEqual([-4, -1, 0, 6, 20]);
    })
})