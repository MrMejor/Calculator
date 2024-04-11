function onOff() {
  // Get the input and display elements
  let input = document.getElementById('pantalla');
  let display = document.querySelector('.display');

  // Toggle the calculator's on/off state
  let isOn = input.readOnly === false;
  if (isOn) {
    // Set the input and display to be editable and visible
    input.readOnly = true;
    display.style.visibility = 'visible';
  } else {
    // Set the input and display to be non-editable and hidden
    input.readOnly = false;
      display.style.visibility = 'hidden';
  }
}

let screen = document.getElementById('pantalla');

/**
 * 
 * @param {*} operator it will look on the last digit inserted on screen if it is a opreto
 */
function preventConsecutiveOperators(operator) {
    let lastChar = screen.value.slice(-1); // Obtener el último carácter en el campo de pantalla
    // Verificar si el último carácter es un operador y el nuevo operador también lo es
    if (['+', '-', '*', '/', '^', '.','(',')'].includes(lastChar) && ['+', '-', '*', '/', '^', '.','(',')'].includes(operator)) {
        // Si es así, eliminar el último carácter antes de agregar el nuevo operador
        screen.value = screen.value.slice(0, -1);
    }
}

// Función para agregar un valor al campo de pantalla
function appendToDisplay(value) {
    preventConsecutiveOperators(value);
    screen.value += value; // Concatenar el valor al contenido actual del campo de pantalla
}

// Función para borrar el contenido del campo de pantalla
function clearDisplay() {
    screen.value = ''; // Establecer el contenido del campo de pantalla como una cadena vacía
}

// Función para calcular el resultado de la expresión matemática en el campo de pantalla
function calculate() {
    try {
        let result = eval(screen.value);
        if (result === Infinity || isNaN(result)) {
            screen.value = 'Error'; // En caso de error, mostrar 'Error' en el campo de pantalla
        } else {
            screen.value = result; // Evaluar la expresión y asignar el resultado al campo de pantalla
        }
    } catch (e) {
        screen.value = 'Error'; // En caso de error, mostrar 'Error' en el campo de pantalla
    }
}

// Función para calcular la raíz cuadrada del valor en el campo de pantalla
function calculateSquareRoot() {
    let value = parseFloat(screen.value); // Obtener el valor del campo de pantalla
    if (!isNaN(value) && value >= 0) {
        screen.value = Math.sqrt(value); // Calcular la raíz cuadrada y asignarla al campo de pantalla si hay un valor válido
    } else {
        screen.value = 'Error'; // Mostrar 'Error' si no se puede calcular la raíz cuadrada
    }
}

// Función para calcular la potencia del valor en el campo de pantalla
function calculatePower() {
    let value = screen.value.split('^'); // Dividir la cadena en dos partes: base y exponente
    if (value.length === 2) { // Verificar si la división fue exitosa
        let base = parseFloat(value[0]); // Convertir la base a un número
        let exponent = parseFloat(value[1]); // Convertir el exponente a un número
        if (!isNaN(base) && !isNaN(exponent)) {
            screen.value = Math.pow(base, exponent); // Calcular la potencia y asignarla al campo de pantalla
        } else {
            screen.value = 'Error'; // Mostrar 'Error' si no se pueden convertir a números la base o el exponente
        }
    } else {
        screen.value = 'Error'; // Mostrar 'Error' si la expresión no está en el formato correcto
    }
}

// Función para manejar el evento de presionar tecla
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calculate(); // Realizar cálculos cuando se presiona la tecla "Enter"
    }
    if (event.key === 'Backspace') {
        clearLastDigit(); // Borrar el último dígito cuando se presiona la tecla "Backspace"
    }
}

// Función para borrar el último dígito del campo de pantalla
function clearLastDigit() {
    let currentValue = screen.value; // Obtener el valor actual del campo de pantalla
    if (currentValue.length > 0) {
        // Eliminar el último dígito del valor actual y actualizar el campo de pantalla
        screen.value = currentValue.slice(0, -1);
    }
}

// Función para manejar la entrada de texto restringida
function restrictInput(event) {
    let value = event.target.value; // Obtener el valor actual del campo de pantalla
    // Eliminar cualquier caracter que no sea un número, un punto o un operador
    value = value.replace(/[^\d.+\-*/^]/g, '');
    // Eliminar puntos adicionales en una cifra
    value = value.replace(/(\.*)\../g, '$1');
    event.target.value = value; // Asignar el valor limpio al campo de pantalla
}

// Asignar el enfoque al campo de pantalla cuando se carga la página
window.onload = function () {
    screen.focus();
    screen.onblur = function () {
        screen.focus();
    }
}


// function calculatePercentage() {
//     // Get the input field
//     var input = document.getElementById('pantalla');

  
//     // Get the current value
//     var value = input.value;
  
//     // Check if the input is empty
//     if (value === '') {
//       return;
//     }
  
//     // Check if the input is a number
//     if (isNaN(value)) {
//       return;
//     }
  
//     // Calculate the percentage
//     var percentage = parseFloat(value) / 100;
  
//     // Update the input field with the result
//     input.value = percentage;
  
//     // Display the result
//     display.textContent = percentage;
// }

function percentage() {
    // Get the input field
    var input = document.getElementById('pantalla');
    pantalla.value = (num1 * num2) / 100;
}