const { Client } = require('pg');

const client = new Client({
    user: process.env.USER_POSTGRES,
    host: process.env.HOST_POSTGRES,
    database: process.env.DATABASE_POSTGRES,
    password: process.env.PASSWORD_POSTGRES,
    port: process.env.PORT_POSTGRES,
});

client.connect();

module.exports = client