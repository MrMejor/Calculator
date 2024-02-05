/*
let age = 32 ;
age + 2;
console.log(age) ;


let signal = prompt(" Write the color of the signal") ;
if(signal == 'red')
{
   console.log( "You have to stop" ) ;
}
if(signal == 'yellow')
{
   console.log( "You have to wait" ) ;
 } 
if(signal == 'green')
{
   console.log( "You can go now" ) ;
}
else
{
    console.log( "you have to stop there is so problem in signal " )
}
*/

/*
let age = 16 ;
if (age >= 18)
{
    console.log("You are an adult. You can vote now.") ;
}
else if(age < 18)
{
    console.log("You are a minor. You can't vote now.") ;
}
*/
/*
// exercise 9
let size = prompt("What size would you like to have of popcorn tub") ;
if(size == 'xl')
{
    console.log( "Its price is Rs. 250" )
}
else if(size == 'l')
{
    console.log( "Its price is Rs. 200" )
}
else if(size == 'm')
{
    console.log( "Its price is Rs. 100" )
}
else 
{
    console.log( "Its price is Rs. 50" )
}
*/

/*
let str = prompt("Insert you name") ;
if(str[0] === 'a' && str.length >= 3 )
{
    console.log( ` its a good string ${str}`) ;
}
else
{
    console.log("It's not a good string ") ;
}
let a = 5;

switch (a) {
case 1:
// Aqui entra cuando a == 1
console.log("a es igual a 1");
break;
case 2:
// Aqui entra cuando a == 2
console.log("b es igual a 2");
break;
default:
// Aqui entra cuando el valor es distinto a los 'case' de arriba
console.log("Entra en valor por defecto");
break;
}
        
let b = "Sergio";
switch (b) {
case "Antonio":
console.log("Estamos en Antonio");
break;
case "Sergio":
console.log("Estamos en Sergio");
break;
default:
console.log("Profesor no conocido");
break;
}

// example indexof
const daw = ["MAS", "CNR", "EF", "MFR", "DFV", "JK", "AMS", "BPP", "JRA", "JRB" ,"AVD"] ;

let lista ;

lista = daw.indexOf("JK") ;

console.log(lista) ;
*/

// 29-01-2023 

/* Qs1. Create a number variable num  with some value. Now, print “ good ” if the number is divisible by 10 and print “ bad ” if it is not.
let num = 9 ;
if(num % 10 == 0)
{
    console.log('good') ;
}
else
{
    console.log('bad') ;
}
*/
/* Qs2. Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age): name is age years old.[Use template Literal stoprintthissentence]
let name = prompt('Insert your name, please') ;
let age = prompt('Insert your age, please') ;
alert(`${name} is ${age} year old`) ;
*/
// Qs3. Write a switch statement to print the months in a quarter. 
// Months in Quarter1 : January, February, March.
// Months in Quarter2: April, May, June.
// Months in Quarter3: July, August, September. 
// Months in Quarter4: October, November, December
// [ Use the number as the case value in switch ]. 
let Quater = 1 ;
switch (Quater)
{
    case 1: console.log(`January, February, March`)
        break;
    case 2: console.log(`April, may, June`)
        break;
    case 3: console.log(`July, August, September,`)
        break;
    case 4: console.log(`Octuber, November, December`)
        break;

    default:console.log(`Please select your valid Quater number from 1, 2, 3 & 4`)
        break;
}
// Qs4.Astringisagoldenstringifitstartswiththecharacter‘A’or‘a’andhasatotallengthgreaterthan5.Foragivenstringprintifitisgoldenornot.Qs5.Writeaprogramtofindthelargestof3numbers.
let a = Apple ;
if((a[1] == 'a' || a[1] == 'A') && (a.length <= 5)) // prentecic are very important while cxcreating the condition.
{
    console.log(` ${a} + is a golden word `) ;
}
else
{
    console.log(` ${a} + is not a golden word `) ;
}