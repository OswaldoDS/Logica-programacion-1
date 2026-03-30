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
  //   console.log("De mayor a menor:");
  //   console.log("Valor máximo: " + valor1);
  //   console.log("Valor medio: " + valor3);
  //   console.log("Valor mínimo: " + valor2);
}

function numerosMinMax(a, b, c) {
  numeros(a, b, c);
  console.log(valor2, valor3, valor1);
  //   console.log("De mayor a menor:");
  //   console.log("Valor mínimo: " + valor2);
  //   console.log("Valor medio: " + valor3);
  //   console.log("Valor máximo: " + valor1);
}

numerosMaxMin(4, 2, 4);
// console.log("========================");
numerosMinMax(4, 2, 4);
