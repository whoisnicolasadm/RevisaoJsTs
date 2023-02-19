class Pessoa{
  nome!: string
}

const pessoa1 = new Pessoa();
pessoa1.nome = "Nicolas";

console.log(pessoa1);


// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person{
  private name: string;

  public constructor(name:string){
    this.name = name;
  }
  public getName(){
    return this.name;
  }
}

const person = new Person("Nicolas");
console.log(person.getName()); // person.name não é acessível por fora da classe enquanto for privado




