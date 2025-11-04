// Traducción de funciones de Python a JavaScript
// Objetivo: practicar lógica, estructuras, y funciones básicas

// 1. Saludar usuario
// Imprimimos Hola y concatenamos el nombre con el mensaje
function saludarUsuario(nombre) {
    console.log("Hola, " + nombre + "! Bienvenido al curso de programación.");
}

// 2. Repetir texto
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// La función regresa la cadena repetida n veces
function repetirTexto(texto, veces) {
    return (texto + " ").repeat(veces);
}

// 3. Invertir palabra
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Con split la cadena se separa con un delimitador que se especifica en el parámetro
// Reverse invierte el orden del array producido por split
// Join une los elementos del array en una cadena
function invertirPalabra(palabra) {
    return palabra.split("").reverse().join("");
}

// 4. Contar vocales
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// Contador
// variable de vocales
// Se crea una variable auxiliar (letra) que se convierte a minúscula
// Si esa letra está en las vocales, aumenta
function contarVocales(texto) {
    let contador = 0;
    const vocales = "aeiou";
    for (let letra of texto.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

// 5. Mayúsculas y minúsculas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// La de lowerCase ya la puse arriba
// Regresamos un array, el primer elemento es mayúsculas y el segundo minúsculas
function mayusculasYMinusculas(texto) {
    return [texto.toUpperCase(), texto.toLowerCase()];
}

// 6. Promedio lista
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Si el tamaño es 0, entonces no hacemos nada, regresamos 0
// Es el ejemplo de la documentación, se van reduciendo los elementos del array conforme a la 
// condición, en este caso, sumándolos, empezando con 0
function promedioLista(numeros) {
    if (numeros.length === 0) return 0;
    let suma = numeros.reduce((a, b) => a + b, 0);
    return suma / numeros.length;
}

// 7. Máximo y mínimo
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// igual que en el ejemplo, se ponen 3 puntos para indicar que es un array
function maximoYMinimo(numeros) {
    return [Math.max(...numeros), Math.min(...numeros)];
}

// 8. Filtrar pares
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// filter entrega un nuevo arreglo con los elementos que cumplen la condición, en este caso
// que sean divisibles entre 2 para que sean pares
function filtrarPares(numeros) {
    return numeros.filter(n => n % 2 === 0);
}

// 9. Sumar elementos de texto
// Join ya lo pusimos arriba 
// une los elementos en un array
function sumarElementosTexto(listaTextos) {
    return listaTextos.join(" ");
}

// 10. Buscar elemento
// Ya lo puse en las vocales
// checar si el array contiene ese elemento
function buscarElemento(lista, elemento) {
    return lista.includes(elemento);
}

// 11. Contar palabras
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// Ya lo puse en invertir palabra (split)
// trim elimina espacios en blanco antes y después del texto, ya sean espacios simples, dobles,
// tabulaciones o saltos de línea
function contarPalabras(frase) {
    const palabras = frase.trim().split(/\s+/);
    return palabras.length;
}

// 12. Duplicar elementos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Con map modificamos todos los elementos del array con la función que le digamos, en este
// caso, cada elemento se multiplica por dos
function duplicarElementos(lista) {
    return lista.map(x => x * 2);
}

// 13. Capitalizar palabras
// Primero separamos la cadena haciendola array
// Modificamos con .map
// El índice 0 de la palabra se hace mayúscula y se le concatena el resto de la palabra en minúscula
// Se vuelven a unir los elementos en una string
function capitalizarPalabras(frase) {
    return frase
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(" ");
}

// 14. Mezclar listas
// Primero encontramos cuál es la menor para iterar hasta entonces
// Creamos una lista combinada
// Se le agrega el elemento de la lista1 y después de la lista 2
// Regresamos la lista
function mezclarListas(lista1, lista2) {
    let combinada = [];
    const limite = Math.min(lista1.length, lista2.length);
    for (let i = 0; i < limite; i++) {
        combinada.push(lista1[i]);
        combinada.push(lista2[i]);
    }
    return combinada;
}

// 15. Contar frecuencia
// Funciona prácticamente igual que en Python
// Esto fue similar a como hice la función para agrupar por ciudades en el proyecto
// Si existe la llave, aumentamos el contador, de lo contrario, añadimos la llave con un elemento
function contarFrecuencia(lista) {
    let conteo = {};
    for (let item of lista) {
        if (conteo[item]) {
            conteo[item]++;
        } else {
            conteo[item] = 1;
        }
    }
    return conteo;
}

// Ejemplos de prueba
console.log("1. Saludar Usuario");
saludarUsuario("Abraham Martínez");

console.log("2. Repetir texto");
console.log(repetirTexto("Hola", 3));

console.log("3. Invertir la palabra");
console.log(invertirPalabra("Asada"));

console.log("4. Contar las vocales");
console.log(contarVocales("Birria"));

console.log("5. Convertir a mayúsculas y minúsculas");
console.log(mayusculasYMinusculas("Beatles"));

console.log("6. Obtener el promedio de un array");
console.log(promedioLista([1, 2, 7]));

console.log("7. Obtener máximo y mínumo del array");
console.log(maximoYMinimo([5, 10, 2, 8]));

console.log("8. Filtrar los números pares");
console.log(filtrarPares([1, 2, 3, 4, 5, 6]));

console.log("9. Unir los elementos de un array en una cadena");
console.log(sumarElementosTexto(["5", "de", "asada"]));

console.log("10. Buscar un elemento");
console.log(buscarElemento([1, 2, 3, 4], 3));

console.log("11. Contar número de palabras");
console.log(contarPalabras("All my little plans and schemes"));

console.log("12. Multiplicar por dos los elementos del array");
console.log(duplicarElementos([1, 2, 3]));

console.log("13. Poner en mayúscula la primera letra de cada palabra");
console.log(capitalizarPalabras("the beatles"));

console.log("14. Mezclar arrays");
console.log(mezclarListas(["a", "b", "c"], [1, 2, 3]));

console.log("15. Contar la frecuencia de cada elemento del array");
console.log(contarFrecuencia(["a", "b", "a", "c", "b", "a"]));