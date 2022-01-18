const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getFirstSpecie = (ident) => {
  const responsabilities = employees.find(
    (employee) => employee.id === ident,
  );

  return responsabilities.responsibleFor[0];
};

const findOlderAnimal = (specie) => {
  const firstSpecie = species.find(
    (animal) => animal.id === specie,
  );
  const elementsOfFirstSpecie = firstSpecie.residents;
  const answer = elementsOfFirstSpecie.map(
    (element) => element.age,
  ).reduce(
    (acc, curr) => ((curr > acc) ? curr : acc),
  );
  const result = elementsOfFirstSpecie.find(
    (element) => element.age === answer,
  );
  return [result.name, result.sex, result.age];
};

function getOldestFromFirstSpecies(id) {
  const firstSpecie = getFirstSpecie(id);
  const oldest = findOlderAnimal(firstSpecie);
  return oldest;
}

module.exports = getOldestFromFirstSpecies;
