var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/nydb";

MongoClient.connect(url, function (err, db) {
  
  console.log("Database created!");
  db.close();
});
