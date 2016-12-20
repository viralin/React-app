var express = require('express');
var router = express.Router();
var newsLive = require('../models/schema');

/*  GET home page. */
/* router.post('/', function(req, res) {

  var namee = req.body.id;
  //var surname = req.body.name;
	var user = req.body.status;
	var id = req.body.sources[0].id;
	var name = req.body.name;
	var desc = req.body.description;
	var data = req.body;




  //console.log(data);
  console.log(id);
  //console.log(name);
  //console.log(desc);

 // console.log(surname);


 // res.send("Addition of two numbers is "+ans);

});   */


/* Endpoint is:- http://localhost:8081/news/adddatatodb*/
 router.post("/adddatatodb",function(req ,res) {

   if(req.body){
     var newssave = new newsLive();
     newssave.author = req.body.author;

     newssave.title = req.body.title;
     newssave.description = req.body.description;
     newssave.url = req.body.url;

     newssave.urlToImage = req.body.urlToImage;
     newssave.publishedAt = req.body.publishedAt;

   newssave.save(function(err){
     if(err) {
       res.send("Error in saving the news headlines");
   }
   else{
      res.send("Saved the news headlines in the mongo" );
  }
});
}
  else{
    res.send("No headline found for saving the headline");
 }
 });

/* Endpoint is:- http://localhost:8081/news/delete*/
router.delete("/delete",function(req,res) {
   if(req.body){
     request=req.body.title;
     newsLive.remove({title:request},function(err){
       if(err){
         res.send("Error in deleting the data");
       }
       else{
         res.send("Data is deleted successfully");
       }
     });
   }
     else{
       res.send("no data found to delete");
     }
 });

/* Endpoint is:- http://localhost:8081/news/update*/
 router.put('/update', function(req, res){
   if(req.body)
   {
    request1=req.body.title;
     request2=req.body.Comments;
   newsLive.update({title:request1},{$set:{Comments:request2}},function(err){

       if(err) {
         res.send(err);
       }
       else  {
       res.send("News updated successfully");
       }
     });
   }
 });

/* Endpoint is:- http://localhost:8081/news/view*/
router.get('/view', function(req, res,next) {
 newsLive.find({},function(err,allnews){
      if(err) throw err;
             res.send(allnews);

         });
        });


	//console.log(req.body);
	//res.json(req.body);
	//console.log(req.body);




module.exports = router;
