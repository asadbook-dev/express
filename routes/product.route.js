const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'product.html'));
});

router.get('/add', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'add.product.html'));
});

module.exports = router;
