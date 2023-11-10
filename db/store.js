//retrieve and send files to db.json
const fs = require("fs");
const path = require("path")

class Store {
    constructor() { }

    read() {
        const file = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8')
        return file;
    };
    write(note) {
        // then we need to read the db.json
        // so that we access to the array oldNotes
        const oldNotes = JSON.parse(this.read())
        // then we need to add the new note object to the array
        oldNotes.push(note)
        console.log(oldNotes)
        // and save the note
        fs.writeFileSync('db/db.json', JSON.stringify(oldNotes), (err) => {
            if (err) throw err;
        })
    }
}

module.exports = Store;