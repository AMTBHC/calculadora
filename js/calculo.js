// Seleccionar los elementos del DOM
const numero1 = document.getElementById("1");
const numero2 = document.getElementById("2");
const suma = document.getElementById("suma");
const igual = document.getElementById("igual");
const input = document.getElementById("numeros");

let valor1 = null; // Guardará el primer número
let valor2 = null; // Guardará el segundo número
let operacionActual = null; // Guardará el operador seleccionado

function operacion() {
  // Evento para el botón "1"
  numero1.addEventListener("click", function (event) {
    event.preventDefault();
    input.value = "1"; // Muestra el valor en el input
    if (!operacionActual) {
      valor1 = 1; // Asigna el valor a la primera variable
    } else {
      valor2 = 1; // Asigna el valor a la segunda variable
    }
  });

  // Evento para el botón "2"
  numero2.addEventListener("click", function (event) {
    event.preventDefault();
    input.value = "2"; // Muestra el valor en el input
    if (!operacionActual) {
      valor1 = 2; // Asigna el valor a la primera variable
    } else {
      valor2 = 2; // Asigna el valor a la segunda variable
    }
  });

  // Evento para el botón "+"
  suma.addEventListener("click", function (event) {
    event.preventDefault();
    input.value = "+"; // Muestra el operador en el input
    operacionActual = "+"; // Asigna la operación actual
  });

  // Evento para el botón "="
  igual.addEventListener("click", function (event) {
    event.preventDefault();
    if (operacionActual === "+") {
      const resultado = valor1 + valor2; // Realiza la suma
      input.value = resultado.toString(); // Muestra el resultado en el input
    }
  });
}

// Llamar a la función
operacion();