const Slate = require('../models/slateModel');
const express = require('express');
const slateRouter = express.Router();

//Index
//
// app.get('/store', (req, res) => {
// 	Product.find({}, (err, foundProducts) => {
// 		if (!err) {
// 			res
// 				.status(200)
// 				.render('Index', { products: foundProducts })
// 		} else {
// 			res
// 				.status(400)
// 				.send(err)
// 		}
// 	})
// });

slateRouter.post('/', async (req, res) => {
	try {
		const newSlate = await Slate.create(req.body)
		res
			.status(200)
			.json(newSlate)

	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

//Read Slate
slateRouter.get('/:id', async (req, res) => {
	try {
		const foundSlate = await Slate.findById(req.params.id)
		// await foundSlate.execPopulate('slate')
		res
			.status(200)
			.json(foundSlate)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

//Read All Slates for Dash

slateRouter.get('/dashboard', async (req, res) => {
	try {
		const foundSlate = await Slate.find({})
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


module.exports = slateRouter