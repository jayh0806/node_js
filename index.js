const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Include packages needed for this application
//done



// TODO: Create an array of questions for user input
//done

// TODO: Create a function to write README file
//done
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app - done
function init() {}

// Function call to initialize app - done
init();


const filelocation = './README.md'

const questions = [{
    type: 'input',
    message: 'Name of Project',
    name: 'title',
},
{
    type: 'input',
    message: 'Describe Project',
    name: 'description',
},
{
    type: 'input',
    message: 'Installation Steps',
    name: 'installation',
},
{
    type: 'input',
    message: 'Usage requirements',
    name: 'usage',
},
{
    type: 'input',
    message: 'Test Instructions',
    name: 'test',
},
{
    type: 'input',
    message: 'Contributuion guidelines',
    name: 'contribution',
},
{
    type: 'list',
    message: 'Select a License',
    name: 'license',
    choices: ['Apache', 'BSD', 'MIT', 'GNU', 'MPL'],
},
{
    type: 'input',
    message: 'Github Username',
    name: 'github',
},
{
    type: 'input',
    message: 'Contact info',
    name: 'email',
},
    
];

var writeToFile = function (content) {

    content = JSON.parse(content)
}

var readmeGen = '# $:{content.title}
## Table of Content
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Test](#test-instruction)
[Contribution](#contributions)
[License](#license)
[Questions](#questions)
## Description
${content.description}
## Installation
${content.installation}
### Usage
${content.usage}
## Test 
${content.test}
 ##;Contribution
${content.contribution}
##### License
${content.license} covers this application
#### Questions
See my other work at [Github Profile](https://github.com/${content.github})
Email any questions or comments to ${content.email}

fs.writeFile(filelocation, readmeGen, err => {
    if(err) {
        console.error(err);
    }
    else {
        console.log("ReadMe.md created successfully")
    }
});

var asksQuestions = function () {
    inquirer
    .prompt(questions)
    .then((data) =>
    writeToFile(JSON.stringify(data))
    )
}

function init() {
    asksQuestions()
}

init();
