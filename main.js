import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "Enter your First Number : "
    },
    {
        type: "number",
        name: "number2",
        message: "Enter your Second Number : "
    },
    {
        type: "list",
        name: "operator",
        message: "Enter Any Operator : ",
        choices: ["+", "-", "*", "/"]
    }
]);
const { number1, number2, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        console.log("Invalid Operator : ");
}
console.log("THE ANSWER OF : " + `${number1} ${operator} ${number2} = ${result}`);
