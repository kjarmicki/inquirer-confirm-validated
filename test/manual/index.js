const inquirer = require('inquirer');
const confirmValidated = require('../../index');

inquirer.registerPrompt('confirm-validated', confirmValidated);

inquirer.prompt({
    type: 'confirm-validated',
    name: 'test',
    message: 'Does it work?',
    validate(input) {
        if(input === false) {
            return 'Hell no';
        }
        return true;
    }
});
