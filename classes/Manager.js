const { Employees } = require("./Employees.js");

// const myObj = new Employees("name", "position", 10);
// console.log(myObj);

class Manager extends Employees {
  #employeesManaged;
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
    this.#employeesManaged = [];
  }
  getEmployeesManaged() {
    return this.#employeesManaged;
  }
  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }
}

// const jenna = new Manager(
//   "Jenna",
//   "Head of Engineers",
//   120000,
//   "Software Engineering",
//   10
// );

module.exports = {
  Manager,
};