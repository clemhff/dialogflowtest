const express = require('express')
const bodyParser = require('body-parser')
const {dialogflow} = require('actions-on-google');
const assistant = dialogflow();

const PORT = process.env.PORT || 3050;
// ... app code here

assistant.intent('helloWorld', conv => {
	let name = conv.parameters.name;
	conv.ask('Hello, welcome ' + name);
});




const expressApp = express().use(bodyParser.json())

expressApp.get('/', (req,res) => res.send('ok'));
expressApp.post('/fulfillment', assistant)

expressApp.listen(PORT, function () {
	console.log('Express server started on port ${PORT}/');
})
