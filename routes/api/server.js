const express = require('express');
const Score = require('../../models/score');
const Word = require('../../models/word');
const router = express.Router();

getQuantityOfWords = async () => {
    return Word.countDocuments().then(count => count);
}

getRandomWord = async (quantity) => {
    const count = await getQuantityOfWords();
    var words = [];
    for(let i = 0; i < quantity; i++){
        let random = Math.floor(Math.random() * count);
        const word = await Word.findOne()
            .skip(random)
            .then(word => word)
            .catch(err => err);
        words.push(word);
    }
    if(quantity > 1)
        return words.map(word => word.word);
    else
        return words[0].word;
}

router.get('/', (req, res) => {
    res.json({connection: true});
})

router.get('/getWord', (req,res) => {
    getRandomWord(1).then(word => res.json(word));
})

router.get('/getWords', (req,res) => {
    getRandomWord(5).then(words => res.json(words));
})

router.post('/result', (req,res) => {
    var score = new Score();
    score.nickname = req.body.nickname;
    score.score = req.body.score;
    score.save()
        .then(response => res.json({success: true, info: response}))
        .catch(err => res.json({success: false, info: err}));
})

router.get('/top10', (req,res) => {
    Score.find()
        .sort({score: 1})
        .limit(10)
        .then(scores => {
            res.json(scores);
        })
        .catch(err => res.json(err));
});

router.delete('/deleteAllWords',(req,res) => {
    Word.remove({}, () => res.json({success: true}));
})
module.exports = {router, getQuantityOfWords, getRandomWord};