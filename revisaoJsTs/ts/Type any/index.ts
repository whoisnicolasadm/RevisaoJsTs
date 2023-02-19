// O tipo any pode assumir qualquer Type como: String, Number, Array, etc

function showMessage(msg: any): any{
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage(17));
console.log(showMessage('Nicolas'));