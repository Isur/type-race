const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Word = new Schema({
    word:{
        type:String,
        required: true,
    }
});

module.exports = word = mongoose.model('word', Word);