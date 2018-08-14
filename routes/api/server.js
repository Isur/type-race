const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({connection: true});
})

router.get('/getWord', (req,res) => {
    res.json({word: "slowo"});
})

router.get('/getWords', (req,res) => {
    const words = ['slowo', 'to', 'jest'];
    res.json({words: words});
})

router.post('/result', (req,res) => {
    res.json({success: true});
})
module.exports = router;