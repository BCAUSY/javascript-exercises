const findTheOldest = function(people) {
    const greatestAge = people.map(person => {
        const deathYear = person.yearOfDeath || new Date().getFullYear();
        return deathYear - person.yearOfBirth;
    })
    let maxAge = Math.max(...greatestAge);
    const indexOldest = greatestAge.indexOf(maxAge);
    return people[indexOldest];
}


// Do not edit below this line
module.exports = findTheOldest;