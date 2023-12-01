# Contributing to `eslint-plugin-sustainable`

THANK YOU - for considering to help make this project better!

This is the first open sourced project this poor coder ever created, so any help is welcome <3

In this guide you will get an overview of what kind of contributions you could give and how to suggest changes or improvements.

## Suggesting rules

If you have some ideas for how to help developers avoid the pitfalls of writing code that consumes a lot of the earth's resources - please do!

You can create issues [HERE](https://github.com/Andersclark/eslint-plugin-sustainable/issues).

Suggestions do not need to be limited by new rules, if you see potential improvements to existing rules, their tests or documentation - please submit them as issues or pull requests!

## Contributing code

### Clone the repo

```bash
git clone https://github.com/Andersclark/eslint-plugin-sustainable.git
```

### Install Yeoman

Yeoman is a code generator that can be used to scaffold projects and edits to existing projects. It can be used to set up new ESlint plugins, as well as adding rules to existing plugins.

```bash
npm i -g yo
```

### Install ESlint generator

```bash
npm i -g generator-eslint
```

### Add a rule

After installing Yeoman and the ESlint generator, a new rule can be added through a terminal in the root folder of the project:

```bash
yo eslint:rule
```

The command will add files for the rule, documentation and tests in the corresponding folders.

### Writing the rule

The (AST Explorer)[https://astexplorer.net] can be used to understand how the code is parsed and to debug rules.

Set the AST explorer to use `babel-eslint` and to transform with `ESlint v8` (as of 2023-12-01).

### Submitting your code

Simply throw up a Pull Request and take it from there! PR's require at least one approval before merging.
