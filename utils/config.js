const pg = require('pg')
const connect = 'postgres://guiborges:@borges123@localhost:5432/loja';
const client = new pg.Client(connect);
const port = 3000;
const express = require('express');

const app = express();

client.connect(err => {
    if(err) {
        console.err('Could not connect db')
    } 
});

global.db = client;
app.listen(port, () => {
    console.log(`connected in port ${port}`)
});

exports.app = app;