// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'github',
        message: 'Enter github username.'
    },
    {
        type:'input',
        name: 'email',
        message: 'Enter email address.'
    },
    {
        type:'input',
        name: 'title',
        message: 'Enter project title.'
    },
    {
        type:'input',
        name: 'description',
        message: 'Enter project description.'
    },
    {
        type:'input',
        name: 'installation',
        message: 'Enter installation instructions.'
    },
    {
        type:'input',
        name: 'usage',
        message: 'Enter usage instructions.'
    },
    {
        type:'input',
        name: 'contribution',
        message: 'Enter contribution information.'
    },
    {
        type:'input',
        name: 'test',
        message: 'Enter testing information.'
    },
    {
        type:'list',
        name: 'license',
        message: 'Choose licensing information.',
        choices: ['MIT','GNU General Public','Mozilla Public','Apache']
    }
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
    function badge() {
        if (answers.license === 'MIT') {
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
        }
        else if (answers.license === 'GNU General Public') {
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
        }
        else if (answers.license === 'Mozilla Public') {
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
        }
        else if (answers.license === 'Apache') {
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
        }
    }
    
    const content = `# ${answers.title}

## Description
${answers.description}

` + badge() + `

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## License
This application is covered under the ${answers.license} license. 

## Tests
${answers.test}

## Questions
If you have any questions, reach out to me at ${answers.email} or find me on [github](https://www.github.com/${answers.github}).`
    // console.log(content)
    fs.writeFile('README.md',content, (error) =>{
        if(error) throw error;
        console.log("Created README!")
    })
})

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
