function multiplicacionClasica(a, b) {
    return a * b;
}

const multiplicacionArrow = (a, b) => a * b;

function cuadradoClasica(a) {
    return a * a;
}

const cuadradoArrow = a => a * a;

console.log(multiplicacionClasica(2, 3));
console.log(multiplicacionArrow(2, 3));
console.log(cuadradoClasica(4));
console.log(cuadradoArrow(4));