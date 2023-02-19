// Type aliases permitem a definição de tipos com nomes customizados

type CarYear = number;
type CarModel = string;
type CarType =  string;
type Car = {
  year: CarYear,
  model: CarModel,
  type: CarType
}

const carYear: CarYear = 1979;
const carModel: CarModel = "Mustang";
const carType: CarType = "Ford";

const car: Car = {
  year: carYear,
  model: carModel,
  type: carType
}

console.log(car)

export { car }

