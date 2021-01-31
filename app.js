const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('<h1> Calculator using express </h1>');
});

app.listen(3000, function () {
	console.log('server runing');
});