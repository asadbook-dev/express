const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
	res.json({ body: [], message: 'READ' });
});

route.post('/', (req, res) => {
	res.json({ body: req.body, message: 'CREATE' });
});

route.put('/:id', (req, res) => {
	res.json({ body: { id: req.params.id }, message: 'UPDATE' });
});

route.delete('/:id', (req, res) => {
	res.json({ body: { id: req.params.id }, message: 'DELETE' });
});

module.exports = route;
