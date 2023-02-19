// A tuple is a typed array with a pre-defined length and types for each index.
// A ordem importa na tupla, e caso nao seja cumprida ocorrerá um erro

// Definindo a tupla
let tupla: [number, boolean, string];
// Inicializando
tupla = [5, false, "SIM"];

tupla.push("Nicolas"); // não será possivel acessar esse valor dentro da tupla

console.log(tupla);

// readonly tuples
// Não será possivel inserir valores nessa tupla, já que é readonly
const readOnlyTuple: readonly [number, boolean, string] = [5, false, "Sim"] ;
// readOnlyTuple.push('Coding God took a day off'); vai dar erro

