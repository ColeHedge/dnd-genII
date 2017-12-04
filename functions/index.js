const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.helloWorld = functions.https.onRequest((req, res) => {
 	res.set('Access-Control-Allow-Origin', "*")
  	res.set('Access-Control-Allow-Methods', 'GET, POST')
  	var data = req.query.data;
  	res.status(200).send(data);
});