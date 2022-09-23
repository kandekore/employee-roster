const Employee = require("./Employee");

class Intern extends Employee {
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

module.exports = Intern;
