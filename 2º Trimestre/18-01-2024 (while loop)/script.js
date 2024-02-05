// WHILE LOOP

let ej3 = ["Manzana", "Naranja", "Mandarina", "Fresa"];
/** Ejercicio 3.
 * Dado un array de strings, buscar si un elemento especifico esta presente.

// 1º
let elemento = prompt('Introduce your fruit ');
for (let i4 = 0; i4 <ej3.length; i4++)
{
    if(ej3[i4] == elemento)
    {
        console.log('Encontrado')
    }
    else
    {
        console.log('No encontrado')
    }
}
*/
/** Ejercicio 4.
 * Filtra solo los numeros pares de un array.
 * NOTA: se debe crear un array solo con los numeros filtrados.
let ej4 = [3, 6, 7, 2, 9, 10, 15, 18, 22] ;
let nFiltrados = [];
// let nFiltrados = new Array();
for(let i = 0; i < ej4.length; i++ ){
    if(ej4[i]%2==0){
        nFiltrados.push(ej4[i]);
    }
    console.log(nFiltrados);
}
*/

/**
 * Ejercicio 5.
 * Concatenar dos arrays en uno nuevo con todos los valores de ambos arrays.
 * NOTA: se pueden utilizar funciones predefinidas de Arrays
// Resultado final debe ser 1,5,7,2,4,1
what do you think what im doing here ::?
*/
// let ej5a = [1, 5, 7, 8];
// let ej5b = [2, 4, 1];
// let ej5c = ej5a.concat(ej5b);
// console.log(ej5c);
// or more defined
// let ej5a = [1, 5, 7];
// let ej5b = [2, 4, 1];
// let ej5c = [];
// if(ej5a.length == ej5b.length)
// {
//     for(let i = 0; i < ej5a.length; i++)
//     {
//         ej5c.push(ej5a[i]);
//         ej5c.push(ej5b[i]);
//     }
//     console.log(ej5c);
// }else
// {
//     for(let i = 0; i < ej5a.length; i++)
//     {
//         ej5c.push(ej5a[i]);
//     }
//     for(let i = 0; i < ej5a.length; i++)
//     {
//         ej5c.push(ej5b[i]);
//     }
//     console.log(ej5c);
// }
/**
 * 
 * Ejercicio 6.
 * Contar cuantas veces aparece un elemento en un array.
 * El elemento es una letra.
 * NOTA: pedir al usuario una letra por prompt
*/
/*
let ej6 = ["a", "z", "y", "a", "p", "h"] ;
let letra = prompt('please insert a letter') ;
let encontrada = 0;
for(let i = 0; i < ej6.length; i++ )
{
    if(ej6[i]==letra)
    {
       encontrada++;
    }
}
console.log(encontrada + " Veces encontrado la letra " + letra +".");
*/
/**
 * Ejercicio 7.
 * Eliminar duplicados en un array.
 * NOTA: usar funciones predefinidas de Arrays
 */
/*
let ej7 = [1, 2, 3, 4, 2, 5, 1, 6];
let ej7a = [] ; 
for(let i = 0; i < ej7.length; i++)
{
    if(ej7a.includes(ej7[i]) == false)
    {
        ej7a.push(ej7[i]);
    }
    else
    {
        // we can leave it empty
    }
}
console.log(ej7a);
*/
/**
 * Ejercicio 8.
 * Dado un array de palabras, ordenar esas palabras alfabeticamente.
 * NOTA: comprobar si existe un metodo predefinido de Array
 */
let ej8 = ['Cocacola', 'Aquiarius', 'Cerveza', 'Vino', 'Nestea'];

/* We are going to use a method called sort it is only use for arranging a array into alphabeticaly manner we cant use it with number.
console.log(ej8.sort())

let ej8a = [1,2,5,43,7,5,12]
console.log(ej8a.sort());
*/
/* dia 19 - 01 -2024
let nPalabra = 0;
let nombre = ' ';
for(let i = 0; i < coches.Length; i++ )
{
    let coches[i].split(" ");
    if (coches.Length > nPalabra)
    {
        nPalabra = coches.Length
        nombre = coches[i];
    }
}
console.log(nombre);


let nPalabra = 0;
let pos = 0;
for(let i = 0; i < coches.Length; i++ )
{
    let coches[i].split(" ");
    if (coches.Length > nPalabra)
    {
        nPalabra = coches.Length
        pos = i;
    }
}
console.log(coches[pos]);

// Exercise 4
let coches4 = [];
for(let i = 0; i < coches.Length; i++)
{
    let coche = coches[i].split(" ");
    if (coche.Length > 2)
    {
        coches4.push(coches[i]);
    }
}
console.log(coches4);
console.log(coches4.sort());

*/