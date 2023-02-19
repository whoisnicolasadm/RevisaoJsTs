// Quase tudo misturado

type CarBrand = string;
type ModelType = string;
type CarYear = number;

type Car = {
  brand: string,
  model: string,
  year: number,
  mileage?: number // não é obrigatorio
}

const carType: CarBrand = "Ford";
const carModel: ModelType = "Mustang";
const carYear: CarYear = 1979;

const car: Car = {
  brand: carType,
  model: carModel,
  year: carYear
}

console.log(car)

let newCarTuple: [string, string, number, number];
newCarTuple = ["Ford", "Mustang", 1979, 2000];

const newCar: Car = {
  brand: newCarTuple[0],
  model: newCarTuple[1],
  year: newCarTuple[2],
  mileage: newCarTuple[3]
}

console.log(newCar);


function msg(msg: any): void{ // Msf pode receber qualquer valor, a função não retorna nada | Void
  console.log(msg);
}

msg("Ford Mustang");
msg(1979);

// Interfaces

interface myInterfaceRect {
  width: number,
  height: number
}

interface myNewInterfaceRect extends myInterfaceRect {
  color: string
}

const newRect: myNewInterfaceRect = {
  width: 10,
  height: 20,
  color: "Whitesmoke"
} 
console.log(newRect)