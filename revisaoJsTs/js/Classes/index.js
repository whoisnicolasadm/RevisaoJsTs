class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`Falei :) | ${this.nome}`)
  }
}

const p1 = new Pessoa("Nicolas", "Dias")
console.log(p1.nome, p1.sobrenome, p1)
p1.falar()