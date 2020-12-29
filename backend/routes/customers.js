const express = require('express');
const router = express.Router();
const connection = require('../db');
const {checkErrors} = require('../helpers.js');

router.get('/salesReps', async (req, res, next) => {
    const conn = await connection();
    const [rows, fields] = await conn.execute('SELECT firstName, lastName FROM employees WHERE jobTitle = "Sales Rep"');
    if(rows) res.send(rows)
});

router.post('/add', async (req, res, next) => {
    const body = req.body;
    const conn = await connection();
    let [rows, fields] = await conn.execute(`SELECT * FROM customers WHERE contactLastName = "Talbot"`);
    console.log(rows);
    const errors = checkErrors(body, ['customerName', 'contactLastName', 'contactFirstName', 'phone', 'addressLine1', 'city', 'country', 'salesRepEmployee', 'creditLimit']);

    for(let key in body){
        if((key === 'addressLine2' || key === 'state' || key === 'postalCode') && body[key] === ''){
            body[key] = null;
        }
        else if(key === 'salesRepEmployee' && body[key] !== ''){
            let [rows, fields] = await conn.execute(`SELECT employeeNumber FROM employees WHERE firstName = "${body[key][0]}" AND lastName = "${body[key][1]}"`);
            if(rows) body[key] = rows[0]['employeeNumber'];
            else body[key] = null
        }
    }

    if(errors.length > 0){
        res.send(JSON.stringify({'error': errors}))
    }
    else{
        let [rows, fields] = await
            conn.execute(`INSERT IGNORE INTO customers (customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit) 
                                VALUES ('${body.customerName}', '${body.contactLastName}', '${body.contactFirstName}', '${body.phone}', '${body.addressLine1}', '${body.addressLine2}', '${body.city}', '${body.state}', '${body.postalCode}', '${body.country}', '${body.salesRepEmployee}', '${body.creditLimit}')`);
        if(rows) res.send({'success': rows});
    }
});

module.exports = router;