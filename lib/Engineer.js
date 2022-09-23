const Employee = require("./Employee");

class Engineer extends Employee {
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

module.exports = Engineer;
