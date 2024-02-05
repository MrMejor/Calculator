// /* We've started Quokka for you automatically on this file.
//  *
//  * To open a new Quokka file:
// // // // //  *   - Press `⌘ K, J` to create a new JavaScript File
//  *   - Press `⌘ K, T` to create a new TypeScript File
//  *   - Press `⌘ K, L` to open an interactive sample from:
//  *     https://github.com/wallabyjs/interactive-examples
//  *
//  * To start/restart Quokka on an existing file:
//  *   - Press `⌘ K, Q`
// */

// // See the output of console.log right next to your code
// const quokka = { isAwesome: true };

// console.log(quokka);

// // See the value of a variable simply by typing its name
// quokka;

// // Use sequence expression to compare objects
// const wallaby = { "is Quokka's BigBrother": true };

// (quokka, wallaby)

// // Gutter indicators show what code was executed (code coverage)

// // Orange indicators means only part of the line was executed
// // because JavaScript stops processing after first false value
// console.log('partialCoverage', false && true);

// // Green indicators means that Quokka executed all statements
// // on a line of code
// if (false) {
//   // White indicators means that a line of code was never
//   // executed by Quokka
//   console.log('noCoverage', true);
// }

// // Red indicators show where an error occurred. The error message
// // is also shown beside the error
// throw new Error('Something went wrong');

// // There's a lot more Quokka can do! Visit our docs to learn more:
// // - https://quokkajs.com/docs/

let coches = 
[   
    [ "Toyota", "Camry", 2022, "Sedán", "Gris", 25000, "Automático"],   
    ["Honda", "Civic", 2021, "Coupé", "Rojo", 22000, "Manual"], 
    ["Ford", "F-150",2023, "Camioneta", "Negro", 40000, "Automático"],   
    ["Chevrolet", "Malibu", 2020, "Sedán", "Azul", 28000, "Automático"], 
    ["BMW", "X5", 2022, "SUV", "Blanco", 60000, "Automático"],   
    ["Audi", "A4", 2021, "Sedán", "Plateado", 35000, "Automático"],   
    ["Tesla", "Model 3", 2023, "Eléctrico", "Negro", 50000, "Automático"]
]


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