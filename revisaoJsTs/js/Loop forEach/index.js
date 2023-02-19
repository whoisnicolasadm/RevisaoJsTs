const a1 = [10, 20, 30]
// Só funciona com arrays
let total = 0;
a1.forEach(function(value, index, arr){
  total += value
})
console.log(total)