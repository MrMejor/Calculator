// Array

// let a = 5 ; 
// - estrectura (objeto) para almacenar varios valores.
// let b = [1,2,3,4,5] ;
// -Tamaño fijo
// let a = [6,3,4,8,1];         // 0 -> 6 , 1 -> 3
// let b = ['Jashan','Pepito']; // 0 -> Jashna , 1 -> Pepito
// let perdedor = ['Atletico de madrid'];
// let c = [1,'1','cosa',8];
// let d = new Array(1, 2, 3, 4, 5);

// console.log(b[1]); 
// console.log(c[0]); 
// console.log(b[2]);

// console.log(b);
// b[1]= 'Makhan singh' ;
// console.log(b);

// b[5]= 'Lal singh' ;
// console.log(b.length); 

// let f = [2, 4, 5];
// console.log(f);

// f.push(8, 10, 12 ,14);
// console.log(f);

// f.pop();
// console.log(f)

let ejercicio = ['pepe', 'Manzana', 5, null, 3 ];

/**Ejercicio 1.
 * Pide al usuario un numero y devuelve el valor de la posicion  
 *asociada.
 * Si no existe esa posicion, devolver mensaje "NO EXISTE".
 */
 let ej1 =parseInt(prompt('insert your Value, Please 😄'));
 // Recoger el longitude del array.
 let logitudeej1 = ejercicio.length;
 if (ej1>= 0 && ej1 < logitudeej1 - 1){
     console.log('El valor es ' + ejercicio[ej1]);
    }else{
        console.log('NO EXISTE')
    }
 
 
/**Ejercicio 2.
 * Pide al usuario un valor y comprueba si ese valor es la longitud del array.
 * Devuelve el mensaje correspondiente en funcion de la respuesta.
 */

 let ej2 =parseInt(prompt('insert your Value, Please 😄'));
 if ( ejercicio.length == ej2){
     console.log(' Es la misma longitud ')
 }else{
     console.log('Es distinta')
}
/**
 * Ejercicio 3.
 * Comprueba si el array tiene longitud mayor a 7.
 * Si no tiene longitud mayor a 7, introduce tantos valores como quieras hasta llegar a 7.
 */
// Al pedir que sea mayor a 7, tengo que agregar elemento hasta llegar a 8
if(ejercicio.length < 8){
    let cuantos = 8 - ejercicio.length;
    ejercicio.push(6, 7, 2);
}
