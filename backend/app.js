require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const orders = require('./routes/orders');
const customers = require('./routes/customers');

app.use(cors());
app.use(express.json({
    type: ['application/json', 'text/plain']
}));
app.use(express.urlencoded({ extended: true}));

app.use('/orders', orders);
app.use('/customers', customers);
		
app.listen(8082, '127.0.0.1');