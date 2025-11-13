// Express.js

require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // JSON parsing middleware`
app.use((req, res, next) => {
	console.log('Middleware worked!');
	next();
}); // Middleware ishga tushuriladi USE mthodi orqali

function adminCheck(req, res, next) {
	const { email } = req.body;
	if (email !== 'admin@gmail.com') {
		return res.status(401).json({ message: 'USer is not admin' });
	}
	req.isAdmin = true;
	next();
}

app.get('/', (req, res) => {
	res.end('Hello asadbook-dev!');
});

app.get('/user', (req, res) => {
	res.end('Hello user!');
});

app.post('/post', (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

app.post('/admin-login', adminCheck, (req, res) => {
	if (req.isAdmin) {
		return res.json({ body: req.body, message: 'Login successfully!' });
	}
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Node.js

// const http = require('http');
// const PORT = process.env.PORT;
// const server = http.createServer((req, res) => {
// 	res.end('Hello asadbook-dev');
// });
// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
