const PeopleServices = require("../services/people.services")

class PeopleControllers {
    async getPeople() {
        let people = await PeopleServices.getPeople();
        return people;
    }
    async getPeopleById(id) {
        let peopleById = await PeopleServices.getPeopleById(id)
        return peopleById;
    }
}

module.exports = new PeopleControllers();