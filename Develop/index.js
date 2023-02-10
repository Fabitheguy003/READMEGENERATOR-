// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },

    {
        type: "input",
        name: "description",
        message: "Write a brief description of what you are working on: "
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
        name: "contributing",
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
        Options: [
            "Apache",
            "Unlicense",
            "Boost",
            "MIT",
            "Mozilla",
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
    },
]    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
if (err) throw err;
console.log('README file created!');
});
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
writeToFile("README.md", answers);
});
}
        
// Function call to initialize app
init();
