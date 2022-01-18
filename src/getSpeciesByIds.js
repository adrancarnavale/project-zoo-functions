const data = require('../data/zoo_data');

const array = data.species;

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return ids.map((id) =>
    array.find((element) =>
      element.id === id));
}

module.exports = getSpeciesByIds;
