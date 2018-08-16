const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Score = new Schema({
    nickname:{
        type:String,
        required: true,
    },
    score:{
        type: Number,
        required: true
    }
});

module.exports = score = mongoose.model('score', Score);