//filename stored in const
const readme = "Generated_README_Holder/README.md";

//file system. Create and edit the file
var fs = require("fs");
//take user input
var inquirer = require('inquirer');

//holds the links to the badges in Markdown
const licenseBadges = {
  openSource: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
  publicDomain: "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
  apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  gpl: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
};

inquirer
  .prompt([
    //Title
    { 
      type: "input", 
      message: "What's the Title of your Program?", 
      name: "title"
    },
    //Table of Constents will be created from other user input
    //Description
    {
      type: "input",
      message: "Describe the program",
      name: "description"
    },
    //Installation
    {
      type: "input",
      message: "How is the program installed?",
      name: "installation"
    },
    //Usage
    {
      type: "input",
      message: "How does someone use this program?",
      name: "usage"
    },
    //License
    {
      type: "list",
      message: "What type of License does your program have?", 
      name: "license",
      choices: ["Open Source", "Public Domain", "MIT License", "Apache License", "GPL License"]
    },
    //Tests
    {
      message: "What areas of the program are you still working on?", 
      name: "tests"
    },
    //Contribution Guidelines
    {
      type: "input",
      message: "How can someone contribute to this project?",
      name: "contribute"
    },
    //Questions: GitHub
    {
      message: "What is your user name on GitHub?",
      name: "github"
    },
    //Questions: email
    {
      message: "Enter your email address",
      name: "email"
    }
  ])
  //title, description, installation, usage, license, tests, contribute, github, email
  .then(answer => {
    //create the blank README file that will be appended
    fs.writeFile(readme, "", error => {
      if(error){
        throw error;
      }else{
        var pageContent = "";

        // switch(answer.license){
        //   case "Open Source":
        //     pageContent += licenseBadges.openSource;
        //     break;
        // }

        pageContent += `# ${answer.title}\n\n`;
        pageContent += `## Description \n${answer.description}\n\n`;
        pageContent += `## How To Install \n${answer.installation}\n\n`;
        pageContent += `## Usage`
        
        fs.appendFile(readme, pageContent, () =>{

        });
      }
    });
    // console.log(answers.title);
    // console.log(answers.description);
    // console.log(answers.installation);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });