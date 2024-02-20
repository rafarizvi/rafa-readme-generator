
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['what is the purpose of this application?', 'How does it function?',
    'What result can users expet?', 'Provide the link to the webpage?',
    'Provide instructions on how to use the application.', 'What license does application use?',
    'Provide a list of features for this application.'];

const [purpose, functionality, result, link, usage, license, featureList] = questions;

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
//const readMe = ({purpose}) =>

const writeToFile = ({ purpose, functionality, result, link, usage, license, featureList }) =>

`# rafa-readme-generator

## Description

The goal of this project is to ${purpose}. ${functionality}. ${result}.

## Link to webpage
[Deployed Link](${link})

## Installation

N/A

## Usage

${usage}

![screenshot of password generator webpage](assets/images/webpage-screen-shot.png)

## Credits

N/A

## License

This project uses the ${license}.

## Badges

![Static Badge](https://img.shields.io/badge/JavaScript-green)
![Static Badge](https://img.shields.io/badge/HTML-CSS-blue)


## Features

${featureList}`;


inquirer.prompt([
    {
        type: 'input',
        name: 'purpose',
        message: purpose,
    },

    {
        type: 'input',
        name: 'functionality',
        message: functionality,
    },

    {
        type: 'input',
        name: 'result',
        message: result,
    },

    {
        type: 'input',
        name: 'link',
        message: link,
    },

    {
        type: 'input',
        name: 'usage',
        message: usage,
    },

    {
        type: 'input',
        name: 'license',
        message: license,
    },

    {
        type: 'input',
        name: 'featureList',
        message: featureList,
    }

])
    .then((answers) => {

        const readMeContent = writeToFile(answers);

        fs.writeFile('newReadme.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });

// // TODO: Create a function to initialize app
// function init() {
//     writeToFile();
// }


// init();