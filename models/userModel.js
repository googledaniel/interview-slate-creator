const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	userName: String,
	firstName: String,
	lastName: String,
	email: String,
	phone: Number,
	companyName: String,
	companyWebsite: String,
	companyID: String,
	jobTitle: String,
	accessLevel: String,
	teamIDs: Array

}, {
	timestamps: true
})

const UserModel = model('UserModel', userSchema)

module.exports = UserModel;