import { resolveModuleName } from "typescript";
import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true para 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true para 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true para 1996", () => {
    const resultado = checaBissexto(1996);

    expect(resultado).toEqual(true)
  });

  test("retorna true para 2008", () => {
    const resultado = checaBissexto(2008);

    expect(resultado).toEqual(true)
  });

  test("retorna false para 2007", () => {
    const resultado = checaBissexto(2007);

    expect(resultado).toEqual(false)
  });

  test("retorna false para 2022", () => {
    const resultado = checaBissexto(2022);

    expect(resultado).toEqual(false)
  });

  test("retorna true para 4", () => {
    const resultado = checaBissexto(4);

    expect(resultado).toEqual(true)
  });

});
