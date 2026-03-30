let valor1;
let valor2;
let valor3;

function numeros(a, b, c) {
  //Aquí ya tenemos el número más alto
  valor1 = a > b ? (valor1 = a) : (valor1 = b);
  valor1 = valor1 > c ? (valor1 = valor1) : (valor1 = c);

  //Aquí ya tenemos el número más bajo
  valor2 = a < b ? (valor2 = a) : (valor2 = b);
  valor2 = valor2 < c ? (valor2 = valor2) : (valor2 = c);

  //Aquí ya tenemos el número de medio
  valor3 = a + b + c - (valor1 + valor2);
}

function numerosMaxMin(a, b, c) {
  numeros(a, b, c);
  console.log(valor1, valor3, valor2);
}

function numerosMinMax(a, b, c) {
  numeros(a, b, c);
  console.log(valor2, valor3, valor1);
}

let valorA = Number(prompt("Ingresa un número: ", "100"));
let valorB = Number(prompt("Ingresa un número: ", "200"));
let valorC = Number(prompt("Ingresa un número: ", "180"));

if ((valorA && valorB && valorC) != null) {
  //Entrada por prompt
  document.getElementById("entrada").innerHTML =
    "Los números ingresados fueron: " + valorA + ", " + valorB + ", " + valorC;
  numerosMaxMin(valorA, valorB, valorC);
  //Descendentes
  document.getElementById("salida1").innerHTML =
    "Salida: " + valor1 + ", " + valor3 + ", " + valor2;

  numerosMinMax(valorA, valorB, valorC);
  //Ascendentes
  document.getElementById("salida2").innerHTML =
    "Salida: " + valor2 + ", " + valor3 + ", " + valor1;
}
