var inquirer = require('inquirer');
inquirer
  .prompt([
    { 
      type: "input", 
      message: "What's the Title of your Program?", 
      name: "title"
    },
    {
      type: "input",
      message: "Describe the program",
      name: "description"
    },
    //Table of Constents will be created from other user input
    {
      type: "input",
      message: "How is the program installed?",
      name: "installation"
    }
  ])
  .then(answers => {
    console.log(answers.title);
    console.log(answers.description);
    console.log(answers.installation);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });