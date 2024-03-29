#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTasks = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add More ?",
            default: "false"
        }
    ]);
    todos.push(addTasks.todo);
    condition = addTasks.addMore;
    console.log(todos);
}
// I made it myself
let del = await inquirer.prompt({
    name: "delete",
    type: "confirm",
    message: "Do you want to delete last value of your list?"
});
todos.pop();
if (del.delete === true) {
    console.log(todos);
}
