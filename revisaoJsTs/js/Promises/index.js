function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (min - max) * min)
}

function tempoEspera(msg, tempo) {
  setTimeout((
    console.log(msg)
  ), tempo)
}