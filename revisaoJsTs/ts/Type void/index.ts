function semRetorno(...args: string[]): void{
  console.log(args.join(' '));
}
semRetorno("Nicolas", "Dias");

const pessoa = {
  nome: "Nicolas",
  sobrenome: "Dias",
  exibirNome(): void{
    console.log(this.nome +" " + this.sobrenome);
  }
}

pessoa.exibirNome();

export { pessoa };