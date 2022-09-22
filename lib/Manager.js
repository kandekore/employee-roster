const Employee = require("./Employee");

class Manager extends Employee {
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }

  constructor(name, id, email, officeNumber, role) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = this.getRole();
  }

  // getOfficeNumber() {
  //   return this.officeNumber;
  // }
  // getRole(role) {
  //   return "Manager";
  // }
}

module.exports = Manager;
