const data = require('../data/zoo_data');

const { species } = data;

const opt = (specie, options) => {
  const { sorted, sex } = options;
  const namesOfAnimals = {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    [specie.name]: specie.residents.map((resident) => resident.name),
  };

  if (sex) {
    const filtered = specie.residents.filter((resident) => resident.sex === sex);
    namesOfAnimals[specie.name] = filtered.map((resident) => resident.name);
  }

  if (sorted) {
    namesOfAnimals[specie.name].sort();
  }

  return namesOfAnimals;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    const result = {
      NE: species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
      NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
      SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
      SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
    };
    return result;
  }
  const newResults = {
    NE: species.filter((specie) => specie.location === 'NE').map((specie) => opt(specie, options)),
    NW: species.filter((specie) => specie.location === 'NW').map((specie) => opt(specie, options)),
    SE: species.filter((specie) => specie.location === 'SE').map((specie) => opt(specie, options)),
    SW: species.filter((specie) => specie.location === 'SW').map((specie) => opt(specie, options)),
  };
  return newResults;
}

module.exports = getAnimalMap;
