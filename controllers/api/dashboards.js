const Slate = require('../../models/slateModel');
const express = require('express');
//renaned slateRouter to just router
const router = express.Router();


//Read All Slates for Dash

router.get('/', async (req, res) => {
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


module.exports = router