const express = require('express');
const router = express.Router();
const request = require('request');
const parseString = require('xml2js').parseString;


request('http://www.nfl.com/liveupdate/scorestrip/ss.xml', function (error, response, body) 
{
  	console.log('body:', body); // Print the HTML for the Google homepage. 
  	var xml = body;
	parseString(xml, function (err, result) 
	{
		
	   var retVal = JSON.stringify(result);
	   router.get('/', function(req, res, next) 
	   {
	  		res.render('index', { title: 'Express', xml:retVal });
	   });
	});
});




/* GET home page. */

module.exports = router;
