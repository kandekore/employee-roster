const fs = require("fs");
const inquirer = require("inquirer");
var validator = require("email-validator");

const generateHTML = ({ name, employeeid, email, officenumber }) => ``;

function managerInput() {
  inquirer
    .prompt([
      {
        name: "Name",
        message: "Manager Name?",
        type: "input",
      },
      {
        name: "employeeid",
        message: "Employee ID?",
        type: "input",
      },
      {
        name: "email",
        message: "Email Address?",
        type: "input",
        //   validate: emailValidator,
      },
      {
        name: "officenumber",
        message: "Office Number",
        type: "input",
      },
      {
        name: "menu",
        message: "Add Another Employee",
        type: "list",
        choices: [
          {
            name: "Engineer",
          },
          {
            name: "Intern",
          },
          {
            name: "Finish",
          },
        ],
      },
    ])
    .then(async (answers) => {
      const html = generateHTML(answers);
      fs.writeFile("index.html", html, (err) => {
        err ? console.log(err) : console.log("");
      });

      if (answers.menu === "Finish") {
        finish();
      } else if (answers.menu === "Engineer") {
        engineerInput();
      } else if (answers.menu === "Intern") {
        internInput();
      }
    });
}

managerInput();

function finish() {
  console.log("Thank you for your entries");
}

function engineerInput() {
  inquirer
    .prompt([
      {
        name: "Name",
        message: "Engineer Name?",
        type: "input",
      },
      {
        name: "employeeid",
        message: "Employee ID?",
        type: "input",
      },
      {
        name: "email",
        message: "Email Address?",
        type: "input",
        //   validate: emailValidator,
      },
      {
        name: "officenumber",
        message: "Office Number",
        type: "input",
      },
      {
        name: "menu",
        message: "Add Another Employee",
        type: "list",
        choices: [
          {
            name: "Engineer",
          },
          {
            name: "Intern",
          },
          {
            name: "Finish",
          },
        ],
      },
    ])
    .then(async (answers) => {
      const html = generateHTML(answers);
      fs.writeFile("index.html", html, (err) => {
        err ? console.log(err) : console.log("");
      });

      if (answers.menu === "Finish") {
        finish();
      } else if (answers.menu === "Engineer") {
        engineerInput();
      } else if (answers.menu === "Intern") {
        internInput();
      }
    });
}
function internInput() {
  inquirer
    .prompt([
      {
        name: "Name",
        message: "Intern Name?",
        type: "input",
      },
      {
        name: "employeeid",
        message: "Employee ID?",
        type: "input",
      },
      {
        name: "email",
        message: "Email Address?",
        type: "input",
        //   validate: emailValidator,
      },
      {
        name: "officenumber",
        message: "Office Number",
        type: "input",
      },
      {
        name: "menu",
        message: "Add Another Employee",
        type: "list",
        choices: [
          {
            name: "Engineer",
          },
          {
            name: "Intern",
          },
          {
            name: "Finish",
          },
        ],
      },
    ])
    .then(async (answers) => {
      const html = generateHTML(answers);
      fs.writeFile("index.html", html, (err) => {
        err ? console.log(err) : console.log("");
      });

      if (answers.menu === "Finish") {
        finish();
      } else if (answers.menu === "Engineer") {
        engineerInput();
      } else if (answers.menu === "Intern") {
        internInput();
      }
    });
}
