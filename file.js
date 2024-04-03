#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
console.log(chalk.blue("Your current balance is", +myBalance));
// first question for pin
let pinCode = 6969;
let question1 = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.greenBright("Enter your pin code")
    },
]);
if (question1.pin === pinCode) {
    console.log(chalk.blue("Entered pin is correct"));
    // second question
    let question2 = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Plese select a Transaction Method:",
            choices: ["withdraw", "Balance Inquirey", "Fast Cash"],
        },
    ]);
    // Balance Inquirey
    if ((question2.options === "Balance Inquirey")) {
        console.log(chalk.yellowBright `Your current balance is :`, +myBalance);
    }
    // withdraw
    else if (question2.options === "withdraw") {
        let question3 = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.blackBright("Enter Your Amount")
            }
        ]);
        if (question3.amount <= myBalance) {
            let finalAmount = myBalance - question3.amount;
            console.log(chalk.blue `Your current balance is :`, +finalAmount);
            console.log(chalk.green("Your transaction has been Completed :)"));
        }
        else {
            console.log(chalk.red `Insufficiant Balance!`);
        }
        // fast cash
    }
    else if ((question2.options === "Fast Cash")) {
        let question4 = await inquirer.prompt([
            {
                name: "AmountOptions",
                type: "list",
                message: (chalk.yellow("Please Select Amount")),
                choices: ["500", "1000", "2000", "3000", "4000", "5000"],
            }
        ]);
        if (question4.AmountOptions <= myBalance) {
            let finalAmount = myBalance - question4.AmountOptions;
            console.log(chalk.blue `Your current balance is :`, +finalAmount);
            console.log(chalk.green("Your transaction has been Completed :)"));
        }
    }
}
else {
    console.log(chalk.red("\n\tInvalid Pincode!\n"));
}
