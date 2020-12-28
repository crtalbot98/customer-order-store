const express = require('express');
const router = express.Router();
const con = require('../db');

router.get('/all', (req, res, next) => {
    con.query('SELECT * FROM orders', (err, results, fields) => {

        res.send(results);

        if(err) throw err;
    })
});

module.exports = router;