function People(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}
let people1 = new People(1, 'Roman', 25)
let people2 = new People(2, 'Alesya', 23)
let people = []
people.push(people1, people2)

class PeopleControllers {
    getPeople() {
        return people;
    }
    getPeopleById(id) {
        const peopleById = people.find(item => item.id == id)
        return peopleById;
    }
}

module.exports = new PeopleControllers();