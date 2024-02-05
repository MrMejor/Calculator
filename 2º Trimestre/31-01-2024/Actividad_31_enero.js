const fruteria = {
  frutas: {
    manzanas: {
      cantidad: 20,
      precio: 1.5,
      enOferta: false,
      tipo: "Golden",
    },
    bananas: {
      cantidad: 30,
      precio: 0.5,
      enOferta: true,
      tipo: "Cavendish",
    },
    naranjas: {
      cantidad: 15,
      precio: 0.8,
      enOferta: true,
      tipo: "Valencia",
    },
    peras: {
      cantidad: 10,
      precio: 1.2,
      enOferta: false,
      tipo: "Conferencia",
    },
    kiwis: {
      cantidad: 25,
      precio: 0.4,
      enOferta: false,
      tipo: "Hayward",
    },
    mangos: {
      cantidad: 5,
      precio: 2.0,
      enOferta: true,
      tipo: "Tommy Atkins",
    },
    fresas: {
      cantidad: 40,
      precio: 0.3,
      enOferta: false,
      tipo: "Festival",
    },
    arandanos: {
      cantidad: 20,
      precio: 1.0,
      enOferta: false,
      tipo: "Bluecrop",
    },
    limones: {
      cantidad: 12,
      precio: 0.6,
      enOferta: true,
      tipo: "Meyer",
    },
    sandias: {
      cantidad: 2,
      precio: 4.0,
      enOferta: false,
      tipo: "Crimson Sweet",
    },
  },
  verduras: {
    lechuga: {
      cantidad: 10,
      precio: 0.7,
      enOferta: false,
      tipo: "Romana",
      origen: "España",
      frescura: 3,
    },
    zanahorias: {
      cantidad: 25,
      precio: 0.4,
      enOferta: true,
      tipo: "Baby",
      origen: "Francia",
      frescura: 5,
    },
    tomates: {
      cantidad: 18,
      precio: 0.9,
      enOferta: true,
      tipo: "Cherry",
      origen: "Italia",
      frescura: 2,
    },
    cebollas: {
      cantidad: 30,
      precio: 0.3,
      enOferta: false,
      tipo: "Blanca",
      origen: "Holanda",
      frescura: 4,
    },
    pimientos: {
      cantidad: 12,
      precio: 1.2,
      enOferta: false,
      tipo: "Verde",
      origen: "España",
      frescura: 1,
    },
    calabacines: {
      cantidad: 22,
      precio: 0.6,
      enOferta: true,
      tipo: "Italiano",
      origen: "México",
      frescura: 4,
    },
    esparragos: {
      cantidad: 8,
      precio: 2.5,
      enOferta: false,
      tipo: "Verde",
      origen: "Perú",
      frescura: 3,
    },
    brocoli: {
      cantidad: 14,
      precio: 1.0,
      enOferta: false,
      tipo: "Calabrese",
      origen: "Estados Unidos",
      frescura: 5,
    },
    pepinos: {
      cantidad: 20,
      precio: 0.8,
      enOferta: true,
      tipo: "Holandes",
      origen: "España",
      frescura: 3,
    },
    coliflor: {
      cantidad: 12,
      precio: 1.3,
      enOferta: false,
      tipo: "Blanca",
      origen: "Italia",
      frescura: 2,
    },
  },
};
// console.log(fruteria[frutas]);

// Ejercicio 1. Almacena en un array todos los nombres de las frutas en oferta. Muestra el contenido final.
/*

let frutaEnOferta =[] ;
for(let frutas in fruteria[frutas])
{
  if(  fruteria[frutas]['oferta'] == 'true' )
  {
      frutaEnOferta.push(frutas) ;
  }
}
console.log(frutaEnOferta) ;

// Ejercicio 2. Muestra cuantas frutas estan en oferta y su precio es mayor a 1.
  if( (fruteria[frutas]['oferta'] == 'true') && precio > 1)
  {
      frutaEnOferta.push(fruteria[frutas]) ;
  }
  console.log(frutaEnOferta) ;

  */
// Ejercicio 3. Almacena en un array los nombres de las frutas cuyo tipo contenga mas de una palabra. Muestra el contenido final.
// Ejercicio 4. Almacena en un array los nombres de las verduras que tienen origen en España. Muestra su contenido final.
// Ejercicio 5. Almacena en un array los nombres de las tres verduras mas caras. Muestra su contenido final.
// Ejercicio 6. Almacena en un array los nombres de los 5 productos mas caros entre verduras y frutas. Muestra su contenido final.










// Class Solution

// Exercise 1
// -- Recorrer Objectcon nombre frutas
/*
let a1 = [] ;
for(let producto in fruteria['frutas'])
{
  console.log(producto) ;
  if (fruteria['frutas'][producto]['enOferta'] == true) 
  {
    a1.push(producto)  
  }
}
console.log(a1) ;
*/

// Exercise 2
/*
let c2 = 0 ;
for(let producto in frutera ['frutas'])
{
  if(fruteria['frutas'][producto]['enOferta'] == true && fruteria ['frutas'] [producto]['precio'] > 1)
  {
    c2++
    console.log(producto);
  }
}
console.log(c2);
*/

// Exercise 3
/*
let a3 = [] ;
for(let productoin fruteria['frutas'])
{
  let tipo = fruteria['frutas'][producto]['tipo'].split(" ");
  console.log(tipo);
  if(tipo.length > 1)
  {
    a3.push(producto)
  }
}

// 2º forma
console.log(a3) ;

let a3b = [] ;
for(let productoin fruteria['frutas'])
{
  let tipo = fruteria['frutas'][producto]['tipo'];
  console.log(tipo);
  if(tipo.includes(" "))
  {
    a3.push(producto)
  }
}
console.log(a3) ;
*/
// Example 4
/*
let a4 = [] ;
for(let producto in fruteria['verduras'])
{
  if(fruteria['verduras'][producto]['origin'] == "España")
  {
    a4.push(producto)
  }
}
console.log(a4);
*/
// Example 5
let a5 = [] ;
for(let producto in fruteria['verduras'])
{
if(a5.length < 3)
{
  a5.push(fruteria['verduras'][producto])
}
else
{
  let precioProducto = fruteria['verduras'][producto]['precio'];
  let p0 = a5[0]['precio'];
  let p1 = a5[1]['precio'];
  let p2 = a5[2]['precio'];
  console.log(precioProducto);
  console.log(p0);
  console.log(p1);
  console.log(p2);

  if(precioProducto > p0 || precioProducto > p1 || precioProducto > p2 )
  {
    
  }
}
}
console.log(a5) ;


let a5a = [] ;
for(let producto in fruteria['verduras'])
{
  a5a.push(fruteria['verduras'][producto]);
}
a5a.sort() ;
a5a.reverse() ;
console.log(a5a) ;

let a5aResult = [] ;
for(let producto in fruteria['verduras'])
{
  if(fruteria['verduras'][producto]['precio'] == a5a[0] || iffruteria['verduras'][producto]['precio'] == a5a[1] )
  {

  }
}