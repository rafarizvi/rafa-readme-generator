// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  return `![Static Badge](https://img.shields.io/badge/License-${licenseBadge}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function below checks the license choice and returns the corresponding link.
function renderLicenseLink(licenseName) {

  if (licenseName === 'MIT') {
    return '[View more info.](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)';
  }

  else if (licenseName === 'Apache(2.0)') {
    return '[View more info.](https://github.com/apache/.github/blob/main/LICENSE)';
  }

  else if (licenseName === 'GPL(v3)') {
    return '[View more info.](https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt)';
  }

  else if (licenseName === 'MozillaPublic(2.0)') {
    return '[View more info.](https://github.com/mozilla/openbadges-bakery/blob/master/LICENSE-MPL-2.0)';
  }

  else if (licenseName === 'BSD(3Clause)') {
    return '[View more info.](https://github.com/teamdigitale/licenses/blob/master/BSD-3-Clause)';
  }

  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function below checks the license choice and renders text to the license section.
function renderLicenseSection(licenseName) {
  if (licenseName === 'N/A') {
    return 'N/A';
  } else {
    return `This project uses the ${licenseName} License.`
  }
}

// TODO: Create a function to generate markdown for README
// function below takes parameters from inquirer and creates a readme file.
const generateMarkdown = ({appName, description, installation, usage, license, contributing, tests, github, email}) =>

`# ${appName}

${renderLicenseBadge(license)}

## <a id="descr"></a> Description

${description}

## Table of Contents
* [Description](#descr)
* [Installation](#install)
* [Usage](#usg)
* [License](#licen)
* [Contributing ](#contr)
* [Tests](#tests)
* [Questions](#qst)

## <a id="install"></a> Installation

${installation}

## <a id="usg"></a> Usage

${usage}

## <a id="licen"></a> License

[!NOTE] 
${renderLicenseSection(license)}
${renderLicenseLink(license)}

## <a id="contr"></a> Contributing 
${contributing}

## <a id="tests"></a> Tests
${tests}

## <a id="qst"></a> Questions
[${github}](https://github.com/${github})

${email} `;

// exports generateMarkdown function to index.js file.
module.exports = { generateMarkdown };
