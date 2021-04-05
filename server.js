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

/* Define the controller routes here */
app.use('/api/slates', require('./controllers/api/slates'))
// app.use('/api/users', require('./controllers/api/users'))
app.use('/api/dashboards', require('./controllers/api/dashboards'))
// app.use('/api/auth', require('./controllers/api/auth'))
// app.use('/api/profile', require('./controllers/api/profile'))
// app.use('/api/posts', require('./controllers/api/posts'))


/* Controller Ends here */

//LISTENER


//for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
	console.log(`API Listening on port ${PORT}`);
});
