const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/Users');
const Residence = require('../models/Contact');

//  @ route Get api/contact
//  Get all users contact
// Private
router.get('/', auth, async (req, res) => {
	try {
		const residences = await Residence.find({ user: req.user.id }).sort({ date: -1 });
		res.json(residences);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

router.post(
	'/',
	[
		auth,
		[
			check('title', 'Title is Required').not().notEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, price, bedrooms, bathrooms, sqft, location, description, type } = req.body;

		try {
			const newResidence = new Residence({
				title,
				price,
				bedrooms,
				bathrooms,
				sqft,
				location,
				type,
				description,
				user        : req.user.id
			});

			const residence = await newResidence.save();
			res.json(residence);
		} catch (error) {
			console.log(error);
			res.status(500).send('Server Error!!!!');
		}
	}
);

router.put('/:id', auth, async (req, res) => {
	const { title, price, bedrooms, bathrooms, sqft, location, description } = req.body;

	const residenceField = {};
	if (title) residenceField.title = title;
	if (price) residenceField.title = price;
	if (bedrooms) residenceField.title = bedrooms;
	if (bathrooms) residenceField.title = bathrooms;
	if (sqft) residenceField.title = sqft;
	if (location) residenceField.title = location;
	if (type) residenceField.title = type;
	if (description) residenceField.title = description;

	try {
		let residence = await Residence.findById(req.params.id);
		if (!residence) return res.status(404).json({ msg: 'Contact not found' });

		if (residence.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		residence = await Residence.findByIdAndUpdate(req.params.id, { $set: residenceField }, { new: true });

		res.json(residence);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		let residence = await Residence.findById(req.params.id);
		if (!residence) return res.status(404).json({ msg: 'Contact not found' });

		if (residence.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		await Residence.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Contact Removed' });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
