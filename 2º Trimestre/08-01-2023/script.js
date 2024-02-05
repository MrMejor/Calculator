// let year = parseInt (prompt ('Insert your year, please.'));
// if(year < 0){
//     console.log('incorrect please insert a valid year');
// }else{
//     if ((year % 4) == 0){
//         console.log('Es un año bisiesto');
//     }
//     else{
//         console.log('No es un año bisiesto');
//     }
// }


// let edad = parseInt(prompt('Introduce una edad'));

// if ( edad < 0){
//     console.log('edad introducia Incorrectamente');
// }
let a = parseInt(prompt('Introduce 1º numero'));
let b = parseInt(prompt('Introduce 2º numero'));
let c = parseInt(prompt('Introduce 3º numero'));

// if number a is smallest
if (a < b && a < c){
    if (b < c){
        console.log('El orden es a < b < c  :' + a + ' ' + b + ' ' + c);
    }else{
        console.log('El orden es a < b < c  :' + a + ' ' + c + ' ' + b);
    }
    // if number b is smallest
}else if(b < a && b < c){
    if (a < c){
        console.log('El orden es a < b < c  :' + b + ' ' + a + ' ' + c);
    }else{
        console.log('El orden es a < b < c  :' + b + ' ' + c + ' ' + a);
    }
    // if number c is smallest
}else {
        if (a < c){
            console.log('El orden es a < b < c  :' + c + ' ' + a + ' ' + b);
        }else{
            console.log('El orden es a < b < c  :' + c + ' ' + b + ' ' + a);
        }

}