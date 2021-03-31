const UserModel = require('../models/UserModel');
const express = require('express');
const UserRouter = express.Router();



UserRouter.post('/', async (req, res) => {
	try {
		const newSlate = await UserModel.create(req.body)
		res
			.status(200)
			.json(newSlate)

	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

//Read Dashboards - any user
UserRouter.get('/', async (req, res) => {
	try {
		const foundSlate = await UserModel.find(req.params.id)
		res
			.status(200)
			.json(foundSlate)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

//Update

//Destroy


module.exports = UserRouter;