import promptInit from 'prompt-sync';
const prompt = promptInit();

console.log('Welcome to the Typescript Accounting System!');
console.log('Please add your first account');

// Prompt the user for the account name and the monthly budget for this account - uncomment the two lines at the top and use const value = prompt('Please provide the value')
// Remember to parse the monthly budget to a Number, i.e. using Number(value)
const name = prompt('Please provide the account name:');
const monthlyBudget = Number(prompt('Please provide the monthly budget for this account:'));

// When you have the values, create an object out of them
const account = {
  name,
  monthlyBudget,
};

// Then, use console.log to display the values of the properties
console.log('The account you have added is:');
console.log(`Name: ${account.name}`);
console.log(`Monthly budget: ${account.monthlyBudget}`);
