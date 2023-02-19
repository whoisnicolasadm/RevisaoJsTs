const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const numsFilter = nums.filter( value => value > 14);
console.log(numsFilter);

const pessoas = [
  {nome: "Nicolas", idade: 16},
  {nome: "Eduardo", idade: 22},
  {nome: "João", idade: 25},
  {nome: "Igor", idade: 22},
  {nome: "Miguel", idade: 13},
  {nome: "Gabriela", idade: 15},
];

// Filtra as pessoas que o nome tem mais de 4 letras
let nomeMaiorQue5 = pessoas.filter(
  function(obj){
    return obj.nome.length > 4;
  }
); 
console.log(nomeMaiorQue5)

nomeMaiorQue5 = pessoas.filter(obj => obj.nome.length > 4)
console.log(nomeMaiorQue5)

// Filtra apenas as pessoas que tem idade maior que 18
const idadeMaiorQue18 = pessoas.filter(obj => obj.idade > 18);
console.log(idadeMaiorQue18);

// Filtra apenas as pessoas que o nome termina com A
const endWithA = pessoas.filter(obj => obj.nome.endsWith("a"));
console.log(endWithA);