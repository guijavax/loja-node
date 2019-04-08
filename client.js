const config = require('./utils/config');

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
  console.log(req.params)
  // let sql = {text: 'select * from c'};
  
  // db.query(sql).then(result => {
  //   res.setHeader('Content-Type', 'application/json')
  //   res.end(JSON.stringify(result.rows))
  // }).catch(e => console.error(e))
});