const data = require('../data/zoo_data');

const array = data.species;

function getAnimalsOlderThan(animal, age) {
  const filteredAnimals = array.find((element) => element.name === animal);
  return filteredAnimals.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
