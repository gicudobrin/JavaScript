var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = 'mongodb+srv://mihai:1234567a@gettingstarted-sszae.mongodb.net';
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Librarie");
  dbo.collection("Biblioteca").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});