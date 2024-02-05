// WHILE LOOP


let ej1 = [1, 2, 3, 4, 5] ;
/* Ejercicio 1.
* Dado un array de numeros, calcular la  de todos los elementos

// Solutuion with (FOR LOOP)

let suma = 0 ;
for (let i =0; i < ej1.length; i++ )
{
    suma = suma + ej1[i] ;
}
console.log(suma);

// solution with WHILE LOOP

let suma = 0 ; 
let nIteraciones = ej1.length;
let i2= 0 ; 
while(i2 < nIteraciones)
{
    suma = suma + ej1[i2] ;
    i2++ ;
}
console.log(suma);

// solution with DO WHILE LOOP

let suma = 0 ; 
let nIteraciones = ej1.length;
let i3= 0 ; 
do{
    suma = suma + ej1[i3] ;
    i3++ ;
}
while(i3 < nIteraciones);
console.log(suma);
*/

let ej2 = [10, 14, 15, 12, 22] ;
/** Ejercicio 2.
 * Calcular el promedio de un array de numeros.
let suma = 0 ;
for (let i =0; i < ej2.length; i++ )
{
    suma = suma + ej2[i] ;
}
console.log("toal od our array is " + suma);
console.log("Promedio of our array is " + suma/ej2.length);
*/

let ej3 = ["Manzana", "Naranja", "Mandarina", "Fresa"];
/** Ejercicio 3.
 * Dado un array de strings, buscar si un elemento especifico esta presente.
 */

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
/** Ejercicio 4.
 * Filtra solo los numeros pares de un array.
 * NOTA: se debe crear un array solo con los numeros filtrados.
 */
let ej4 = [3, 6, 7, 2, 9, 10, 15, 18, 22] ;



// DO WHILE