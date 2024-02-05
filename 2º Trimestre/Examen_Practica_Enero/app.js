/**
 * @author Sergio Fontan
 * @description T2P1. Examen práctico del módulo de LM curso 2023-24.
 * 
 * Consideraciones previas:
 * - Array DAW contiene las iniciales de los integrantes del ciclo de DAW. NO DEBE SER MODIFICADO.
 * - Array DAM contiene las iniciales de los integrantes del ciclo de DAM. NO DEBE SER MODIFICADO.
 * - Array pokemons contiene los pokemon de la primera generacion. Sobre este array se trabajará en la práctica. NO DEBE SER MODIFICADO.
 * 
 * Criterios de evaluación:
 * - Resolución correcta del ejercicio 1. No se corrigen ejercicios que no corresponden al estudiante.
 * - Elección del bucle correcto en cada caso.
 * - Elección del método adecuado en cada caso. Se valora en menor medida la solucion correcta sin uso de metodos predefinidos.
 * - Optimización de recursos. A tener en cuenta numero de lineas, iteraciones, etc.
 * - Uso correcto de variables.
 */

const pokemons = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

const daw = ["MAS", "CNR", "EF", "MFR", "DFV", "JK", "AMS", "BPP", "JRA", "JRB", "AVD"];
const dam = ["OAC", "MBG", "RBO", "PCG", "AFC", "CGH", "NLR", "DMA", "JME", "AM", "MNQ", "AOR", "DPG", "MR", "ARM", "CSM", "JVA"];

/**
 * @name Ejercicio 1. (1p)
 * @desciption En este ejercicio obtiene como resultado los siguientes ejercicios a realizar en el examen.
 * 
 * Se pide:
 * a) Crear una variable con tu numero de lista. 
 *    Este numero de lista se obtiene buscando en el array correspondiente a tu ciclo (dam o daw).
 *    Tu numero de lista es la posicion donde se ubica el String con tu numbre y apellido/s.
 *      
 *      Ejemplo:
 *      let profesores = ['SFL', 'DJJJ', 'AC'];
 *          - Si me llamo Sergio Fontan Llamas, mis iniciales son SFL y mi numero de lista es el 0 (posicion).
 *          - Si me llamo Antonio Carmona, mis iniciales son AC y mi numero de lista es el 2 (posicion).
 *
 * 
 * b) Crear una variable con tu nombre y apellidos.
 * 
 *     Ejemplo: 
 *     let nombre = "Sergio Fontan Llamas";
 *  
 * Una vez realizados los apartados a) y b), tus ejercicios a realizar dependerán de tu número de lista.
 * - Si tu numero de lista es un numero par (0, 2, 4, 6,...) tus ejercicios son el 2, 4, y 6.
 * - Si tu numero de lista es un numero impar (1, 3, 5, 7,...) tus ejercicios son el 3, 5 y 7.
 */


/**
 * @name Ejercicio 2. (2,5p)
 * Extraer en un array los pokemons que esten en una posicion que sea divisible por tu numero de lista.
 * Ejemplo: si tu numero es el 12, recoger los de las posiciones 12, 24, 36, etc.
 * Una vez extraidos, se pide mostrar el array en orden alfabetico.
 */


/**
 * @name Ejercicio 3. (2,5p)
 * Extraer en un array los pokemons que esten en una posicion que sea divisible por tu numero de lista.
 * Ejemplo: si tu numero es el 12, recoger los de las posiciones 12, 24, 36, etc.
 * Una vez extraidos, se pide mostrar la longitud del array resultante.
 */


/**
 * @name Ejericio 4 (3p)
 * Se pide buscar si en tu array resultado del ejercicio 2 está incluido el pokemon "Magmar".
 * En caso de que este incluido, mostrar mensaje de éxito.
 * En caso de que no este incluido, introducirlo en la primera posicion.
 */


/**
 * @name Ejercicio 5 (3p)
 * Se pide buscar si en tu array resultado del ejercicio 3 está incluido el pokemon "Jynx".
 * En caso de que este incluido, mostrar mensaje de éxito y eliminarlo.
 * En caso de que no este incluido, introducirlo en la ultima posicion.
 */

/**
 * @name Ejercicio 6 (3,5p)
 * Se pide buscar si en tu array resultado del ejercicio 2 esta incluido el pokemon "Snorlax", "Pikachu" o "Zapdos".
 * En caso de que esté incluido alguno, reemplazar su valor en el primero que aparezca por tu nombre. 
 * El resto no deben experimentar cambios.
 * En caso de no estar incluido ninguno, mostrar mensaje de no estar incluido ninguno de los 3.
 * Mostrar array resultado.
 */

/**
 * @name Ejercicio 7 (3,5p)
 * Se pide buscar si en tu array resultado del ejercicio 3 esta incluido el pokemon "Gastly", "Jolteon" o "Mewtwo".
 * En caso de que esté incluido alguno, reemplazar su valor en el primero que aparezca por tu nombre. 
 * El resto no deben experimentar cambios.
 * En caso de no estar incluido ninguno de ellos, mostrar mensaje de no incluido ninguno de los 3 y agregar tu nombre en la penultima posicion.
 */





// Exercise 1
// part a
let lista ;
lista = daw.indexOf("JK") ;
console.log( lista ) ;

let nombre = "Jashanjeet Singh Kuka" ;
console.log( nombre ) ;

// Exercise 3
let mipokemon = [] ;
for(let i = 1; i <= pokemons.length; i++)
{
if( i % 5  == 0)
{
    mipokemon.push(pokemons[i]);
}
}
console.log(mipokemon);
console.log(mipokemon.length);

// Exercise 5
let findPokemon = 'Jynx' ;
if(findPokemon != pokemons[30])
{
    console.log('No este incluido') ;
    pokemons.push(findPokemon) ;
}
else
{
    console.log('Incluido') ;
    pokemons.pop(findPokemon) ;
}
console.log(pokemons) ;

// Exercise 7
let lostPokemons = ["Gastly", "Jolteon" ,"Mewtwo"] ;
for(let p = 0; p <= pokemons.length; p++)
{
    if(lostPokemons.includes(pokemons[p] == false))
    {
        console.log('No incluido ninguno de los 3') ;
        console.log(lostPokemons.sort()) ;
        pokemons.push(nombre) ;
    }
    else
    {

    }
}
console.log(pokemons) ;
/*
switch ((lostPokemons.includes(pokemons[p] == false))) {
        case (lostPokemons[1].includes(pokemons[p] == false)):
            console.log('includes');
            break;
        case (lostPokemons[2].includes(pokemons[p] == false)):
            console.log('includes');
            break;
        case (lostPokemons[3].includes(pokemons[p] == false)):
            console.log('includes');
            break;
    
        default:
            console.log('No incluido ninguno de los 3') ;
        console.log(lostPokemons.sort()) ;
        pokemons.push(nombre) ;
            break;
    }
    */