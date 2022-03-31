const PeopleServices = require("../services/people.services")

class PeopleControllers {
    async getPeople() {
        let people = await PeopleServices.getPeople();
        return people;
    }
    async getPeopleById(id) {
        let peopleById = await PeopleServices.getPeopleById(id);
        return peopleById;
    }
    async addPerson (body){
        let answer = await PeopleServices.addPerson(body);
        return answer;
    }
    async editPerson(id, body) {
        let answer = await PeopleServices.editPerson(id, body);
        return answer;
    }
}

module.exports = new PeopleControllers();