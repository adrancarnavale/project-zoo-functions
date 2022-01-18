const data = require('../data/zoo_data');

const { species, hours } = data;
const daysOfTheWeek = Object.keys(hours);
const animals = species.map((animal) => animal.name);

const getAnimalsSchedule = (scheduleTarget) => {
  const agenda = species.filter(
    (specie) => specie.availability.includes(scheduleTarget),
  ).map(
    (specie) => specie.name,
  );
  return agenda;
};

const getDaySchedule = (scheduleTarget) => {
  const obj = {};
  const secondObj = {};
  const agenda = `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`;
  const animalsInExhibition = getAnimalsSchedule(scheduleTarget);
  obj[scheduleTarget] = secondObj;
  if (scheduleTarget === 'Monday') {
    secondObj.officeHour = 'CLOSED';
    secondObj.exhibition = 'The zoo will be closed!';
    return obj;
  }
  secondObj.officeHour = agenda;
  secondObj.exhibition = animalsInExhibition;
  return obj;
};

const animalsAvailable = (scheduleTarget) => {
  const agenda = species.find((specie) => specie.name === scheduleTarget);
  return agenda.availability;
};

const returnAll = () => {
  const obj = {};
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  for (let i = 0; i < days.length; i += 1) {
    const schedule = getDaySchedule(days[i]);
    Object.assign(obj, schedule);
  }
  return obj;
};

function getSchedule(scheduleTarget) {
  if (daysOfTheWeek.includes(scheduleTarget)) {
    const answer = getDaySchedule(scheduleTarget);
    return answer;
  }
  if (animals.includes(scheduleTarget)) {
    const answer = animalsAvailable(scheduleTarget);
    return answer;
  }
  const answer = returnAll();
  return answer;
}

module.exports = getSchedule;
