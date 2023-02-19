const pessoa = {
  nome: "Nicolas",
  sobrenome: "Dias",
  idade: 16,
  pais: "Brasil",
  endereco: {
    rua: "Avenida Brasil",
    numero: "123"
  }
};

const { nome } = pessoa;
console.log(nome);

// Define um valor padrão caso nao seja encontrado a variavel dentro do objeto
const { teste1 = "não existe" } = pessoa;
console.log(teste1);

// Atribui o valor de nome do objeto a uma variavel chamada teste2
const { nome: teste2 } = pessoa;
console.log(teste2);

const { endereco: { rua: r, numero: n } } = pessoa;
console.log(r, n);

// acessando as chaves atraves do rest operator

const { nome: name, ...restoPessoa } = pessoa;
console.log(name, restoPessoa);