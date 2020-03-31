const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleSubtractionInput = {
  num1: 10.1,
  num2: 1,
  operation: '-',
}

const multiplyInput = {
  num1: 2,
  num2: 100.1,
  operation: '*',
}

const divideInput = {
  num1: 75,
  num2: 2,
  operation: 'divide',
}

const wrongNumInput = {
  num1: "abc",
  num2: 2,
  operation: '+',
}


const wrongOperationInput = {
  num1: 9,
  num2: 2,
  operation: '=',
}

//js_calculator function

const js_calculator = function(input) {

  let valid_operations = ["add","subtract","multiply","divide","+","-","*","/"];

  if (typeof input.num1 !== "number" || typeof input.num2 !=="number"){
    return `Invalid input of num1:${input.num1} or num2:${input.num2}`;
  }
  if (valid_operations.includes(input.operation) === false ){
    return `Invalid input of operation:${input.operation}`;
  }

  if (input.operation === "add" || input.operation === "+"){
    return input.num1 + input.num2 ;
  }
  else if (input.operation === "subtract" || input.operation === "-"){
    return input.num1 - input.num2 ;
  }
  else if (input.operation === "multiply" || input.operation === "*"){
    return input.num1 * input.num2 ;
  }
  else if (input.operation === "divide" || input.operation === "/"){
    return input.num1 / input.num2 ;
  }
  else {
    return "Error";
  }

}


// Example inputs 


console.log(js_calculator(exampleAdditionInput));
console.log(js_calculator(exampleSubtractionInput));
console.log(js_calculator(multiplyInput));
console.log(js_calculator(divideInput));
console.log(js_calculator(wrongNumInput));
console.log(js_calculator(wrongOperationInput));