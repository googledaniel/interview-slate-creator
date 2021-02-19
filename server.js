require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const path = require('path');

const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

db.on('open', () => {
	console.log('Mongo is Connected');

});
/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development'){
	app.use(express.static('public'))
}

/* Controller Goes Here */
app.use('/api/slates', require('./controllers/slates'))
/* Controller Ends here */

//LISTENER


//for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
	console.log(`API Listening on port ${PORT}`);
});
