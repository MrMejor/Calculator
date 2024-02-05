// bucles o loops
// let array = [6, 4, 8, 3, 5, 1] ; 
// let i = 0 ;
// for(i = 0; i <= 5; i++)
// {
    //     // console.log(i); 
    //     console.log(array[i]); 
    // }
    
    // if(array.length <= 9)
    // {
        //     let inicio = array.length ; 
        //     // console.log(inicio) ;
        //     // array.push(7) ;
        //     // console.log(inicio) ;
        //     // array.push(8) ;
        //     // console.log(inicio) ;
        //     // array.push(9) ;
        //     // console.log(inicio) ;
        //     // array.push(2) ;
        //     // console.log(inicio) ;
        //     for(inicio; inicio < 9; inicio++)
        //     {
            //         array.push(parseInt(prompt('Que numero quieres ingresar')))
            //         // array.push(5);
            //         console.log(array)
            //         console.log("La longitud del array es " + inicio) ;
            //     }
            // }
            
            
            // [11:47] Sergio Fontán Llamas
            /**
             * Ejercicio 1.
             * Imprime por pantalla los numeros pares hasta el 10.
            */
for (i = 0; i < 10; i+2);
           // if (i %2 == 0) // 2º o Alterniva 
           console.log(i);
           /**
            * Ejercicio 2.
            * Imprime por pantalla los numeros divisibles por 3 hasta el 20
           */
for(let num = 0; num <= 20; num++)
{
    if(num % 3 == 0)    
    {
    console.log(num);
    }
}
            
for(let num = 0; num <= 20; num++)
    {
     console.log(num)
    }
            
/**
* Ejercicio 3.
* Imprimer por pantalla los 4 primeros multiplos de 2 empezando por cero (cero no cuenta).
*/

// EXERCISE 4
let array = [6, 4, 8, 3, 5, 1] ; 
for( i = 0; i < array.length; i++)
{
    if(array[i] % 2 == 0)
    {
        console.log(array[i]);
    }
}
 
//EXERCISE 5
let array = [6, 4, 8, 3, 5, 1] ; 
for( i = 0; i < array.length; i++)
{
    if(array[i] % 3 == 0)
    {
        
        console.log(array[i]);
    }
}