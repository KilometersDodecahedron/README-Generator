//filename stored in const
const readme = "Generated_README_Holder/README.md";

//file system. Create and edit the file
var fs = require("fs");
//take user input
var inquirer = require('inquirer');

//this is long and won't change, so it's being stored in a const
const tableOfContent = "## Table of Contents \n- [Description](#description) \n- [Installation](#installation) \n- [Usage](#usage) \n- [License](#license) \n- [Tests](#tests) \n- [Contributions](#contributions) \n- [Questions](#questions)\n\n";

function createGitHubLink(userName){
  return `https://github.com/${userName}`;
}

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

        //adds badge to page
        switch(answer.license){
          case "Open Source":
            pageContent += licenseBadges.openSource;
            break;
          case "Public Domain":
            pageContent += licenseBadges.publicDomain;
            break;
          case "MIT License":
            pageContent += licenseBadges.mit;
            break;
          case "Apache License":
            pageContent += licenseBadges.apache;
            break;
          case "GPL License":
            pageContent += licenseBadges.gpl;
            break;
        }

        //adds content to page
        pageContent += `\n# ${answer.title}\n\n`;
        pageContent += tableOfContent + "\n\n";
        pageContent += `## Description \n${answer.description}\n\n`;
        pageContent += `## Installation \n${answer.installation}\n\n`;
        pageContent += `## Usage \n${answer.usage}\n\n`;
        pageContent += `## License \n${answer.license}\n\n`;
        pageContent += `## Tests \n${answer.tests}\n\n`;
        pageContent += `## Contributions \n${answer.contribute}\n\n`;
        pageContent += `## Questions \nIf you have any questions, you can contact me [Through GitHub](${createGitHubLink(answer.github)})\n`;
        pageContent += `## Or through my email: ${answer.email}`;
        
        fs.appendFile(readme, pageContent, err =>{ 
          err ? console.log(err) : console.log("File Generated");
        });
      }
    });
  });