class Employees {
    #salary;
    #isHired;
    static #allEmployees = [];
  
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.#salary = salary;
      this.#isHired = true;
      Employees.#allEmployees.push(this);
      // use the class bc class name is for whole class but this is only for that instance.
    }
  
    getSalary() {
      return this.#salary;
    }
    setSalary(amount) {
      this.#salary = amount;
    }
    getStatus() {
      return this.#isHired;
    }
    setStatus(command) {
      switch (command) {
        case "hire":
          this.#isHired = true;
          break;
  
        case "fire":
          this.#isHired = false;
          break;
  
        default:
          break;
      }
    }
    static getEmployees() {
      return Employees.#allEmployees;
    }
    static getTotalPayroll() {
      let total = 0;
      for (const employee of Employees.#allEmployees) {
        const employeeSalary = employee.getSalary();
        total += employeeSalary;
      }
      return total;
    }
  }
  
  module.exports = {
    Employees,
  };