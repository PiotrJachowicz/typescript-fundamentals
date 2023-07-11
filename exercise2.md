We want to move on our previous example by making the `typescript` compilation more automated.
The `hello-world.ts` has now been moved to an `src` folder to better reflect a convention to usually hold the
code in `src` and config in the root of the repo. We've also added a basic .gitignore to avoid pushing the packages
and build artifacts to the repo.

First, we want to set up npm:
- Run `npm init` and go through the options - you can select all as default for this exercise
- Install typescript locally - `npm i typescript --save-dev`
- Add scripts to the `scripts` section in `package.json`:
  - `"build": "tsc"`
  - `"start": "node dist/hello-world.js"`
- Add tsconfig.json in the root of your project with the following contents:
```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "noImplicitAny": true,
    "sourceMap": true,
    "rootDir": "./src",
    "outDir": "./dist",
  },
  "include": ["src"],
  "strict": true,
}
```

To test if all has been configured correctly, run `npm build` and `npm start` - you should see the familiar "Hello World!" message