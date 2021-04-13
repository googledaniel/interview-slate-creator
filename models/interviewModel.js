const { Schema, model } = require('mongoose');

const InterviewSchema = new Schema({
	question: String,
	qSubDomain: String,
	subLanguageBoolean: false,
	subLanguages: String,
	interviewerName: String,
	interviewerEmail: String,
	lookFor: String,
	started: false,
	completed: false,
	rawCode: String,
	notes: String,
	summary: String,
	scores: [],
}, {
	timestamps: true
})

const Interview = model('Interview', InterviewSchema)

module.exports = Interview;

