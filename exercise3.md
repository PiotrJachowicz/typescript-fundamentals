In this exercise we will configure `eslint` and `prettier` to allow linting and automated formatting of our code.

First, we need to install our dependencies:

```
npm i  –save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier
```

Then, we need to add configuration for eslint, by adding an `.eslintrc` file to the root of our project with the following
contents:

```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "rules": {
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "no-debugger": "off"
  }
}
```

With that, we can add two scripts to our `scripts` section in `package.json`:
```
"lint": "eslint --ext js,ts .",
"lint-fix": "eslint --ext js,ts . --fix"
```

To test linting, you can now run `npm run lint` and `npm run lint-fix`.

To configure prettier, we need to add another file, `.prettierrc`, with content for example as below:
```
{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 120,
  "tabWidth": 2
}
```

For prettier to work in vscode you need to:
- Install the prettier extension
- Add .vscode folder to your root, and include a `config.json` file:
```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.printWidth": 120
}
```

To test if all has been configured correctly, go to the `hello-world.ts` file, add some empty spaces, and save the file -
it should automatically format and remove the unecessary white spaces.