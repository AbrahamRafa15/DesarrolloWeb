const { sumar, restar, multiplicar, dividir, modulo, operar } = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe multiplicar dos números correctamente", () => {
    expect(multiplicar(5,2)).toBe(10);
    expect(multiplicar(5,-2)).toBe(-10);
});

test("Debe lanzar un error al dividir entre cero", () => {
  try {
    dividir(10, 0);
  } catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero");
  }
});

test("Debe sacar el módulo de dos números", () => {
    expect((modulo(5,2))).toBe(1);
});

test("Debe sumar con operar", () => {
    expect((operar(1, 2, "sumar"))).toBe(3);
    expect((operar(3, 5, "sumar"))).toBe(8);
});

test("Debe restar con operar", () => {
    expect((operar(2, 3, "restar"))).toBe(-1);
    expect((operar(5, 2, "restar"))).toBe(3);
});

test("Debe multiplicar con operar", () => {
    expect((operar(2, 5, "multiplicar"))).toBe(10);
    expect((operar(2, -5, "multiplicar"))).toBe(-10);
});

test("Debe dividir con operar", () => {
    try {
        
        expect((operar(10, 2, "dividir"))).toBe(5);
    }
    catch (e) {
        expect(e.message).toBe("No se puede dividir entre 0");
    }
});

test("Debe sacar modulo con operar", () => {
    expect((operar(4, 2, "modulo"))).toBe(0);
});