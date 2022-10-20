// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What would you like your title to be?'
  },

  {
    type: 'input',
    name: 'description',
    message: 'What is the projects description?',
  },

  {
    type: 'list',
    name: 'TOC',
    message: 'Would you like a table of contents?',
    choices: [
      'Table of Contents',
      'None',
    ]
  },

  {
    type: 'list',
    name: 'license',
    message: 'Choose your license',
    choices: [
      'MIT',
      'Apache-2.0',
      'BSD-3-Clause',
      'None',
    ]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created a README file')
  );
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
      console.log(res);
      writeToFile('readme.md', generateMarkdown(res));

    })
}

// Function call to initialize app
init();
