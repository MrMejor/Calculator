// OBJETO EN Java Script

// let cochesArray = ['Toyota', 'Ferrari', 'Renault', 'Fiat'] ;
// let cochesObjeto = 
// {
//  antonio: 'Toyota', 
//  pablo: 'Ferrari', 
//  oscar: 'Renault',
//  damian: 'Fiat'
// } ;


let coches = {
  'coche 1': {
      marca: "Honda",
      modelo: "Civic",
      anio: 2020,
      color: "rojo",
      precio: 25000,
      enVenta: true,
  },
  'coche 2': {
      marca: "Chevrolet",
      modelo: "Camaro",
      anio: 2019,
      color: "negro",
      precio: 30000,
      enVenta: false,
  },
  'coche 3': {
      marca: "Tesla",
      modelo: "Model S",
      anio: 2021,
      color: "plata",
      precio: 100000,
      enVenta: true,
  },
  'coche 4': {
      marca: "Volkswedadn",
      modelo: "Golf",
      anio: 2018,
      color: "azul",
      precio: 20000,
      enVenta: false,
  },
  'coche 5': {
      marca: "Toyota",
      modelo: "Corolla",
      anio: 2020,
      color: "blanco",
      precio: 22000,
      enVenta: true,
  },
  'coche 6': {
      marca: "",
      modelo: "Focus",
      anio: 2022,
      color: "gris",
      precio: 24000,
      enVenta: true,
  },
  'coche 7': {
      marca: "Ford",
      modelo: "Mustang",
      anio: 2020,
      color: "amarillo",
      precio: 35000,
      enVenta: false,
  },
  'coche 8': {
      marca: "Hyundai",
      modelo: "Tucson",
      anio: 2021,
      color: "naranja",
      precio: 30000,
      enVenta: true,
  },
  'coche 9': {
      marca: "Volvo",
      modelo: "XC90",
      anio: 2020,
      color: "marron",
      precio: 60000,
      enVenta: false,
  },
  'coche 10': {
      marca: "Mitsubishi",
      modelo: "Outlander",
      anio: 2019,
      color: "verde",
      precio: 35000,
      enVenta: true,
  },
  'coche 11': {
      marca: "Nissan",
      modelo: "Leaf",
      anio: 2021,
      color: "morado",
      precio: 45000,
      enVenta: true,
  },
  'coche 12': {
      marca: "Toyota",
      modelo: "Rav4",
      anio: 2022,
      color: "rosa",
      precio: 30000,
      enVenta: false,
  },
  'coche 13': {
      marca: "Honda",
      modelo: "Accord",
      anio: 2020,
      color: "rojo",
      precio: 30000,
      enVenta: true,
  },
  'coche 14': {
      marca: "Ford",
      modelo: "Escape",
      anio: 2021,
      color: "negro",
      precio: 35000,
      enVenta: false,
  },
  'coche 15': {
      marca: "Honda",
      modelo: "CR-V",
      anio: 2018,
      color: "plata",
      precio: 30000,
      enVenta: true,
  },
  'coche 16': {
      marca: "Nissan",
      modelo: "Rogue",
      anio: 2020,
      color: "azul",
      precio: 30000,
      enVenta: true,
  }
};
/*
for(let coche in coches)
{
  console.log(coche);
  console.log(coches[coche]['marca']);
}
*/

/** Ejercicio 1.
 * Muestra los coches con año de 2020 en adelante
for(let coche in coches)
{
  if(coches[coche]['anio'] >= 2020)
  {
    console.log(coches[coche]);
  }
}
*/
/** Ejercicio 2.
 * Muestra el modelo de los coches con precio super a 25000
for(let coche in coches)
{
  if(coches[coche]['precio'] >= 25000)
  {
    console.log(coches[coche]['modelo']);
  }
}
*/
/**
 * Ejercicio 3.
 * Actualiza el valor del modelo Accord al modelo Civic
for(let coche in coches)
{
  if(coches[coche]['modelo'] == 'Accord')
  {
    coches[coche]['modelo'] = 'Civic';
    console.log(coches[coche]);
  }
}
*/
/**
 * Ejercicio 4.
 * Elimina el coche con marca Ford y modelo Escape
*/
for(let coche in coches)
{
  if(  coches[coche]['marca'] == 'Ford'  && coches[coche]['modelo'] == 'Escape')
  {
    delete[coches][coche] ;
    // console.log(coches[coche]);
  }
}
console.log(coches) ;
/**
 * Ejercicio 5.
 * Muestra unicamente los 5 primeros coches.
let ncoches = 0 ;
for(let coche in coches)
{
  if (ncoches < 5)
  {
    console.log(coches[coche]) ;
    ncoches++ ; 
  }
}
*/
/**
 * Ejercicio 6.
 * Muestra los primeros 3 coches que su precio sea superior a 30000
let numeroCoches = 0 ;
for(let coche in coches )
{
  if(numeroCoches < 3 && coches[coche]['precio'] >30000)
  {
    console.log(coches[coche]) ;
    numeroCoches++
  }
}
*/

/**
 * Ejercicio 7.
 * Muestra todos los coches que están en venta.
 */
for(let coche in coches)