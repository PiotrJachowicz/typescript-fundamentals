As we are beginning to build our app, before starting exercise 4 we add some changes.
The `hello-world.ts` file is renamed to `index.ts` as it will be an entrypoint to our app.
This means we need to also change the scripts in `package.json` to point to this new file.
We can also get rid of the code from before, we won't need it anymore

The purpose of this exercise is to get acquainted with the basics of typescript typing with primitives and objects.

We will get the input from user, create a new "account" and display it in the console.

Before we can start we will need to install one dependency - `prompt-sync`. It's a library that allows us to gather the
data from the user from the console in an easier, more concise way. You can install it by running `npm i prompt-sync @types/prompt-sync`.

The `index.ts` file already contains some empty methods with comments on what needs to be implemented. Please follow those instructions, 
and run `npm run start` to test the solution.

Happy coding!