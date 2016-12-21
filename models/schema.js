var mongoose = require('mongoose');
var schema1 = mongoose.Schema;
var saveheadlines = new schema1({
    "author" : String,
    "title" : String,
    "description" : String,
    "url" : String,
    "urlToImage" : String,
    "publishedAt" : String,
    "Comments" : String

})
module.exports = mongoose.model('savenews',saveheadlines);
