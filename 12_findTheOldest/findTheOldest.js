const findTheOldest = function (people) {
    return people.reduce((oldestPerson, person) => {
        const age = (!person.yearOfDeath) ? new Date().getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
        if (!oldestPerson || age > oldestPerson.age) {
            return { person, age };
        } else {
            return oldestPerson;
        }
    }, null).person;
};

// Do not edit below this line
module.exports = findTheOldest;
