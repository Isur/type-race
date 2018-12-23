const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fillDatabase = require('./config/db');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

// SERVER

const db = require('./config/keys').mongoURL;

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB Connected ", db))
  .then(() => {
    if(process.env.NODE_ENV === 'test')
            fillDatabase(400);
            else
            fillDatabase(10000);
    })
    .catch(err => console.log(err));

    // routes
const api = require('./routes/api/server').router;

app.use('/server', api);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
