// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  const badgeColors = {
    'MIT': 'yellow',
    'Apache-2.0': 'orange',
    'GPL-3.0': 'green',
    'ISC': 'blue',
  };

  const color = badgeColors[license] || 'lightgrey'; 

  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-${color})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  return `[License](./LISENSE)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''; 
  }
  
  const licenseTexts = {
    'MIT': 'MIT License',
    'Apache-2.0': 'Apache License 2.0',
    'GPL-3.0': 'GPL-3.0 License',
    'ISC': 'ISC License',
  };

  const licenseText = licenseTexts[license] || 'No license text available.';

  return `## License

${licenseText}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, contact ${data.email}.
GitHub: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;

