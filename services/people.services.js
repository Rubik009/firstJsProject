const fs = require("fs")

class PeopleServices {
    getPeople() {
        return new Promise((res, rej) => {
            fs.readFile("people.json", "utf8", (err, data) => {
                if (err) throw err;
                res(JSON.parse(data))
            })
        })
    }
}

module.exports = new PeopleServices();