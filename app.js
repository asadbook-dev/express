// Express.js

require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
	res.end('Hello asadbook-dev!');
});

app.get('/user', (req, res) => {
	res.end('Hello user!');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Node.js

// const http = require('http');
// const PORT = process.env.PORT;
// const server = http.createServer((req, res) => {
// 	res.end('Hello asadbook-dev');
// });
// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
