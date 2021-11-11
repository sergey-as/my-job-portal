const express = require('express');
const mongoose = require('mongoose');
require('dotenv')
    .config();

const {config} = require('./configs');
const {applicantRouter, positionRouter} = require("./routes");

const app = express();

mongoose.connect(config.MONGO_CONNECT_URL)
    .then(() => {
        // eslint-disable-next-line no-console
        console.log('Mongo connected successfully');
    });

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/applicants', applicantRouter);
app.use('/positions', positionRouter);

app.listen(config.LISTEN_CONNECTION_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`app listen ${config.LISTEN_CONNECTION_PORT}`);
});
