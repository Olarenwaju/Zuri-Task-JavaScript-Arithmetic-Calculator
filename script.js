console.log("Arithmetic Calculator")
// 
let add = (num1, num2) => {
    return num1 + num2
}

let subtract = (num1, num2) => {
    return num1 - num2
}

let multiply = (num1, num2) => {
    return num1 * num2
}

let divide = (num1, num2) => {
    return num1 / num2
}

// calculator body

num1 = parseFloat(prompt("Enter the first number"));

operation = prompt("Enter operation type: +, -, * or /");
num2 = parseFloat(prompt("Enter the Second number"));


let result;

// check for operation type
// add
if (operation == "+") {
    result = add(num1, num2)

    // subtract
} else if (operation == "-") {
    result = subtract(num1, num2)

    // multiple
} else if (operation == "*") {
    result = multiply(num1, num2)

    // divide
} else if (operation == "/") {
    result = divide(num1, num2)
}

// print result to console
console.log(`${num1} ${operation} ${num2}`)
console.log(`Result: ${result}`)
alert(`${num1} ${operation} ${num2} \n Result: ${result}`);