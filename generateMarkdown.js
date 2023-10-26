// generateMarkdown.js

function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'GNU GPLv3':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache License 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      default:
        return '';
    }
  }
  
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'GNU GPLv3':
        return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache License 2.0':
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
      default:
        return '';
    }
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  // TODO: You'll probably want to prompt the user for installation steps or provide default ones
  
  ## Usage
  
  // TODO: You'll probably want to prompt the user for usage instructions or provide default ones
  
  ## License
  ${data.license !== 'None' ? `This project is licensed under the ${renderLicenseLink(data.license)}.` : `This project doesn't have a license.`}
  
  ## Contributing
  
  // TODO: You'll probably want to prompt the user for contribution guidelines or provide default ones
  
  ## Tests
  
  // TODO: You'll probably want to prompt the user for testing instructions or provide default ones
  
  ## Questions
  
  For any questions, please reach out to [${data.githubUsername}](https://github.com/${data.githubUsername}) or email at ${data.githubEmail}.
  `;
  }
  
  module.exports = generateMarkdown;
  