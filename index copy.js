const fs = require("fs");
const inquirer = require("inquirer");
var validator = require("email-validator");

const generateHTML = ({ name, employeeid, email, officenumber }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="assets/style.css" />
  </head>
  <body>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Navbar</span>
      </div>
    </nav>
    <div class="container-md">
      <div class="card" style="width: 18rem">
        <div class="card-header">Manager</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${name}</li>
          <li class="list-group-item">Employee ID: ${employeeid}</li>
          <li class="list-group-item">Email Address: ${email}</li>
          <li class="list-group-item">Office Number: ${officenumber} </li>
        </ul>
      </div>
    </div>
    <div id="team">
      
 
`;

const footer = ({}) => ` </div>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
    crossorigin="anonymous"
  ></script>
</body>
</html>>`;

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
  fs.appendFile("index.html", footer, (err) => {
    err ? console.log(err) : console.log("");
  });
}

// function htmlengineer(name, employeeid, ) {

// //   var d1 = document.getElementById('one');
// // d1.insertAdjacentHTML('beforeend', '    <div class="card" style="width: 18rem"><div class="card-header">Manager</div><ul class="list-group list-group-flush">  <li class="list-group-item">Name:' + ${name} +'</li>  <li class="list-group-item">Employee ID: ${employeeid}</li>  <li class="list-group-item">Email Address: ${email}</li> <li class="list-group-item">Office Number: ${officenumber} </li></ul></div>');

//   var htm = "";
//   htm += "<div class='card' style='width: 18rem'><div class='card-header'>Engineer</div><ul class='list-group list-group-flush'><li class='list-group-item'>Name: "+ ${name} +"</li><li class='list-group-item'>Employee ID: "+${employeeid} + "</li><li class='list-group-item'>Email Address: " + ${email} + "</li><li class='list-group-item'>Office Number: " + ${officenumber} +"</li></ul></div>"
// }

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

      appendEntry();

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
      fs.appendFile("README.md", testsection, (err) => {
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
