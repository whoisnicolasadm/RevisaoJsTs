const car: { type: string, model: string, year: number, mileage?: number } = {
  type: "Ford",
  model: "Mustang",
  year: 1979
}
car.mileage = 2000; // Define o valor da propriedade Mileage que não é obrigatoria

console.log(car)

export { car }

