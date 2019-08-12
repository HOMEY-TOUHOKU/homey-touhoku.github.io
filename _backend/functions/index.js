const functions = require('firebase-functions');
const Feed = require('rss-to-json');
const cors = require('cors')({origin: true});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.blog = functions.https.onRequest((request, response) => {
 cors(request, response, () => {
  Feed.load('http://rssblog.ameba.jp/tokotokoami/rss20.xml', (err, rss) => {
   if (err) {
    response.sendStatus(500);
    return;
   }

   response.send(rss);
  });
 });
});
