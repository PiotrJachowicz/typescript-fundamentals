import promptInit from 'prompt-sync';
const prompt = promptInit();

enum AccountType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

console.log('Welcome to the Typescript Accounting System!');
console.log('Please add your first account');

const name1 = prompt('Please provide the account name:');
const monthlyBudget1 = Number(prompt('Please provide the monthly budget for this account:'));
const accountType1 = prompt('Please provide the account type for this account (DEBIT or CREDIT):') as AccountType;

// When you have the values, create an object out of them - add the account type
const account1 = {
  name: name1,
  monthlyBudget: monthlyBudget1,
  accountType: accountType1,
};

// create the result array and push the account
const result = [];
result.push(account1);

// OR
// const result = [account1];

// repeat the process for a second account
console.log('Please add your second account');

const name2 = prompt('Please provide the account name:');
const monthlyBudget2 = Number(prompt('Please provide the monthly budget for this account:'));
const accountType2 = prompt('Please provide the account type for this account (DEBIT or CREDIT):') as AccountType;

// When you have the values, create an object out of them - add the account type
const account2 = {
  name: name2,
  monthlyBudget: monthlyBudget2,
  accountType: accountType2,
};

result.push(account2);

// log the results to the console
console.log('The first account you have added is:');
console.log(`Name: ${result[0].name}`);
console.log(`Monthly budget: ${result[0].monthlyBudget}`);
console.log(`Account type: ${result[0].accountType}`);

console.log('The second account you have added is:');
console.log(`Name: ${result[1].name}`);
console.log(`Monthly budget: ${result[1].monthlyBudget}`);
console.log(`Account type: ${result[1].accountType}`);
