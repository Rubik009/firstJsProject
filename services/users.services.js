const fs = require("fs");

class UsersServices {
    getUsers() {
        return new Promise((res, rej) => {
            fs.readFile("user.json", "utf8", (err, data) => {
                if (err) throw err;
                res(JSON.parse(data))
            })
        })
    }
    addUser(body){
        return new Promise((res, rej) => {
            fs.readFile('user.json', (err, data) => {
                if (err) throw err;
                let users = JSON.parse(data);
                users.push(body);

                fs.writeFile("user.json", JSON.stringify(users), (err) => {
                    if (err) throw err;
                });

                res(body);
            });
        });
    }
    getUser(email){
        return new Promise((res, rej) => {
            fs.readFile('user.json', (err, data) => {
                if (err) throw err; 
                let users = JSON.parse(data);
                const userSearchResult = users.find((item) => {
                    if (item.email === email){
                        return item;
                    }
                });
                res(userSearchResult);
            });
        });
    }
}

module.exports = new UsersServices();