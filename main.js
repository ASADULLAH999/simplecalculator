// simple calculator:
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First number", type: "number", name: "firstNum" },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNum",
    },
    {
        message: "slect one of the operation to perform action",
        type: "list",
        name: "operation",
        choices: ["Add", "subtract", "multiply", "Divide"],
    },
]);
//conditional statememt:
if (answer.operation === "Add") {
    console.log(answer.firstNum + answer.secondNum);
}
else if (answer.operation === "subtract") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operation === "multiply") {
    console.log(answer.firstNum * answer.secondNum);
}
else if (answer.operation === "Divide") {
    console.log(answer.firstNum / answer.secondNum);
}
else {
    console.log("please select valif operator");
}
