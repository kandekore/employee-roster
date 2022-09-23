const Employee = require("./Employee");

class Manager extends Employee {
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
