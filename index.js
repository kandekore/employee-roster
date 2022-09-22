const fs = require("fs");
const inquirer = require("inquirer");
var validator = require("email-validator");
const Manager = require("./lib/Manager");
const generateHTML = ({ name, employeeid, email, officenumber, role }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href=https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css
      rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="assets/style.css" />
  </head>
  <body>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Employee Roster</span>
      </div>
    </nav>
    <div class="flex-container">
      <div class="card" style="width: 18rem">
        <div class="card-header manager">${Manager.name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${name}</li>
          <li class="list-group-item">Employee ID: ${employeeid}</li>
          <li class="list-group-item">Email Address:<a href=mailto:${email}>${email}</a></li>
          <li class="list-group-item">Office Number: ${officenumber} </li>
        </ul>
      </div>
    
    
      

`;
const footer = () => ` </div>
  <script src=https://code.jquery.com/jquery-3.5.1.min.js></script>
  <script
    src=https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js
    integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
    crossorigin="anonymous"
  ></script>
</body>
</html>>`;

const engineer = ({
  nameeng,
  employeeideng,
  emaileng,
  officenumbereng,
}) => `  <div class="card" style="width: 18rem">
<div class="card-header engineer">Engineer</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Name: ${nameeng}</li>
  <li class="list-group-item">Employee ID: ${employeeideng}</li>
  <li class="list-group-item">Email Address:<a href=mailto:${emaileng}>${emaileng}</a></li>
  <li class="list-group-item">Office Number: ${officenumbereng} </li>
</ul>
</div>`;

const intern = ({
  nameint,
  employeeidint,
  emailint,
  officenumberint,
  getRole,
}) => `  <div class="card" style="width: 18rem">
<div class="card-header intern">Intern</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Name: ${getRole}</li>
  <li class="list-group-item">Employee ID: ${employeeidint}</li>
  <li class="list-group-item">Email Address:<a href=mailto:${emailint}>${emailint}</a></li>
  <li class="list-group-item">Office Number: ${officenumberint} </li>
</ul>
</div>`;

function managerInput() {
  inquirer
    .prompt([
      {
        name: "name",
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
      const newteamMember = new Manager(
        answers.name,
        answers.employeeid,
        answers.email,
        answers.officenumber
        // Manager.role
      );
      console.log(newteamMember);
      console.log(newteamMember.role);
      console.log(newteamMember.getRole());

      const html = generateHTML(answers, Manager);
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

function engineerInput() {
  inquirer
    .prompt([
      {
        name: "nameeng",
        message: "Engineer Name?",
        type: "input",
      },
      {
        name: "employeeideng",
        message: "Employee ID?",
        type: "input",
      },
      {
        name: "emaileng",
        message: "Email Address?",
        type: "input",
        //   validate: emailValidator,
      },
      {
        name: "officenumbereng",
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
    .then(async (answerseng) => {
      const htmleng = engineer(answerseng);

      fs.appendFile("index.html", htmleng, (err) => {
        err ? console.log(err) : console.log("");
      });

      if (answerseng.menu === "Finish") {
        finish();
      } else if (answerseng.menu === "Engineer") {
        engineerInput();
      } else if (answerseng.menu === "Intern") {
        internInput();
      }
    });
}
function internInput() {
  inquirer
    .prompt([
      {
        name: "nameint",
        message: "Intern Name?",
        type: "input",
      },
      {
        name: "employeeidint",
        message: "Employee ID?",
        type: "input",
      },
      {
        name: "emailint",
        message: "Email Address?",
        type: "input",
        //   validate: emailValidator,
      },
      {
        name: "officenumberint",
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
    .then(async (answersint) => {
      const htmlint = intern(answersint);
      fs.appendFile("index.html", htmlint, (err) => {
        err ? console.log(err) : console.log("");
      });

      if (answersint.menu === "Finish") {
        finish();
      } else if (answersint.menu === "Engineer") {
        engineerInput();
      } else if (answersint.menu === "Intern") {
        internInput();
      }
    });
}

function finish() {
  console.log("Thank you for your entries");
  const end = footer();
  fs.appendFile("index.html", end, (err) => {
    err ? console.log(err) : console.log("");
  });
}
