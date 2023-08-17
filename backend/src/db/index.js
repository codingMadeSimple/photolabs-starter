// require('dotenv').config();
const pg = require("pg");

console.log(process.env.PGUSER)
const client = new pg.Client({
  host: process.env.PGHOST,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});
// console.log(client)
client
  .connect()
  .then(()=>{
    console.log("You've connected to the database.")
  })
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
