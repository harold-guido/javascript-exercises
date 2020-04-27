const getAge = function (person) {
  const currYear = new Date().getFullYear();

  return person.yearOfBirth === undefined
    ? 0
    : person.yearOfDeath === undefined
    ? currYear - person.yearOfBirth
    : person.yearOfDeath - person.yearOfBirth;
};

const maxAgeCallback = function (person1, person2) {
  return getAge(person1) > getAge(person2) ? person1 : person2;
};

let findTheOldest = function (people) {
  const oldest = people.reduce(maxAgeCallback, {});
  return oldest;
};

module.exports = findTheOldest;
