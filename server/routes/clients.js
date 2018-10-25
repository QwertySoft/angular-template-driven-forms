/** Requires */
var express = require('express');
var _ = require('lodash');
var router = express.Router();

router.get('/clients', function (req, res) {

	let result = [];
	result.push({
		id: 1,
		name: 'Maximo Zarza',
		phone: '2983565091',
		address: 'Calle 6 635 1D',
		email: 'zmaximo1990@gmail.com',
		instagram: 'https://www.instagram.com/zarzamaximo/',
		avatar: 'https://media.tenor.com/images/d02f68f2b8785baa2e72115dec9bceed/tenor.gif'
	});
	result.push({
		id: 2,
		name: 'Qwertysoft SRL',
		phone: null,
		address: 'Calle 61 522 2do 6to, ADV, B1904 La Plata, Pcia de Buenos Aires',
		email: 'qwertysoftar@gmail.com',
		instagram: 'https://www.instagram.com/qwertysoftar/',
		avatar: null
	});
	
	res.status(200).json(result);
});

module.exports = router;