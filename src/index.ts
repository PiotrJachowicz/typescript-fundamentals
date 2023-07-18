import promptInit from 'prompt-sync';
const prompt = promptInit();

// Add the AccountType enum

console.log('Welcome to the Typescript Accounting System!');
console.log('Please add your first account');

const name = prompt('Please provide the account name:');
const monthlyBudget = Number(prompt('Please provide the monthly budget for this account:'));
// Prompt the user for the account type

// When you have the values, create an object out of them - add the account type
const account = {
  name,
  monthlyBudget,
};

// create the result array and push the account
// const result = [];
// repeat the process for a second account
// log the results to the console
