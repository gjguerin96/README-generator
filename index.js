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
        message: 'Enter licensing information.',
        choices: ['a','b','c']
    }
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
    // console.log(answers.title)
    // console.log(answers.description)
    // console.log(answers.installation)
    // console.log(answers.usage)
    // console.log(answers.contribution)
    // console.log(answers.test)
    // console.log(answers.license)
    const content = `# ${answers.title}

## Description
${answers.description}

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
${answers.license}

## Badges


## Tests
${answers.tests}

## Questions
If you have any questions, reach out to me at ${answers.email} or find me on [github](github.com/${answers.github}).`
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
