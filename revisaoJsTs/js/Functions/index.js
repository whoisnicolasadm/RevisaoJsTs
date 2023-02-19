funcao1();
function funcao1(){
  console.log("Function 1")
};

function funcao2(){
  console.log("Function 2")
};
funcao2();

// arrow function

const arrowFunction = () =>{
  console.log("Arrow Function");
};
arrowFunction();

// funcao dentro de objeto

const obj = {
  funcao3: function(){
    console.log("Function 3")
  }
};
obj.funcao3();