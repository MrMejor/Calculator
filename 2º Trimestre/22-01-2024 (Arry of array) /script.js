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
/*
    console.log(coches[2]);

    for(let i = 0; i < coches.Length; i++)
    {
        console.log(coches[i]);
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
*/
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
 
/**
 * Ejercicio 4.
 * Guardar en un array todos los coches (array completo) que sean electricos y que su año de fabricacion sea anterior a 2022.
 * Muestra resultado final.
 */
 
/**
 * Ejercicio 5.
 * Muestra ordenados alfabeticamente todos los modelos de coches con precio mayor a 25000
 */
 
/**
 * Ejercicio 6.
 * Muestra la marca y modelo (array) de los coches que sean de tipo sedán
 */