
// TODO: Include packages needed for this application
// markdown module generates the readme file.
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const inputs = ['Enter project title:', 'Describe your project:',
    'Provide installation instructions (if any):', 'Provide usage information:',
    'Select a license for your application:', 'What are the contribution guidelines:',
    'What are the test instructions:', 'Enter your GitHub user name:', 'Enter your email address:',
    'Enter a file name:'];

const [appName, description, installation, usage, license, contributing, tests, github, email, fileName] = inputs;

// TODO: Create a function to write README file.
// Inquirer is used to prompt the user for questions.
function writeToFile() {
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
            choices: ['MIT', 'Apache(2.0)', 'GPL(v3)', 'MozillaPublic(2.0)', 'BSD(3Clause)', 'N/A'],
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
        },

        {
            type: 'input',
            name: 'fileName',
            message: fileName,
        }
    
    ])
        .then((answers) => {
            const readMeContent = markdown.generateMarkdown(answers);
    
            fs.writeFile(`${answers.fileName}.md`, readMeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

init();
