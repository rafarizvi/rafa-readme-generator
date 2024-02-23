
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const inputs = ['Enter project title:', 'Describe your project:',
    'Provide installation instructions (if any):', 'Provide usage information:',
    'Select a license for your application:', 'What are the contribution guidelines:',
    'What are the test instructions:', 'Enter your GitHub user name:', 'Enter your email address:'];

const [appName, description, installation, usage, license, contributing, tests, github, email] = inputs;

// TODO: Create a function to write README file
const writeToFile = ({ appName, description, installation, usage, license, contributing, tests, github, email }) =>

    `# ${appName}

![Static Badge](https://img.shields.io/badge/License-${license}-blue)

## <a id="descr"></a> Description

${description}

## Table of Contents
* [Description](#descr)
* [Installation](#install)
* [Usage](#usg)
* [License](#licen)
* [Contributing ](#contr)
* [Tests](#tests)
* [Questions](#qst)

## <a id="install"></a> Installation

${installation}

## <a id="usg"></a> Usage

${usage}

## <a id="licen"></a> License

[!NOTE] 
This project uses the ${license} License.

## <a id="contr"></a> Contributing 
${contributing}

## <a id="tests"></a> Tests
${tests}

## <a id="qst"></a> Questions
[${github}](https://github.com/${github})

${email} `


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'appName',
            message: appName,
        },

        {
            type: 'input',
            name: 'description',
            message: description,
        },

        {
            type: 'input',
            name: 'installation',
            message: installation,
        },

        {
            type: 'input',
            name: 'usage',
            message: usage,
        },

        {
            type: 'list',
            name: 'license',
            message: license,
            choices: ['MIT', 'Apache(2.0)', 'GPL(v3)', 'MozillaPublic(2.0)', 'BSD(3Clause)'],
        },

        {
            type: 'input',
            name: 'contributing',
            message: contributing,
        },

        {
            type: 'input',
            name: 'tests',
            message: tests,
        },

        {
            type: 'input',
            name: 'github',
            message: github,
        },

        {
            type: 'input',
            name: 'email',
            message: email,
        }

    ])
        .then((answers) => {

            const readMeContent = writeToFile(answers);

            fs.writeFile('newReadme2.md', readMeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });
}

init();
