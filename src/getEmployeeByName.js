const data = require('../data/zoo_data');

const array = data.employees;

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return array.find((element) =>
      (element.firstName === employeeName || element.lastName === employeeName));
  }

  return {};
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
