let meuNome: string = "Nicolas"; // Qualquer tipo de string
let idade: number = 16; // 10, 1.57, -5.55, 0xf00d, 0b1010, 07744
let souAdulto: boolean = false; // true ou false
let bigInt: bigint = 10n; // bigint

// Variaveis com valor definido ex:string, number não podem ter outro valor alem de textos e numeros respectovamente

const message = "hELLO World";
message.toLowerCase();

//Arrays

let numberArray: number[] = [1, 2, 3, 4 ,5, 6];
let stringArray: string[] = ["Nicolas", "Alexandre"];
let stringArray2: Array<string> = ["Torres", "Dias"];

// Objetos

const pessoa: {nome: string, idade: number, adulto?: boolean } = {// Adulto não é obrigatório, assume 3 valores: True, False e undefined
  nome: "Nicolas",
  idade: 16
}

console.log(pessoa.nome);

// Funções

function soma(x: number, y: number): number{
  return x+y;
}

const result = soma(1, 4);
console.log(result);

const soma2: (x: number, y:number) => number = (x,y) => x+y;
console.log(soma2(1, 2));