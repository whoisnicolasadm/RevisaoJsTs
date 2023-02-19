const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const total = nums.reduce(function(acumulador, valor, indice, array){
  // Somando todos os valores do array
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

const pares = nums.reduce(function(acumulador,valor,indice,array){
  // Adiciona no array Acumulador os numero pares
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, [])
console.log(pares);

const dobro = nums.reduce(function(acumulador, valor, indice, array){
    // Adiciona no array Acumulador o dobro dos numeros no array nums
  numero = valor*2;
  acumulador.push(numero);
  return acumulador
}, [])
console.log(dobro);


const pessoas = [
  {nome: "Nicolas", idade: 16},
  {nome: "Eduardo", idade: 22},
  {nome: "João", idade: 25},
  {nome: "Igor", idade: 22},
  {nome: "Miguel", idade: 13},
  {nome: "Gabriela", idade: 15},
];

const maisVelho = pessoas.reduce(function(acumulador, valor, indice, array){
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
}, [])
console.log(maisVelho)