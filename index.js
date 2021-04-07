require('dotenv').config();
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    client = require('./middleware/database'),
    api = require('./api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors())

client.query(`CREATE TABLE log (id serial, date varchar(50), endpoint varchar(20), parameter varchar(30));`, (err, res) => {
    if (err) {
        // console.error(err);
        return;
    }
    console.log('Log Table is successfully created');
    // client.end();
});

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Accept, Authorization, secret');
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use("/", api);

app.use((req, res, next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 401);
    res.json({
        status: 'error',
        message: `${error.message}`
    });
});

const PORT = process.env.PORT
app.listen(PORT, ()=> console.info(`Server has started on ${PORT}`))

module.exports = app;