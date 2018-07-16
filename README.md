# Inquirer Confirm-with-Validation Prompt

A plugin for [Inquirer](https://github.com/SBoudrias/Inquirer.js), adding validation to the confirm prompt.

Basically use it as if regular confirm had `validate` implemented.

# Installation

```
npm install inquirer-confirm-validated
```

# Example usage

```js
inquirer.registerPrompt('confirm-validated', require('inquirer-confirm-validated'));

inquirer.prompt({
  type: 'confirm-validated',
  validate(input, answers) {
    if (input === true && answers.openThePodBayDoors === true) {
      return "I'm sorry Dave, I'm afraid I can't do that";
    }
    return true;
  },
  ...
});
```
