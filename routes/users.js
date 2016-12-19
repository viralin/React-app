var express = require('express');
var router = express.Router();
var userauthentication = require('../models/userauthentication');


/* GET users listing. */
router.get('/', function(req, res, next) {


	//console.log("Inside Get");
	
	
  res.send('respond with a resource');
});

 router.post('/usertest', function(req, res) {

 	//console.log("Inside Post");
 	if(req.body)
 	{ 
 		//console.log("Inside Body");
 		var userdetails = new userauthentication();
 		userdetails.username = req.body.username;
 		userdetails.password = req.body.password;
 		//console.log("UserName"+userdetails.username);
 		userdetails.save(function(err) {
 			if(err)
 			{
 				res.send(err);
 			}
 			else
 			{
 				res.send("inserted to database")
 			}
 			
 		});
 	}
  
 
}); 


module.exports = router;
 
