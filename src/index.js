const express = require("express");
const pool = require("../db/database");
const server = express();
require("dotenv").config();

const port = "3000";

async function getUsers(){
  try {
    const client = pool.connect();
    const query = pool.query("SELECT * FROM carros");
    return query;
  } catch (e) {
    console.log(e)
  }
};

server.get("/c", (req, res) => {
  return getUsers();
});

server.listen(port);
