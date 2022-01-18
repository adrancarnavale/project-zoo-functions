const data = require('../data/zoo_data');

const values = data.prices;

function countEntrants(entrants) {
  const visitors = {};
  const children = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);

  visitors.child = children.length;
  visitors.adult = adult.length;
  visitors.senior = senior.length;

  return visitors;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  const qty = Object.values(visitors);

  return ((qty[0] * values.child) + (qty[1] * values.adult) + (qty[2] * values.senior));
}

module.exports = { calculateEntry, countEntrants };
