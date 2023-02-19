const pessoas = [
  {nome: "Nicolas", idade: 16},
  {nome: "Eduardo", idade: 22},
  {nome: "João", idade: 25},
  {nome: "Igor", idade: 22},
  {nome: "Miguel", idade: 13},
  {nome: "Gabriela", idade: 15},
];

// Retornando String dos nomes
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Removendo a chave nome
// Forma 1: delete obj.nome;

const semNome = pessoas.map(obj => ({ idade: obj.idade }));
console.log(semNome);

// Adicionando a chave id

const comId  = pessoas.map(function(obj, indice){
  obj.id = (indice + 1) * 10;
  return obj;
})
console.log(comId)