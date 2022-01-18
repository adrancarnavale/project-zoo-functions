const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getSpeciesUnderControl = (array) => {
  const arr = [];
  for (let i = 0; i < array.length; i += 1) {
    const answer = species.find(
      (specie) => specie.id === array[i],
    );
    arr.push(answer.name);
  }
  return arr;
};

const getSpeciesLocation = (array) => {
  const arr = [];
  for (let i = 0; i < array.length; i += 1) {
    const answer = species.find(
      (specie) => specie.name === array[i],
    );
    arr.push(answer.location);
  }
  return arr;
};

const getPeopleByName = (name) => {
  const answer = employees.find(
    (employee) => employee.firstName === name || employee.lastName === name
    || employee.id === name,
  );
  if (!answer) {
    throw new Error('Informações inválidas');
  }
  const ident = answer.id;
  const fullName = `${answer.firstName} ${answer.lastName}`;
  const animals = getSpeciesUnderControl(answer.responsibleFor);
  const locations = getSpeciesLocation(animals);
  return {
    id: ident,
    fullName,
    species: animals,
    locations,
  };
};

const returnAll = () => {
  const arr = [];
  const all = employees.map(
    (employee) => employee.id,
  );
  for (let i = 0; i < all.length; i += 1) {
    const result = getPeopleByName(all[i]);
    arr.push(result);
  }
  return arr;
};

function getEmployeesCoverage(object) {
  if (!object) {
    return returnAll();
  }
  const { name, id } = object;
  if (name) {
    return getPeopleByName(name);
  }
  if (id) {
    return getPeopleByName(id);
  }
}

module.exports = getEmployeesCoverage;
