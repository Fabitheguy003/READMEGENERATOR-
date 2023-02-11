// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },

    {
      type: "input",
      name: "description",
      message: "Write a brief description of what you are working on: ",
    },
    
    {
      type: "input",
      name: "installation",
      message: "Detail instructions for installation if any: ",
    },
    
    {
      type: "input",
      name: "usage",
      message: "For what purpose is this project being used?"
    }, 
    
    {
      type: "input",
      name: "contribution",
      message: "Which contributors are involved in this project?"
    },
    
    {
      type: "input",
      name: "tests",
      message: "Does the project include a test?"
    },
    
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "MPL",
        "MIT",
        "GPL",
      ]
    },
    
    {
      type: "input",
      name: "questions",
      message: "How do I resolve a problem? "
    },
    
    {
      type: "input",
      name: "username",
      message: "If you have a GitHub username, please enter it: "
    },
    
    {
      type: "input",
      name: "email",
      message: "Please enter your email: "
    }];

 //function to write readme file
function writeToFile(fileName,  data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README file created!');
    });
}

// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions).then((answers) => {
    writeToFile("./dist/READMEple.md", answers);
    console.log(answers);
  });
}

//Create a function to initialize app
function init() {
     
  inquirer.prompt(questions).then((data) => {
 
    writeToFile("README.md", generateMarkdown(data));
  });
}
// Function call to initialize app
init();

    
    