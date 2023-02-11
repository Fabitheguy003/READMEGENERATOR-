// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'MIT') {
  return 'License: MIT';
  } else if (license === 'GPL') {
  return 'License: GPL v3';
  } else if (license === 'MPL') {
  return 'License: MPL 2.0';
  } else {
  return '';
  }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
    return `This project is licensed under ${license}, for more information please visit`;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let link;
  if (license === 'MIT') {
  return 'MIT License';
  } else if (license === 'GPL') {
  return 'GPL v3 License';
  } else if (license === 'MPL') {
  return 'MPL 2.0 License';
    } else {
      link = "";
    }
    return link;
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Description:
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
## Contribution
${data.contribution}
## Test Instructions
${data.tests}
## Questions? 
Please feel free to contact me if you need any further information:
* Email: ${data.email}
* Github Profile: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;