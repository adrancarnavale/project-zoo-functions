const data = require('../data/zoo_data');

const array = data.employees;

function isManager(id) {
  return array.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (manager === true) {
    const answer = array.filter((element) => element.managers.includes(managerId));
    return answer.map((element) => `${element.firstName} ${element.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
