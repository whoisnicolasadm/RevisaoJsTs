// Interfaces podem extender cada uma de suas definicoes
// Extendendo uma interface significa que voce esta criando 
// uma nova interface com as mesmas propriedades que a original, com algo novo

interface Rect {
  width: number,
  height: number
}

interface ColoredRect extends Rect {
  color: string
}

const coloredRect: ColoredRect = {
  width: 20,
  height: 10,
  color: "red"
}

console.log(coloredRect.color)