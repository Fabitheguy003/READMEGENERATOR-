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


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

module.exports = generateMarkdown;