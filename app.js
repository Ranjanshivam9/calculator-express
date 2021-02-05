const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// using node - body parser to get the readable data from the page to perform calculation
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2;
	res.send('Answer is ' + result);
});

// Request for the bmi calculator
app.get('/bmi', (req, res) => {
	res.sendFile(__dirname + '/bmi.html');
});

// response from the server to the calculator
app.post('/bmi', (req, res) => {
	var height = parseFloat(req.body.height);
	var weight = parseFloat(req.body.weight);

	var result = weight / (height * height);
	// rounf of to 2 digits
	result = result.toFixed(2);
	res.send('BMI is ' + result);
});

app.listen(3000, function () {
	console.log('server running');
});
