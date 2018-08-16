const Word = require('../models/word');
const faker = require('faker');
checkAndFillDatabase = (howMuch) => {
    Word.find().then(val => {
        if (val.length === 0) {
            for (let i = 1; i <= howMuch; i++) {
                let word = new Word();
                word.word = faker.fake("{{lorem.word}}");
                word.save();
            }
        }
    })
}
module.exports = checkAndFillDatabase;