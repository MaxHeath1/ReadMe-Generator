// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub Username?',
    },
    {
      type: 'input',
      name: 'githubEmail',
      message: 'What is your GitHub email?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
    {
        type: 'input',
        name: 'usage',
        message: 'How does a user use your application once it is installed?',
      },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What can people expect to see when they run a test?',
      },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want to have with the READme?',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'None'],
    },
  ];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Created README.md')
  );
}

function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

init();
