/** Requires */
var express = require('express');
var _ = require('lodash');
var router = express.Router();
let tedious = require('tedious');
let Connection = tedious.Connection;
let { connection_config } = require('../connection');

router.get('/withdrawal-requests', function (req, res) {

	console.log(req.query.office);
	console.log(req.query.sector);

	// let connection = new Connection(connection_config);
	// connection.on('connect', function(err) {
	// 	if (err) console.error('error connecting :-(', err);
	// 	else console.log('successfully connected!!')
	
	// 	let result = [];
	// 	result.push({
	// 		'cliente': 'Maximo Zarza',
	// 		'retira_por': 'Herrajes',
	// 		'sucursal': 'CASA_CENTAL',
	// 	});
	// 	result.push({
	// 		'cliente': 'Santiago Cercedo',
	// 		'retira_por': 'Placas',
	// 		'sucursal': 'CALLE_72',
	// 	});
		// const statement = 'SELECT NUMERO, CUIT from vw_clientes_filtrados_01;'
		// function handleResults(err, numRows, rows) {
		// 	if (err) return console.error('error running select statement', err);
		// 	console.log('got', numRows, 'rows back from the DB');
	
		// 	console.log('FIRST', rows[0][0].value); // => obtiene el valor de la primer columa de la primer fila
		// 	console.log('FIRST', rows[0][1].value); // => obtiene el valor de la segunda columa de la primer fila
		// }
	
		// let request = new tedious.Request(statement, handleResults);
		// connection.execSql(request);
	// 	res.status(200).json(result);
	// });

	let result = [];
	result.push({
		'client_code': '41123',
		'client_name': 'Maximo Zarza',
		'order_number': '123123 - 123',
		'receipt_number': '3355 -33 312',
		'created_date': new Date(),
		'pull_sector': 'Herrajes',
		'office': 'CASA_CENTAL',
	});
	result.push({
		'client_code': '555',
		'client_name': 'Santiago Cercedo',
		'order_number': '109993 - 000',
		'receipt_number': '7777 -13 233',
		'created_date': new Date(),
		'pull_sector': 'Placas',
		'office': 'CALLE_72',
	});
	
	res.status(200).json(result);
});

module.exports = router;