const {Pool} = require('pg');

const pool = new Pool({
    host:process.env.HOSTDB,
    user: process.env.USERDB,
    password:process.env.PASSWORDDB,
    database:process.env.DATABASEDB,
    port:process.env.PORTDB,
})

module.exports = pool;