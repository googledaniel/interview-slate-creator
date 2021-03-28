const { Schema, model } = require('mongoose');

const slateSchema = new Schema({
	candidateName: String,
	codingLanguage: String,
	domain: String,
	level: Number,
	questions: []
}, {
	timestamps: true
})

const Slate = model('Slate', slateSchema)

module.exports = Slate;