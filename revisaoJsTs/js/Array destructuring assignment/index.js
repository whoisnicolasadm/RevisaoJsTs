/*
  Atribuição via estruturação 
*/

let A = 'A';
let B = 'B';
let C = 'C';

[A, B, C] = [B, C, A];

console.log(A, B, C);

// ... rest operator, ... spread operator

let numeros = [1, 2, 3, 4, 5];
let[primeiroNumero, segundoNumero, ...restoDosNumeros] = numeros;

console.log(primeiroNumero, segundoNumero, restoDosNumeros[0]);

// Array dentro de array

let num = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let num5 = num[1][1];
let [,[,,seis]] = num

console.log(num5, seis)