const http = require('http');
const express = require('express');
const pg = require('pg')

const server = http.createServer((req, res) => {
    if (req.url == '/getStates') {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested")
        const connect = 'postgres://guiborges:@borges123@localhost:5432/loja';
        const client = new pg.Client(connect);
        client.connect(err => {
            if(err) {
                console.log('Could not connect db')
            } 
            let sql = {text: 'select * from states'};
    
            client.query(sql).then(result => {
               res.setHeader('Content-Type', 'application/json')
               res.end(JSON.stringify(result.rows))
            }).catch(e => console.error(e))
        });
    }
})
server.listen(3000);