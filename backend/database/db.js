const Pool = require('pg').Pool
const path = require('path')
require('dotenv').config({  path: require('find-config')('.env') })

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: 'localhost',
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE_NAME,
})

module.exports = pool
