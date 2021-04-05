const Slate = require('../../models/slateModel');
const express = require('express');
//remaned slateRouter to just router
const router = express.Router();


//Read All Slates for Dash

router.get('/dashboard', async (req, res) => {
	try {
		const foundSlates = await Slate.find(req.body)
		res
			.status(200)
			.json(foundSlates)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

//Update

//Destroy


module.exports = router