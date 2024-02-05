
/*
    console.log(coches[2]);

    for(let i = 0; i < coches.Length; i++)
    {
        console.log(coches[i]);#
        if(coches[i][0] == 'BMW')
        {
            console.log(coches[i]);
        }
    }
    for(let i = 0; i < coches.Length; i++)
    {
        console.log(coches[i]);
        if(coches[i][2] == '2022')
        {
            console.log(coches[i]);
        }
    }
    */
    
/**
 * Ejercicio 3.
 * Guardar en un array todos los modelos de lo coches que tengan transmision automatica.
 * Mostrar resultado final.
let ej3 = []; // we created a new araay because they asked for to save a aray 
for(let i = 0; i < coches.length; i++)
{
    console.log(coches[i]);
    if(coches[i][6] == 'Automático')
    {
        ej3.push(coches[i][1]);
    }
}
console.log(coches[ej3]);
*/
 
/**
 * Ejercicio 4.
 * Guardar en un array todos los coches (array completo) que sean electricos y que su año de fabricacion sea anterior a 2022.
 * Muestra resultado final.
 */
 
/**
 * Ejercicio 5.
 * Muestra ordenados alfabeticamente todos los modelos de coches con precio mayor a 25000
let ej5 =[] ;
for(let i= 0; i < coches.length; i++)
{
    if(coches[i][5] > 55000){
        ej5.push(coches[i][1]);
    }
}
console.log(ej5); 
console.log(ej5.sort()); 
*/
/**
 * Ejercicio 6.
 * Muestra la marca y modelo (array) de los coches que sean de tipo sedán
*/
let ej6 =[] ; // 
for(let i = 0; i < coches.length; i++) //
{
    let coche = i;
    // if(coches[i][3] == sedán)
    // {
    //     ej5.push(coches[i][0][1]);
    // }
    console.log( coche ); 
}
// console.log(ej6.sort()); 
]
/**
 * Ejercicio 5.
 * Muestra ordenados alfabeticamente todos los modelos de coches con precio mayor a 25000
let ej5 =[] ;
for(let i= 0; i < coches.length; i++)
{
    if(coches[i][5] > 55000){
        ej5.push(coches[i][1]);
    }
}
console.log(ej5); 
console.log(ej5.sort()); 
*/

let ej6 =[] ; // 
for(let i = 0; i < coches.length; i++) //
{
    let coche = [coches[i][0],coches[i][1]];
    console.log( coche ); 
    if(coches[i][3] == 'Sedán')
    {
      ej6.push(coche) ;
    }
}
console.log( ej6 ) ; 

/* MY FORMULA EJ 6
let ej6 =[] ; // 
for(let i = 0; i < coches.length; i++) //
{
  if(coches[i][3] == 'Sedán')
  {
      let coche = [coches[i][0],coches[i][1]];
      ej6.push(coche) ;
    }
}
console.log( ej6 ) ; 
*/

/**
 * Ejercicio 7.
 * Muestra todos los tipos distintos de coche que existen en el array coches.
*/
let ej7 =[] ; // 
for(let i = 0; i < coches.length; i++) //
{
  let coche = [coches[i][3]];
  console.log(coche);
  {
    ej7.push(coche) ;
  }
}
console.log( ej7 ) ; 

// /* Solution Profe 
let ej7a =[] ; // 
for(let i = 0; i < coches.length; i++) //
{ 
  if (!ej7a.includes(coches[i][3]))
  {
    ej7a.push(coches[i][3]);
  }
}
console.log(ej7a);
/**
 * Ejercicio 8.
 * Pide una marca de coche al usuario y, en caso de no existir, introducela en un coche nuevo.
 * No es necesario introducir el resto de elementos.
 * Muestra el resultado.
 */ 
/*           BULL SHIT
let a = parseString (prompt ('Please, insert Your brand. '));
if(a == coches[0] || a != coches[0])
{
  console.log('invalid brand inserted')
}
else
{
  choches.push(a);
  console.log(coches);
}
*/
let nombrecoche ;
let encontrada = false ;
do
  nombrecoche= 'ford';
  {
    for(let i = 0; i < coches.length; i++)
     {
      if(coches[i][0] == nombrecoche)
     {
        encontrada = true
     }else
      {
        encontrada = false
        ej8.push([nombrecoche,' ', '',''])
      }
    }
  }
while(encontrada = true)