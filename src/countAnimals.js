const data = require('../data/zoo_data');

const array = data.species;

function countAnimals(object) {
  const objOfAnimals = {};
  if (object === undefined) {
    array.forEach((animal) => {
      objOfAnimals[animal.name] = animal.residents.length;
    });
    return objOfAnimals;
  }
  if (Object.keys(object).length === 1) {
    const result = array.find((animal) => animal.name === Object.values(object)[0]);
    return result.residents.length;
  }
  if (Object.keys(object).length === 2) {
    const result = array.find((animal) => animal.name === Object.values(object)[0]);
    const answer = result.residents.filter((animal) => animal.sex === Object.values(object)[1]);
    return answer.length;
  }
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
