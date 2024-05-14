#! /usr/bin/env node

import inquirer from "inquirer";

// printing a Wellcome Message
console.log("\n\tWellcome To \'code_with_sadia\' - CLI Simple Calculator\n");

// Asking Questions from users through inquirer
const answer = await inquirer.prompt([
    {message: "Enter firstNumber", type: "number", name: "firstNumber"},
    {message: "Enter secondNumber", type: "number", name: "secondNumber"},
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);

// // // conditional statement If Else
if(answer.operartor === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);

    }else if(answer.operator ==="Division"){
        console.log(answer.firstNumber / answer.secondNumber);
    }

    else{
        console.log("Invallid Input")
    }