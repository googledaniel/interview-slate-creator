
const { Schema, model } = require('mongoose');

const slateSchema = new Schema({
	candidateName: String,
	codingLanguage: String,
	domain: String,
	level: Number,
	questions: [{
		question: String,
		qSubDomain: String,
		subLanguageBoolean: Boolean,
		subLanguages: String,
		interviewerName: String,
		interviewerEmail: String,
		lookFor: String,
		started: Boolean,
		completed: Boolean,
		rawCode: String,
		notes: String,
		summary: String,
		scores: [{
			scoreType: String,
			percentile: Number
		}]
	}],
}, {
	timestamps: true
})

const Slate = model('Slate', slateSchema)

module.exports = Slate;