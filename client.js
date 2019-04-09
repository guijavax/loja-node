const config = require('./utils/config');
const bodyParser = require('body-parser');

const express = require('express')
config.app.use(express.json())
config.app.get('/getStates', (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested");

  let sql = {text: 'select * from states'};
  
  db.query(sql).then(result => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result.rows))
  }).catch(e => console.error(e))
});

config.app.get('/getCitys', (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested");
  console.log(req.query);
  // let id = 
  let sql = {text: `select * from city where id_estate= ${req.query.id_estate}` };
  
  db.query(sql).then(result => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result.rows))
  }).catch(e => console.error(e))
});