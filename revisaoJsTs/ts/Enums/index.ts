// Enum é uma classe que representa um conjunto de constantes (Variaveis não alteráveis)

enum CardinalDirections {
  North = 1, 
  South,
  East,
  West
};

let currentDirection = CardinalDirections.North;
// currentDirection = "North" || "North"' is not assignable to type 'cardinalDirections' 
// Log 0 by default

console.log(currentDirection);

console.log(CardinalDirections.West);

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

// Logs 404
console.log(StatusCodes.NotFound);
// Logs 202
console.log(StatusCodes.Accepted)

enum StringCardinalDirections{
  North = "North",
  South = "South",
  East = "East",
  West = "West"
}

// Logs "North"
console.log(StringCardinalDirections.North)
// Logs "West"
console.log(StringCardinalDirections.West)