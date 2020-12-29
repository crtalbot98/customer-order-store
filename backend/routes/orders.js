const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/all', async (req, res, next) => {
    const conn = await connection();
    const [rows, fields] = await conn.execute('SELECT customerName, orderDate, orderNumber, requiredDate, shippedDate, status FROM orders o INNER JOIN customers c ON o.customerNumber = c.customerNumber');
    if(rows) res.send(rows);
    else res.send({'error': 'something went wrong...'})
});

module.exports = router;