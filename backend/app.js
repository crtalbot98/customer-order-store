require('dotenv').config();
const express = require('express');
const con = require('./db');
const app = express();

const getOrders = require('./routes/get-orders');
    
con.connect(function(err){
    if (err){
        throw err;
    }
    else {
        console.log('Connected');
    }
});
	
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.use('/getOrders', getOrders);
		
app.listen(8082, '127.0.0.1');
