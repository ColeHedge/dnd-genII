const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((req, res) => {
	var db = admin.database();
 	res.set('Access-Control-Allow-Origin', "*")
  	res.set('Access-Control-Allow-Methods', 'GET, POST')
  	var data = req.query.data;
  	var ref = db.ref('/0').once('value')
  		.then(function(snapshot) {
  			var name = snapshot.child("name").val();
  			res.status(200).send("database is connected Maybe? " + name);
  		});
});