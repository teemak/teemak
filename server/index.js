const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const { MONGO_URI } = require('./config/keys');

app.use(bodyParser.json());

require('./models/project');
require('./routes/projects')(app);

mongoose
    .connect(MONGO_URI)
    .then(() => console.log('DATABASE CONNECTED'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT: ${PORT}`));
