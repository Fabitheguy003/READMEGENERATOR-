// TODO: Include packages needed for this application
const fs = require{"fs"};
const requirer = require{'inquirer'};


// TODO: Create an array of questions for user input
const questions = [];

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
