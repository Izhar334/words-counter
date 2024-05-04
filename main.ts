#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n\t\tWell-Come to Izhar Word Counter\n\t\t"));
console.log("=".repeat(60));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        messgea: "Enter a sentence"
    }
]);
let words =answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("-sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));




